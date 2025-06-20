// Dashboard script for Focus Analyzer

// Initialize Chart.js
import Chart from 'chart.js/auto';

// DOM Elements
const navItems = document.querySelectorAll('.nav-item');
const sections = document.querySelectorAll('.dashboard-section');

// Charts
let focusScoreChart;
let timeDistributionChart;
let dailyPatternChart;
let weeklyTrendChart;
let distractionsChart;

// Timer Elements
const focusTimer = document.getElementById('focusTimer');
const startTimerBtn = document.getElementById('startTimer');
const pauseTimerBtn = document.getElementById('pauseTimer');
const resetTimerBtn = document.getElementById('resetTimer');

// Settings Elements
const settingsForm = document.querySelectorAll('.settings-container input, .settings-container select');

// Storage keys
const STORAGE_KEYS = {
  ACTIVITY_LOG: 'activityLog',
  SETTINGS: 'settings',
  PATTERNS: 'patterns'
};

// Initialize dashboard
async function initializeDashboard() {
  setupNavigation();
  await loadSettings();
  initializeCharts();
  setupFocusTimer();
  setupEventListeners();
  updateDashboard();
}

// Navigation
function setupNavigation() {
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      const sectionId = item.dataset.section;
      
      navItems.forEach(nav => nav.classList.remove('active'));
      sections.forEach(section => section.classList.remove('active'));
      
      item.classList.add('active');
      document.getElementById(sectionId).classList.add('active');
    });
  });

  // Handle hash navigation
  const hash = window.location.hash.slice(1);
  if (hash) {
    const targetNav = document.querySelector(`[data-section="${hash}"]`);
    if (targetNav) targetNav.click();
  }
}

