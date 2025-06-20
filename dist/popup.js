/******/ (() => { // webpackBootstrap
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
// Popup script for Focus Analyzer

// DOM Elements
var trackingToggle = document.getElementById('trackingToggle');
var focusScore = document.getElementById('focusScore');
var productiveTime = document.getElementById('productiveTime');
var distractions = document.getElementById('distractions');
var activityList = document.getElementById('activityList');
var startFocusBtn = document.getElementById('startFocus');
var viewDashboardBtn = document.getElementById('viewDashboard');
var openSettingsBtn = document.getElementById('openSettings');

// Storage keys
var STORAGE_KEYS = {
  ACTIVITY_LOG: 'activityLog',
  SETTINGS: 'settings',
  PATTERNS: 'patterns'
};

// Initialize popup
function initializePopup() {
  return _initializePopup.apply(this, arguments);
} // Update statistics
function _initializePopup() {
  _initializePopup = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
    var _yield$chrome$storage2, settings;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.n) {
        case 0:
          _context2.n = 1;
          return chrome.storage.local.get(STORAGE_KEYS.SETTINGS);
        case 1:
          _yield$chrome$storage2 = _context2.v;
          settings = _yield$chrome$storage2.settings;
          trackingToggle.checked = settings.trackingEnabled;
          updateStats();
          updateRecentActivity();
        case 2:
          return _context2.a(2);
      }
    }, _callee2);
  }));
  return _initializePopup.apply(this, arguments);
}
function updateStats() {
  return _updateStats.apply(this, arguments);
} // Calculate productive time
function _updateStats() {
  _updateStats = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
    var _yield$chrome$storage3, activityLog, patterns, todayStart, todayActivities, totalTime, productiveTimeMs, score;
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.n) {
        case 0:
          _context3.n = 1;
          return chrome.storage.local.get([STORAGE_KEYS.ACTIVITY_LOG, STORAGE_KEYS.PATTERNS]);
        case 1:
          _yield$chrome$storage3 = _context3.v;
          activityLog = _yield$chrome$storage3.activityLog;
          patterns = _yield$chrome$storage3.patterns;
          todayStart = new Date();
          todayStart.setHours(0, 0, 0, 0);

          // Calculate today's stats
          todayActivities = activityLog.filter(function (activity) {
            return activity.timestamp >= todayStart.getTime();
          }); // Calculate focus score (ratio of productive to total time)
          totalTime = todayActivities.reduce(function (sum, activity) {
            return sum + activity.duration;
          }, 0);
          productiveTimeMs = calculateProductiveTime(todayActivities, patterns);
          score = totalTime > 0 ? productiveTimeMs / totalTime * 100 : 0; // Update UI
          focusScore.textContent = "".concat(Math.round(score), "%");
          productiveTime.textContent = "".concat(Math.round(productiveTimeMs / (1000 * 60 * 60)), "h");
          distractions.textContent = countDistractions(todayActivities, patterns);
        case 2:
          return _context3.a(2);
      }
    }, _callee3);
  }));
  return _updateStats.apply(this, arguments);
}
function calculateProductiveTime(activities, patterns) {
  return activities.reduce(function (productive, activity) {
    var domain = new URL(activity.url).hostname;
    var pattern = patterns[domain];

    // Consider activity productive if average visit duration is under threshold
    if (pattern && pattern.averageVisitDuration < 15 * 60 * 1000) {
      // 15 minutes threshold
      return productive + activity.duration;
    }
    return productive;
  }, 0);
}

// Count distractions
function countDistractions(activities, patterns) {
  var distractionThreshold = 15 * 60 * 1000; // 15 minutes
  return activities.reduce(function (count, activity) {
    var domain = new URL(activity.url).hostname;
    var pattern = patterns[domain];
    if (pattern && pattern.averageVisitDuration > distractionThreshold) {
      return count + 1;
    }
    return count;
  }, 0);
}

// Update recent activity list
function updateRecentActivity() {
  return _updateRecentActivity.apply(this, arguments);
} // Event Listeners
function _updateRecentActivity() {
  _updateRecentActivity = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
    var _yield$chrome$storage4, activityLog, recentActivities;
    return _regenerator().w(function (_context4) {
      while (1) switch (_context4.n) {
        case 0:
          _context4.n = 1;
          return chrome.storage.local.get(STORAGE_KEYS.ACTIVITY_LOG);
        case 1:
          _yield$chrome$storage4 = _context4.v;
          activityLog = _yield$chrome$storage4.activityLog;
          // Get last 5 activities
          recentActivities = activityLog.slice(-5).reverse().map(function (activity) {
            var time = new Date(activity.timestamp).toLocaleTimeString();
            var domain = new URL(activity.url).hostname;
            return "\n        <div class=\"activity-item\">\n          <span class=\"domain\">".concat(domain, "</span>\n          <span class=\"time\">").concat(time, "</span>\n        </div>\n      ");
          }).join('');
          activityList.innerHTML = recentActivities;
        case 2:
          return _context4.a(2);
      }
    }, _callee4);
  }));
  return _updateRecentActivity.apply(this, arguments);
}
trackingToggle.addEventListener('change', /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(e) {
    var _yield$chrome$storage, settings;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          _context.n = 1;
          return chrome.storage.local.get(STORAGE_KEYS.SETTINGS);
        case 1:
          _yield$chrome$storage = _context.v;
          settings = _yield$chrome$storage.settings;
          settings.trackingEnabled = e.target.checked;
          _context.n = 2;
          return chrome.storage.local.set(_defineProperty({}, STORAGE_KEYS.SETTINGS, settings));
        case 2:
          return _context.a(2);
      }
    }, _callee);
  }));
  return function (_x) {
    return _ref.apply(this, arguments);
  };
}());
startFocusBtn.addEventListener('click', function () {
  chrome.tabs.create({
    url: 'dashboard.html#focus-session'
  });
});
viewDashboardBtn.addEventListener('click', function () {
  chrome.tabs.create({
    url: 'dashboard.html'
  });
});
openSettingsBtn.addEventListener('click', function () {
  chrome.tabs.create({
    url: 'dashboard.html#settings'
  });
});

// Initialize popup when DOM is loaded
document.addEventListener('DOMContentLoaded', initializePopup);

// Update stats every minute
setInterval(updateStats, 60000);
/******/ })()
;