/******/ (() => { // webpackBootstrap
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
// Background script for Focus Analyzer

// Constants for storage keys and settings
var STORAGE_KEYS = {
  ACTIVITY_LOG: 'activityLog',
  SETTINGS: 'settings',
  PATTERNS: 'patterns'
};

// Default settings
var DEFAULT_SETTINGS = {
  trackingEnabled: true,
  interventionLevel: 'medium',
  dailyFocusGoal: 6,
  // hours
  distractionThreshold: 15 // minutes
};

// Initialize extension data
chrome.runtime.onInstalled.addListener(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
  return _regenerator().w(function (_context) {
    while (1) switch (_context.n) {
      case 0:
        _context.n = 1;
        return chrome.storage.local.set(_defineProperty(_defineProperty(_defineProperty({}, STORAGE_KEYS.SETTINGS, DEFAULT_SETTINGS), STORAGE_KEYS.ACTIVITY_LOG, []), STORAGE_KEYS.PATTERNS, []));
      case 1:
        return _context.a(2);
    }
  }, _callee);
})));

// Track tab activity
chrome.tabs.onActivated.addListener(/*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(activeInfo) {
    var tab;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.n) {
        case 0:
          _context2.n = 1;
          return isTrackingEnabled();
        case 1:
          if (_context2.v) {
            _context2.n = 2;
            break;
          }
          return _context2.a(2);
        case 2:
          _context2.n = 3;
          return chrome.tabs.get(activeInfo.tabId);
        case 3:
          tab = _context2.v;
          logActivity(tab);
        case 4:
          return _context2.a(2);
      }
    }, _callee2);
  }));
  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}());
chrome.tabs.onUpdated.addListener(/*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(tabId, changeInfo, tab) {
    var _t;
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.n) {
        case 0:
          _t = changeInfo.status === 'complete';
          if (!_t) {
            _context3.n = 2;
            break;
          }
          _context3.n = 1;
          return isTrackingEnabled();
        case 1:
          _t = _context3.v;
        case 2:
          if (!_t) {
            _context3.n = 3;
            break;
          }
          logActivity(tab);
        case 3:
          return _context3.a(2);
      }
    }, _callee3);
  }));
  return function (_x2, _x3, _x4) {
    return _ref3.apply(this, arguments);
  };
}());

// Activity logging
function logActivity(_x5) {
  return _logActivity.apply(this, arguments);
} // Pattern analysis
function _logActivity() {
  _logActivity = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(tab) {
    var activity, _yield$chrome$storage, activityLog, lastActivity, _t2;
    return _regenerator().w(function (_context4) {
      while (1) switch (_context4.n) {
        case 0:
          if (!(!tab.url || tab.url === '')) {
            _context4.n = 1;
            break;
          }
          return _context4.a(2);
        case 1:
          _context4.p = 1;
          new URL(tab.url); // Test if URL is valid
          _context4.n = 3;
          break;
        case 2:
          _context4.p = 2;
          _t2 = _context4.v;
          console.error('Invalid URL:', tab.url);
          return _context4.a(2);
        case 3:
          activity = {
            timestamp: Date.now(),
            url: tab.url,
            title: tab.title || 'Untitled',
            duration: 0 // Will be updated when activity changes
          };
          _context4.n = 4;
          return chrome.storage.local.get(STORAGE_KEYS.ACTIVITY_LOG);
        case 4:
          _yield$chrome$storage = _context4.v;
          activityLog = _yield$chrome$storage.activityLog;
          if (activityLog.length > 0) {
            lastActivity = activityLog[activityLog.length - 1];
            lastActivity.duration = activity.timestamp - lastActivity.timestamp;
          }
          activityLog.push(activity);
          _context4.n = 5;
          return chrome.storage.local.set(_defineProperty({}, STORAGE_KEYS.ACTIVITY_LOG, activityLog));
        case 5:
          analyzePatterns();
        case 6:
          return _context4.a(2);
      }
    }, _callee4, null, [[1, 2]]);
  }));
  return _logActivity.apply(this, arguments);
}
function analyzePatterns() {
  return _analyzePatterns.apply(this, arguments);
} // Intervention system
function _analyzePatterns() {
  _analyzePatterns = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
    var _yield$chrome$storage2, activityLog, _yield$chrome$storage3, settings, domainPatterns;
    return _regenerator().w(function (_context5) {
      while (1) switch (_context5.n) {
        case 0:
          _context5.n = 1;
          return chrome.storage.local.get(STORAGE_KEYS.ACTIVITY_LOG);
        case 1:
          _yield$chrome$storage2 = _context5.v;
          activityLog = _yield$chrome$storage2.activityLog;
          _context5.n = 2;
          return chrome.storage.local.get(STORAGE_KEYS.SETTINGS);
        case 2:
          _yield$chrome$storage3 = _context5.v;
          settings = _yield$chrome$storage3.settings;
          // Group activities by domain
          domainPatterns = activityLog.reduce(function (acc, activity) {
            try {
              if (!activity.url) return acc;
              var domain = new URL(activity.url).hostname;
              if (!domain) return acc;
              if (!acc[domain]) {
                acc[domain] = {
                  totalTime: 0,
                  visitCount: 0,
                  averageVisitDuration: 0
                };
              }

              // Ensure duration is a valid number
              var duration = typeof activity.duration === 'number' ? activity.duration : 0;
              acc[domain].totalTime += duration;
              acc[domain].visitCount++;
              acc[domain].averageVisitDuration = acc[domain].totalTime / acc[domain].visitCount;
            } catch (e) {
              console.error('Error processing activity:', e, activity);
            }
            return acc;
          }, {});
          _context5.n = 3;
          return chrome.storage.local.set(_defineProperty({}, STORAGE_KEYS.PATTERNS, domainPatterns));
        case 3:
          // Check for intervention needs
          checkForInterventions(domainPatterns, settings);
        case 4:
          return _context5.a(2);
      }
    }, _callee5);
  }));
  return _analyzePatterns.apply(this, arguments);
}
function checkForInterventions(_x6, _x7) {
  return _checkForInterventions.apply(this, arguments);
} // Utility functions
function _checkForInterventions() {
  _checkForInterventions = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(patterns, settings) {
    var distractionThreshold, _i, _Object$entries, _Object$entries$_i, domain, pattern, tabs, _t3, _t4;
    return _regenerator().w(function (_context6) {
      while (1) switch (_context6.n) {
        case 0:
          _context6.p = 0;
          if (!(!patterns || !settings || !settings.distractionThreshold)) {
            _context6.n = 1;
            break;
          }
          console.error('Invalid patterns or settings data');
          return _context6.a(2);
        case 1:
          distractionThreshold = settings.distractionThreshold * 60 * 1000; // Convert to milliseconds
          _i = 0, _Object$entries = Object.entries(patterns);
        case 2:
          if (!(_i < _Object$entries.length)) {
            _context6.n = 9;
            break;
          }
          _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2), domain = _Object$entries$_i[0], pattern = _Object$entries$_i[1];
          _context6.p = 3;
          if (!(!pattern || typeof pattern.averageVisitDuration !== 'number')) {
            _context6.n = 4;
            break;
          }
          return _context6.a(3, 8);
        case 4:
          if (!(pattern.averageVisitDuration > distractionThreshold)) {
            _context6.n = 6;
            break;
          }
          _context6.n = 5;
          return chrome.tabs.query({
            active: true,
            currentWindow: true
          });
        case 5:
          tabs = _context6.v;
          if (!tabs[0]) {
            _context6.n = 6;
            break;
          }
          _context6.n = 6;
          return chrome.tabs.sendMessage(tabs[0].id, {
            type: 'SHOW_INTERVENTION',
            data: {
              domain: domain,
              timeSpent: pattern.averageVisitDuration
            }
          })["catch"](function (err) {
            return console.error('Error sending intervention message:', err);
          });
        case 6:
          _context6.n = 8;
          break;
        case 7:
          _context6.p = 7;
          _t3 = _context6.v;
          console.error('Error processing pattern for domain:', domain, _t3);
        case 8:
          _i++;
          _context6.n = 2;
          break;
        case 9:
          _context6.n = 11;
          break;
        case 10:
          _context6.p = 10;
          _t4 = _context6.v;
          console.error('Error in checkForInterventions:', _t4);
        case 11:
          return _context6.a(2);
      }
    }, _callee6, null, [[3, 7], [0, 10]]);
  }));
  return _checkForInterventions.apply(this, arguments);
}
function isTrackingEnabled() {
  return _isTrackingEnabled.apply(this, arguments);
}
function _isTrackingEnabled() {
  _isTrackingEnabled = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7() {
    var _yield$chrome$storage4, settings, _t5;
    return _regenerator().w(function (_context7) {
      while (1) switch (_context7.n) {
        case 0:
          _context7.p = 0;
          _context7.n = 1;
          return chrome.storage.local.get(STORAGE_KEYS.SETTINGS);
        case 1:
          _yield$chrome$storage4 = _context7.v;
          settings = _yield$chrome$storage4.settings;
          return _context7.a(2, settings && typeof settings.trackingEnabled === 'boolean' ? settings.trackingEnabled : DEFAULT_SETTINGS.trackingEnabled);
        case 2:
          _context7.p = 2;
          _t5 = _context7.v;
          console.error('Error checking tracking status:', _t5);
          return _context7.a(2, DEFAULT_SETTINGS.trackingEnabled);
      }
    }, _callee7, null, [[0, 2]]);
  }));
  return _isTrackingEnabled.apply(this, arguments);
}
/******/ })()
;