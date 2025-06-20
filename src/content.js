// Content script for Focus Analyzer

// Styles for intervention UI
const styles = `
  .focus-analyzer-intervention {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: #ffffff;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    padding: 15px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    z-index: 9999;
    max-width: 300px;
    font-family: Arial, sans-serif;
  }

  .focus-analyzer-intervention h3 {
    margin: 0 0 10px 0;
    color: #333;
    font-size: 16px;
  }

  .focus-analyzer-intervention p {
    margin: 0 0 15px 0;
    color: #666;
    font-size: 14px;
    line-height: 1.4;
  }

  .focus-analyzer-intervention button {
    background: #4CAF50;
    color: white;
    border: none;
    padding: 8px 15px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    margin-right: 10px;
  }

  .focus-analyzer-intervention button:hover {
    background: #45a049;
  }

  .focus-analyzer-intervention .dismiss {
    background: #f5f5f5;
    color: #666;
  }

  .focus-analyzer-intervention .dismiss:hover {
    background: #e0e0e0;
  }
`;

// Inject styles
const styleSheet = document.createElement('style');
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);

// Listen for messages from background script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'SHOW_INTERVENTION') {
    showIntervention(message.data);
  }
  return true;
});

// Show intervention UI
function showIntervention(data) {
  const { domain, timeSpent } = data;
  const minutes = Math.round(timeSpent / (1000 * 60));

  const intervention = document.createElement('div');
  intervention.className = 'focus-analyzer-intervention';
  intervention.innerHTML = `
    <h3>Focus Check</h3>
    <p>You've spent ${minutes} minutes on ${domain}. Would you like to take a break?</p>
    <button class="take-break">Take a Break</button>
    <button class="dismiss">Continue Working</button>
  `;

  document.body.appendChild(intervention);

  // Handle intervention actions
  intervention.querySelector('.take-break').addEventListener('click', () => {
    chrome.runtime.sendMessage({
      type: 'INTERVENTION_ACTION',
      data: {
        action: 'TAKE_BREAK',
        domain,
        timestamp: Date.now()
      }
    });
    intervention.remove();
  });

  intervention.querySelector('.dismiss').addEventListener('click', () => {
    chrome.runtime.sendMessage({
      type: 'INTERVENTION_ACTION',
      data: {
        action: 'DISMISS',
        domain,
        timestamp: Date.now()
      }
    });
    intervention.remove();
  });

  // Auto-dismiss after 30 seconds
  setTimeout(() => {
    if (document.body.contains(intervention)) {
      intervention.remove();
    }
  }, 30000);
}

// Track user interactions
let lastInteraction = Date.now();
const IDLE_THRESHOLD = 5 * 60 * 1000; // 5 minutes

function updateInteraction() {
  const now = Date.now();
  const idleTime = now - lastInteraction;

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
const interactionEvents = ['mousedown', 'keydown', 'scroll', 'touchstart'];
interactionEvents.forEach(eventType => {
  document.addEventListener(eventType, updateInteraction, { passive: true });
});