/******/ (() => { // webpackBootstrap
// Content script for Focus Analyzer

// Styles for intervention UI
var styles = "\n  .focus-analyzer-intervention {\n    position: fixed;\n    bottom: 20px;\n    right: 20px;\n    background: #ffffff;\n    border: 1px solid #e0e0e0;\n    border-radius: 8px;\n    padding: 15px;\n    box-shadow: 0 2px 10px rgba(0,0,0,0.1);\n    z-index: 9999;\n    max-width: 300px;\n    font-family: Arial, sans-serif;\n  }\n\n  .focus-analyzer-intervention h3 {\n    margin: 0 0 10px 0;\n    color: #333;\n    font-size: 16px;\n  }\n\n  .focus-analyzer-intervention p {\n    margin: 0 0 15px 0;\n    color: #666;\n    font-size: 14px;\n    line-height: 1.4;\n  }\n\n  .focus-analyzer-intervention button {\n    background: #4CAF50;\n    color: white;\n    border: none;\n    padding: 8px 15px;\n    border-radius: 4px;\n    cursor: pointer;\n    font-size: 14px;\n    margin-right: 10px;\n  }\n\n  .focus-analyzer-intervention button:hover {\n    background: #45a049;\n  }\n\n  .focus-analyzer-intervention .dismiss {\n    background: #f5f5f5;\n    color: #666;\n  }\n\n  .focus-analyzer-intervention .dismiss:hover {\n    background: #e0e0e0;\n  }\n";

// Inject styles
var styleSheet = document.createElement('style');
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);

// Listen for messages from background script
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.type === 'SHOW_INTERVENTION') {
    showIntervention(message.data);
  }
  return true;
});

// Show intervention UI
function showIntervention(data) {
  var domain = data.domain,
    timeSpent = data.timeSpent;
  var minutes = Math.round(timeSpent / (1000 * 60));
  var intervention = document.createElement('div');
  intervention.className = 'focus-analyzer-intervention';
  intervention.innerHTML = "\n    <h3>Focus Check</h3>\n    <p>You've spent ".concat(minutes, " minutes on ").concat(domain, ". Would you like to take a break?</p>\n    <button class=\"take-break\">Take a Break</button>\n    <button class=\"dismiss\">Continue Working</button>\n  ");
  document.body.appendChild(intervention);

  // Handle intervention actions
  intervention.querySelector('.take-break').addEventListener('click', function () {
    chrome.runtime.sendMessage({
      type: 'INTERVENTION_ACTION',
      data: {
        action: 'TAKE_BREAK',
        domain: domain,
        timestamp: Date.now()
      }
    });
    intervention.remove();
  });
  intervention.querySelector('.dismiss').addEventListener('click', function () {
    chrome.runtime.sendMessage({
      type: 'INTERVENTION_ACTION',
      data: {
        action: 'DISMISS',
        domain: domain,
        timestamp: Date.now()
      }
    });
    intervention.remove();
  });

  // Auto-dismiss after 30 seconds
  setTimeout(function () {
    if (document.body.contains(intervention)) {
      intervention.remove();
    }
  }, 30000);
}

// Track user interactions
var lastInteraction = Date.now();
var IDLE_THRESHOLD = 5 * 60 * 1000; // 5 minutes

function updateInteraction() {
  var now = Date.now();
  var idleTime = now - lastInteraction;
  if (idleTime > IDLE_THRESHOLD) {
    chrome.runtime.sendMessage({
      type: 'ACTIVITY_UPDATE',
      data: {
        type: 'RETURN_FROM_IDLE',
        timestamp: now
      }
    });
  }
  lastInteraction = now;
}

// Add interaction listeners
var interactionEvents = ['mousedown', 'keydown', 'scroll', 'touchstart'];
interactionEvents.forEach(function (eventType) {
  document.addEventListener(eventType, updateInteraction, {
    passive: true
  });
});
/******/ })()
;