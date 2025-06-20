/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/content.js":
/*!************************!*\
  !*** ./src/content.js ***!
  \************************/
/***/ (() => {

eval("// Content script for Focus Analyzer\n\n// Styles for intervention UI\nvar styles = \"\\n  .focus-analyzer-intervention {\\n    position: fixed;\\n    bottom: 20px;\\n    right: 20px;\\n    background: #ffffff;\\n    border: 1px solid #e0e0e0;\\n    border-radius: 8px;\\n    padding: 15px;\\n    box-shadow: 0 2px 10px rgba(0,0,0,0.1);\\n    z-index: 9999;\\n    max-width: 300px;\\n    font-family: Arial, sans-serif;\\n  }\\n\\n  .focus-analyzer-intervention h3 {\\n    margin: 0 0 10px 0;\\n    color: #333;\\n    font-size: 16px;\\n  }\\n\\n  .focus-analyzer-intervention p {\\n    margin: 0 0 15px 0;\\n    color: #666;\\n    font-size: 14px;\\n    line-height: 1.4;\\n  }\\n\\n  .focus-analyzer-intervention button {\\n    background: #4CAF50;\\n    color: white;\\n    border: none;\\n    padding: 8px 15px;\\n    border-radius: 4px;\\n    cursor: pointer;\\n    font-size: 14px;\\n    margin-right: 10px;\\n  }\\n\\n  .focus-analyzer-intervention button:hover {\\n    background: #45a049;\\n  }\\n\\n  .focus-analyzer-intervention .dismiss {\\n    background: #f5f5f5;\\n    color: #666;\\n  }\\n\\n  .focus-analyzer-intervention .dismiss:hover {\\n    background: #e0e0e0;\\n  }\\n\";\n\n// Inject styles\nvar styleSheet = document.createElement('style');\nstyleSheet.textContent = styles;\ndocument.head.appendChild(styleSheet);\n\n// Listen for messages from background script\nchrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {\n  if (message.type === 'SHOW_INTERVENTION') {\n    showIntervention(message.data);\n  }\n  return true;\n});\n\n// Show intervention UI\nfunction showIntervention(data) {\n  var domain = data.domain,\n    timeSpent = data.timeSpent;\n  var minutes = Math.round(timeSpent / (1000 * 60));\n  var intervention = document.createElement('div');\n  intervention.className = 'focus-analyzer-intervention';\n  intervention.innerHTML = \"\\n    <h3>Focus Check</h3>\\n    <p>You've spent \".concat(minutes, \" minutes on \").concat(domain, \". Would you like to take a break?</p>\\n    <button class=\\\"take-break\\\">Take a Break</button>\\n    <button class=\\\"dismiss\\\">Continue Working</button>\\n  \");\n  document.body.appendChild(intervention);\n\n  // Handle intervention actions\n  intervention.querySelector('.take-break').addEventListener('click', function () {\n    chrome.runtime.sendMessage({\n      type: 'INTERVENTION_ACTION',\n      data: {\n        action: 'TAKE_BREAK',\n        domain: domain,\n        timestamp: Date.now()\n      }\n    });\n    intervention.remove();\n  });\n  intervention.querySelector('.dismiss').addEventListener('click', function () {\n    chrome.runtime.sendMessage({\n      type: 'INTERVENTION_ACTION',\n      data: {\n        action: 'DISMISS',\n        domain: domain,\n        timestamp: Date.now()\n      }\n    });\n    intervention.remove();\n  });\n\n  // Auto-dismiss after 30 seconds\n  setTimeout(function () {\n    if (document.body.contains(intervention)) {\n      intervention.remove();\n    }\n  }, 30000);\n}\n\n// Track user interactions\nvar lastInteraction = Date.now();\nvar IDLE_THRESHOLD = 5 * 60 * 1000; // 5 minutes\n\nfunction updateInteraction() {\n  var now = Date.now();\n  var idleTime = now - lastInteraction;\n  if (idleTime > IDLE_THRESHOLD) {\n    chrome.runtime.sendMessage({\n      type: 'ACTIVITY_UPDATE',\n      data: {\n        type: 'RETURN_FROM_IDLE',\n        timestamp: now\n      }\n    });\n  }\n  lastInteraction = now;\n}\n\n// Add interaction listeners\nvar interactionEvents = ['mousedown', 'keydown', 'scroll', 'touchstart'];\ninteractionEvents.forEach(function (eventType) {\n  document.addEventListener(eventType, updateInteraction, {\n    passive: true\n  });\n});\n\n//# sourceURL=webpack://focus-analyzer/./src/content.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/content.js"]();
/******/ 	
/******/ })()
;