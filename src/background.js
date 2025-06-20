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
  const activity = {
    timestamp: Date.now(),
    url: tab.url,
    title: tab.title,
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
    const domain = new URL(activity.url).hostname;
    if (!acc[domain]) {
      acc[domain] = {
        totalTime: 0,
        visitCount: 0,
        averageVisitDuration: 0
      };
    }
    acc[domain].totalTime += activity.duration;
    acc[domain].visitCount++;
    acc[domain].averageVisitDuration = acc[domain].totalTime / acc[domain].visitCount;
    return acc;
  }, {});

  await chrome.storage.local.set({ [STORAGE_KEYS.PATTERNS]: domainPatterns });

  // Check for intervention needs
  checkForInterventions(domainPatterns, settings);
}

// Intervention system
async function checkForInterventions(patterns, settings) {
  const distractionThreshold = settings.distractionThreshold * 60 * 1000; // Convert to milliseconds

  for (const [domain, pattern] of Object.entries(patterns)) {
    if (pattern.averageVisitDuration > distractionThreshold) {
      // Notify content script to show intervention
      const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
      if (tabs[0]) {
        chrome.tabs.sendMessage(tabs[0].id, {
          type: 'SHOW_INTERVENTION',
          data: {
            domain,
            timeSpent: pattern.averageVisitDuration
          }
        });
      }
    }
  }
}

// Utility functions
async function isTrackingEnabled() {
  const { settings } = await chrome.storage.local.get(STORAGE_KEYS.SETTINGS);
  return settings.trackingEnabled;
}