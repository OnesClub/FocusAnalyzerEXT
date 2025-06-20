// Background script for Focus Analyzer

// Constants for storage keys and settings
const STORAGE_KEYS = {
  ACTIVITY_LOG: 'activityLog',
  SETTINGS: 'settings',
  PATTERNS: 'patterns'
};

// Default settings
const DEFAULT_SETTINGS = {
  trackingEnabled: true,
  interventionLevel: 'medium',
  dailyFocusGoal: 6, // hours
  distractionThreshold: 15 // minutes
};

// Initialize extension data
chrome.runtime.onInstalled.addListener(async () => {
  await chrome.storage.local.set({
    [STORAGE_KEYS.SETTINGS]: DEFAULT_SETTINGS,
    [STORAGE_KEYS.ACTIVITY_LOG]: [],
    [STORAGE_KEYS.PATTERNS]: []
  });
});

// Track tab activity
chrome.tabs.onActivated.addListener(async (activeInfo) => {
  if (!(await isTrackingEnabled())) return;
  
  const tab = await chrome.tabs.get(activeInfo.tabId);
  logActivity(tab);
});

chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && await isTrackingEnabled()) {
    logActivity(tab);
  }
});

// Activity logging
async function logActivity(tab) {
  // Skip if URL is undefined or invalid
  if (!tab.url || tab.url === '') return;

  // Validate URL before creating activity
  try {
    new URL(tab.url); // Test if URL is valid
  } catch (e) {
    console.error('Invalid URL:', tab.url);
    return;
  }

  const activity = {
    timestamp: Date.now(),
    url: tab.url,
    title: tab.title || 'Untitled',
    duration: 0 // Will be updated when activity changes
  };

  const { activityLog } = await chrome.storage.local.get(STORAGE_KEYS.ACTIVITY_LOG);
  if (activityLog.length > 0) {
    const lastActivity = activityLog[activityLog.length - 1];
    lastActivity.duration = activity.timestamp - lastActivity.timestamp;
  }

  activityLog.push(activity);
  await chrome.storage.local.set({ [STORAGE_KEYS.ACTIVITY_LOG]: activityLog });
  analyzePatterns();
}

// Pattern analysis
async function analyzePatterns() {
  const { activityLog } = await chrome.storage.local.get(STORAGE_KEYS.ACTIVITY_LOG);
  const { settings } = await chrome.storage.local.get(STORAGE_KEYS.SETTINGS);

  // Group activities by domain
  const domainPatterns = activityLog.reduce((acc, activity) => {
    try {
      if (!activity.url) return acc;
      
      const domain = new URL(activity.url).hostname;
      if (!domain) return acc;

      if (!acc[domain]) {
        acc[domain] = {
          totalTime: 0,
          visitCount: 0,
          averageVisitDuration: 0
        };
      }
      
      // Ensure duration is a valid number
      const duration = typeof activity.duration === 'number' ? activity.duration : 0;
      
      acc[domain].totalTime += duration;
      acc[domain].visitCount++;
      acc[domain].averageVisitDuration = acc[domain].totalTime / acc[domain].visitCount;
    } catch (e) {
      console.error('Error processing activity:', e, activity);
    }
    return acc;
  }, {});

  await chrome.storage.local.set({ [STORAGE_KEYS.PATTERNS]: domainPatterns });

  // Check for intervention needs
  checkForInterventions(domainPatterns, settings);
}

// Intervention system
async function checkForInterventions(patterns, settings) {
  try {
    if (!patterns || !settings || !settings.distractionThreshold) {
      console.error('Invalid patterns or settings data');
      return;
    }

    const distractionThreshold = settings.distractionThreshold * 60 * 1000; // Convert to milliseconds

    for (const [domain, pattern] of Object.entries(patterns)) {
      try {
        if (!pattern || typeof pattern.averageVisitDuration !== 'number') continue;

        if (pattern.averageVisitDuration > distractionThreshold) {
          // Notify content script to show intervention
          const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
          if (tabs[0]) {
            await chrome.tabs.sendMessage(tabs[0].id, {
              type: 'SHOW_INTERVENTION',
              data: {
                domain,
                timeSpent: pattern.averageVisitDuration
              }
            }).catch(err => console.error('Error sending intervention message:', err));
          }
        }
      } catch (err) {
        console.error('Error processing pattern for domain:', domain, err);
      }
    }
  } catch (err) {
    console.error('Error in checkForInterventions:', err);
  }
}

// Utility functions
async function isTrackingEnabled() {
  try {
    const { settings } = await chrome.storage.local.get(STORAGE_KEYS.SETTINGS);
    return settings && typeof settings.trackingEnabled === 'boolean' ? settings.trackingEnabled : DEFAULT_SETTINGS.trackingEnabled;
  } catch (err) {
    console.error('Error checking tracking status:', err);
    return DEFAULT_SETTINGS.trackingEnabled; // Fall back to default setting
  }
}