// Charts initialization
function initializeCharts() {
  // Focus Score Chart
  focusScoreChart = new Chart(document.getElementById('focusScoreChart'), {
    type: 'doughnut',
    data: {
      labels: ['Focused', 'Distracted'],
      datasets: [{
        data: [75, 25],
        backgroundColor: ['#4CAF50', '#ff6b6b']
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: '70%'
    }
  });

  // Time Distribution Chart
  timeDistributionChart = new Chart(document.getElementById('timeDistributionChart'), {
    type: 'bar',
    data: {
      labels: ['Morning', 'Afternoon', 'Evening'],
      datasets: [{
        label: 'Productive Time',
        data: [2, 3, 1.5],
        backgroundColor: '#4CAF50'
      }, {
        label: 'Distracted Time',
        data: [0.5, 1, 2],
        backgroundColor: '#ff6b6b'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: { stacked: true },
        y: { stacked: true }
      }
    }
  });

  // Daily Pattern Chart
  dailyPatternChart = new Chart(document.getElementById('dailyPatternChart'), {
    type: 'line',
    data: {
      labels: Array.from({length: 24}, (_, i) => `${i}:00`),
      datasets: [{
        label: 'Focus Level',
        data: Array.from({length: 24}, () => Math.random() * 100),
        borderColor: '#1a73e8',
        tension: 0.4
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  });

  // Weekly Trend Chart
  weeklyTrendChart = new Chart(document.getElementById('weeklyTrendChart'), {
    type: 'line',
    data: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [{
        label: 'Focus Score',
        data: Array.from({length: 7}, () => Math.random() * 100),
        borderColor: '#4CAF50',
        tension: 0.4
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  });

  // Distractions Chart
  distractionsChart = new Chart(document.getElementById('distractionsChart'), {
    type: 'pie',
    data: {
      labels: ['Social Media', 'Entertainment', 'News', 'Other'],
      datasets: [{
        data: [40, 30, 20, 10],
        backgroundColor: ['#ff6b6b', '#ffd93d', '#6c5ce7', '#a8e6cf']
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  });
}

// Focus Timer
let timerInterval;
let timeLeft = 25 * 60; // 25 minutes in seconds

function setupFocusTimer() {
  updateTimerDisplay();

  startTimerBtn.addEventListener('click', startTimer);
  pauseTimerBtn.addEventListener('click', pauseTimer);
  resetTimerBtn.addEventListener('click', resetTimer);
}

function startTimer() {
  startTimerBtn.disabled = true;
  pauseTimerBtn.disabled = false;
  
  timerInterval = setInterval(() => {
    timeLeft--;
    updateTimerDisplay();

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      notifyTimerComplete();
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(timerInterval);
  startTimerBtn.disabled = false;
  pauseTimerBtn.disabled = true;
}

function resetTimer() {
  clearInterval(timerInterval);
  timeLeft = 25 * 60;
  updateTimerDisplay();
  startTimerBtn.disabled = false;
  pauseTimerBtn.disabled = true;
}

function updateTimerDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  focusTimer.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function notifyTimerComplete() {
  // Show notification
  chrome.notifications.create({
    type: 'basic',
    iconUrl: 'icons/icon128.png',
    title: 'Focus Session Complete',
    message: 'Great job! Take a short break.'
  });
}

// Settings Management
async function loadSettings() {
  const { settings } = await chrome.storage.local.get(STORAGE_KEYS.SETTINGS);
  
  // Update form values
  document.getElementById('trackingEnabled').checked = settings.trackingEnabled;
  document.getElementById('focusGoal').value = settings.dailyFocusGoal;
  document.getElementById('interventionLevel').value = settings.interventionLevel;
  document.getElementById('distractionThreshold').value = settings.distractionThreshold;
}

function setupEventListeners() {
  // Settings change handlers
  settingsForm.forEach(input => {
    input.addEventListener('change', async (e) => {
      const { settings } = await chrome.storage.local.get(STORAGE_KEYS.SETTINGS);
      const newSettings = { ...settings };

      if (e.target.type === 'checkbox') {
        newSettings[e.target.id] = e.target.checked;
      } else {
        newSettings[e.target.id] = e.target.value;
      }

      await chrome.storage.local.set({ [STORAGE_KEYS.SETTINGS]: newSettings });
    });
  });

  // Data management
  document.getElementById('exportData').addEventListener('click', exportData);
  document.getElementById('clearData').addEventListener('click', clearData);
}

// Data Management
async function exportData() {
  const data = await chrome.storage.local.get(null);
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  
  const a = document.createElement('a');
  a.href = url;
  a.download = 'focus-analyzer-data.json';
  a.click();

  URL.revokeObjectURL(url);
}

async function clearData() {
  if (confirm('Are you sure you want to clear all data? This action cannot be undone.')) {
    await chrome.storage.local.clear();
    window.location.reload();
  }
}

// Dashboard Updates
async function updateDashboard() {
  const { activityLog, patterns } = await chrome.storage.local.get([
    STORAGE_KEYS.ACTIVITY_LOG,
    STORAGE_KEYS.PATTERNS
  ]);

  updateCharts(activityLog, patterns);
  updateSiteLists(patterns);
}

function updateCharts(activityLog, patterns) {
  // Update chart data based on activity log and patterns
  // This is a placeholder - implement actual data processing
  
  // Refresh charts
  focusScoreChart.update();
  timeDistributionChart.update();
  dailyPatternChart.update();
  weeklyTrendChart.update();
  distractionsChart.update();
}

function updateSiteLists(patterns) {
  const productiveSites = document.getElementById('productiveSites');
  const distractionSites = document.getElementById('distractionSites');

  // Sort sites by productivity/distraction metrics
  const sites = Object.entries(patterns).sort((a, b) => b[1].totalTime - a[1].totalTime);

  // Update productive sites list
  productiveSites.innerHTML = sites
    .filter(([_, pattern]) => pattern.averageVisitDuration < 15 * 60 * 1000)
    .slice(0, 5)
    .map(([domain, pattern]) => `
      <div class="site-item">
        <span>${domain}</span>
        <span>${Math.round(pattern.totalTime / (60 * 1000))}m</span>
      </div>
    `).join('');

  // Update distraction sites list
  distractionSites.innerHTML = sites
    .filter(([_, pattern]) => pattern.averageVisitDuration >= 15 * 60 * 1000)
    .slice(0, 5)
    .map(([domain, pattern]) => `
      <div class="site-item">
        <span>${domain}</span>
        <span>${Math.round(pattern.totalTime / (60 * 1000))}m</span>
      </div>
    `).join('');
}

// Initialize dashboard when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeDashboard);

// Update dashboard every minute
setInterval(updateDashboard, 60000);