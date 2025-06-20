// Popup script for Focus Analyzer

// DOM Elements
const trackingToggle = document.getElementById('trackingToggle');
const focusScore = document.getElementById('focusScore');
const productiveTime = document.getElementById('productiveTime');
const distractions = document.getElementById('distractions');
const activityList = document.getElementById('activityList');
const startFocusBtn = document.getElementById('startFocus');
const viewDashboardBtn = document.getElementById('viewDashboard');
const openSettingsBtn = document.getElementById('openSettings');

// Storage keys
const STORAGE_KEYS = {
  ACTIVITY_LOG: 'activityLog',
  SETTINGS: 'settings',
  PATTERNS: 'patterns'
};

// Initialize popup
async function initializePopup() {
  const { settings } = await chrome.storage.local.get(STORAGE_KEYS.SETTINGS);
  trackingToggle.checked = settings.trackingEnabled;
  
  updateStats();
  updateRecentActivity();
}

// Update statistics
async function updateStats() {
  const { activityLog, patterns } = await chrome.storage.local.get([
    STORAGE_KEYS.ACTIVITY_LOG,
    STORAGE_KEYS.PATTERNS
  ]);

  const todayStart = new Date();
  todayStart.setHours(0, 0, 0, 0);

  // Calculate today's stats
  const todayActivities = activityLog.filter(activity => 
    activity.timestamp >= todayStart.getTime()
  );

  // Calculate focus score (ratio of productive to total time)
  const totalTime = todayActivities.reduce((sum, activity) => sum + activity.duration, 0);
  const productiveTimeMs = calculateProductiveTime(todayActivities, patterns);
  const score = totalTime > 0 ? (productiveTimeMs / totalTime) * 100 : 0;

  // Update UI
  focusScore.textContent = `${Math.round(score)}%`;
  productiveTime.textContent = `${Math.round(productiveTimeMs / (1000 * 60 * 60))}h`;
  distractions.textContent = countDistractions(todayActivities, patterns);
}

// Calculate productive time
function calculateProductiveTime(activities, patterns) {
  return activities.reduce((productive, activity) => {
    const domain = new URL(activity.url).hostname;
    const pattern = patterns[domain];
    
    // Consider activity productive if average visit duration is under threshold
    if (pattern && pattern.averageVisitDuration < 15 * 60 * 1000) { // 15 minutes threshold
      return productive + activity.duration;
    }
    return productive;
  }, 0);
}

// Count distractions
function countDistractions(activities, patterns) {
  const distractionThreshold = 15 * 60 * 1000; // 15 minutes
  return activities.reduce((count, activity) => {
    const domain = new URL(activity.url).hostname;
    const pattern = patterns[domain];
    
    if (pattern && pattern.averageVisitDuration > distractionThreshold) {
      return count + 1;
    }
    return count;
  }, 0);
}

// Update recent activity list
async function updateRecentActivity() {
  const { activityLog } = await chrome.storage.local.get(STORAGE_KEYS.ACTIVITY_LOG);
  
  // Get last 5 activities
  const recentActivities = activityLog
    .slice(-5)
    .reverse()
    .map(activity => {
      const time = new Date(activity.timestamp).toLocaleTimeString();
      const domain = new URL(activity.url).hostname;
      return `
        <div class="activity-item">
          <span class="domain">${domain}</span>
          <span class="time">${time}</span>
        </div>
      `;
    })
    .join('');

  activityList.innerHTML = recentActivities;
}

// Event Listeners
trackingToggle.addEventListener('change', async (e) => {
  const { settings } = await chrome.storage.local.get(STORAGE_KEYS.SETTINGS);
  settings.trackingEnabled = e.target.checked;
  await chrome.storage.local.set({ [STORAGE_KEYS.SETTINGS]: settings });
});

startFocusBtn.addEventListener('click', () => {
  chrome.tabs.create({ url: 'dashboard.html#focus-session' });
});

viewDashboardBtn.addEventListener('click', () => {
  chrome.tabs.create({ url: 'dashboard.html' });
});

openSettingsBtn.addEventListener('click', () => {
  chrome.tabs.create({ url: 'dashboard.html#settings' });
});

// Initialize popup when DOM is loaded
document.addEventListener('DOMContentLoaded', initializePopup);

// Update stats every minute
setInterval(updateStats, 60000);