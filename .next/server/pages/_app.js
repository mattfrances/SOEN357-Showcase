module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/context/BookmarksTweetsContext.js":
/*!***********************************************!*\
  !*** ./src/context/BookmarksTweetsContext.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst BookmarksTweetsContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__[\"createContext\"])([]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (BookmarksTweetsContext);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGV4dC9Cb29rbWFya3NUd2VldHNDb250ZXh0LmpzPzc5OWYiXSwibmFtZXMiOlsiQm9va21hcmtzVHdlZXRzQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUEsTUFBTUEsc0JBQXNCLGdCQUFHQywyREFBYSxDQUFDLEVBQUQsQ0FBNUM7QUFFZUQscUZBQWYiLCJmaWxlIjoiLi9zcmMvY29udGV4dC9Cb29rbWFya3NUd2VldHNDb250ZXh0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBCb29rbWFya3NUd2VldHNDb250ZXh0ID0gY3JlYXRlQ29udGV4dChbXSk7XG5cbmV4cG9ydCBkZWZhdWx0IEJvb2ttYXJrc1R3ZWV0c0NvbnRleHQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/context/BookmarksTweetsContext.js\n");

/***/ }),

/***/ "./src/context/ExploreTweetsContext.js":
/*!*********************************************!*\
  !*** ./src/context/ExploreTweetsContext.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst ExploreTweetsContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__[\"createContext\"])([]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (ExploreTweetsContext);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGV4dC9FeHBsb3JlVHdlZXRzQ29udGV4dC5qcz9mNjE2Il0sIm5hbWVzIjpbIkV4cGxvcmVUd2VldHNDb250ZXh0IiwiY3JlYXRlQ29udGV4dCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQSxNQUFNQSxvQkFBb0IsZ0JBQUdDLDJEQUFhLENBQUMsRUFBRCxDQUExQztBQUVlRCxtRkFBZiIsImZpbGUiOiIuL3NyYy9jb250ZXh0L0V4cGxvcmVUd2VldHNDb250ZXh0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBFeHBsb3JlVHdlZXRzQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoW10pO1xuXG5leHBvcnQgZGVmYXVsdCBFeHBsb3JlVHdlZXRzQ29udGV4dDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/context/ExploreTweetsContext.js\n");

/***/ }),

/***/ "./src/context/HomeTweetsContext.js":
/*!******************************************!*\
  !*** ./src/context/HomeTweetsContext.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst HomeTweetsContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__[\"createContext\"])([]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomeTweetsContext);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGV4dC9Ib21lVHdlZXRzQ29udGV4dC5qcz8zODMzIl0sIm5hbWVzIjpbIkhvbWVUd2VldHNDb250ZXh0IiwiY3JlYXRlQ29udGV4dCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQSxNQUFNQSxpQkFBaUIsZ0JBQUdDLDJEQUFhLENBQUMsRUFBRCxDQUF2QztBQUVlRCxnRkFBZiIsImZpbGUiOiIuL3NyYy9jb250ZXh0L0hvbWVUd2VldHNDb250ZXh0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBIb21lVHdlZXRzQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoW10pO1xuXG5leHBvcnQgZGVmYXVsdCBIb21lVHdlZXRzQ29udGV4dDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/context/HomeTweetsContext.js\n");

/***/ }),

/***/ "./src/context/UserContext.js":
/*!************************************!*\
  !*** ./src/context/UserContext.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst {\n  createContext\n} = __webpack_require__(/*! react */ \"react\");\n\nconst UserContext = createContext();\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserContext);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGV4dC9Vc2VyQ29udGV4dC5qcz9jNmQ1Il0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJyZXF1aXJlIiwiVXNlckNvbnRleHQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUEsTUFBTTtBQUFFQTtBQUFGLElBQW9CQyxtQkFBTyxDQUFDLG9CQUFELENBQWpDOztBQUVBLE1BQU1DLFdBQVcsR0FBR0YsYUFBYSxFQUFqQztBQUVlRSwwRUFBZiIsImZpbGUiOiIuL3NyYy9jb250ZXh0L1VzZXJDb250ZXh0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjcmVhdGVDb250ZXh0IH0gPSByZXF1aXJlKFwicmVhY3RcIik7XG5cbmNvbnN0IFVzZXJDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xuXG5leHBvcnQgZGVmYXVsdCBVc2VyQ29udGV4dDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/context/UserContext.js\n");

/***/ }),

/***/ "./src/firebase/init.js":
/*!******************************!*\
  !*** ./src/firebase/init.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase */ \"firebase\");\n/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_0__);\n\nconst firebaseConfig = {\n  apiKey: \"AIzaSyBKdQsKmB-04lFeqL70pg5SPNvlVi7JnN8\",\n  authDomain: \"soen357-showcase.firebaseapp.com\",\n  projectId: \"soen357-showcase\",\n  storageBucket: \"soen357-showcase.appspot.com\",\n  messagingSenderId: \"803769353471\",\n  appId: \"1:803769353471:web:ee876c5a27ba096bfb38ca\",\n  measurementId: \"G-HGFP2LDXP9\"\n};\n!firebase__WEBPACK_IMPORTED_MODULE_0___default.a.apps.length && firebase__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(firebaseConfig);\n/* harmony default export */ __webpack_exports__[\"default\"] = (firebase__WEBPACK_IMPORTED_MODULE_0___default.a);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZmlyZWJhc2UvaW5pdC5qcz8wMzJkIl0sIm5hbWVzIjpbImZpcmViYXNlQ29uZmlnIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwibWVhc3VyZW1lbnRJZCIsImZpcmViYXNlIiwiYXBwcyIsImxlbmd0aCIsImluaXRpYWxpemVBcHAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUEsTUFBTUEsY0FBYyxHQUFHO0FBQ3JCQyxRQUFNLEVBQUUseUNBRGE7QUFFckJDLFlBQVUsRUFBRSxrQ0FGUztBQUdyQkMsV0FBUyxFQUFFLGtCQUhVO0FBSXJCQyxlQUFhLEVBQUUsOEJBSk07QUFLckJDLG1CQUFpQixFQUFFLGNBTEU7QUFNckJDLE9BQUssRUFBRSwyQ0FOYztBQU9yQkMsZUFBYSxFQUFFO0FBUE0sQ0FBdkI7QUFVQSxDQUFDQywrQ0FBUSxDQUFDQyxJQUFULENBQWNDLE1BQWYsSUFBeUJGLCtDQUFRLENBQUNHLGFBQVQsQ0FBdUJYLGNBQXZCLENBQXpCO0FBQ2VRLDhHQUFmIiwiZmlsZSI6Ii4vc3JjL2ZpcmViYXNlL2luaXQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlXCI7XG5cbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xuICBhcGlLZXk6IFwiQUl6YVN5QktkUXNLbUItMDRsRmVxTDcwcGc1U1BOdmxWaTdKbk44XCIsXG4gIGF1dGhEb21haW46IFwic29lbjM1Ny1zaG93Y2FzZS5maXJlYmFzZWFwcC5jb21cIixcbiAgcHJvamVjdElkOiBcInNvZW4zNTctc2hvd2Nhc2VcIixcbiAgc3RvcmFnZUJ1Y2tldDogXCJzb2VuMzU3LXNob3djYXNlLmFwcHNwb3QuY29tXCIsXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjgwMzc2OTM1MzQ3MVwiLFxuICBhcHBJZDogXCIxOjgwMzc2OTM1MzQ3MTp3ZWI6ZWU4NzZjNWEyN2JhMDk2YmZiMzhjYVwiLFxuICBtZWFzdXJlbWVudElkOiBcIkctSEdGUDJMRFhQOVwiLFxufTtcblxuIWZpcmViYXNlLmFwcHMubGVuZ3RoICYmIGZpcmViYXNlLmluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xuZXhwb3J0IGRlZmF1bHQgZmlyZWJhc2U7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/firebase/init.js\n");

/***/ }),

/***/ "./src/pages/_app.jsx":
/*!****************************!*\
  !*** ./src/pages/_app.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_BookmarksTweetsContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/BookmarksTweetsContext */ \"./src/context/BookmarksTweetsContext.js\");\n/* harmony import */ var _context_ExploreTweetsContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/ExploreTweetsContext */ \"./src/context/ExploreTweetsContext.js\");\n/* harmony import */ var _context_HomeTweetsContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/HomeTweetsContext */ \"./src/context/HomeTweetsContext.js\");\n/* harmony import */ var _context_UserContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../context/UserContext */ \"./src/context/UserContext.js\");\n/* harmony import */ var _firebase_init__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../firebase/init */ \"./src/firebase/init.js\");\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/global.css */ \"./src/styles/global.css\");\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _styles_reset_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/reset.css */ \"./src/styles/reset.css\");\n/* harmony import */ var _styles_reset_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_reset_css__WEBPACK_IMPORTED_MODULE_9__);\n\n\nvar _jsxFileName = \"/Users/matthewfrances/Documents/development/School/Winter2021/SOEN357/twitter-clone/src/pages/_app.jsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\n\n\nconst db = _firebase_init__WEBPACK_IMPORTED_MODULE_7__[\"default\"].firestore();\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  const Router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n  const protectedRoutes = [\"/home\", \"/bookmarks\"];\n  const {\n    0: user,\n    1: setUser\n  } = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(null);\n  const {\n    0: homeTweetsContext,\n    1: setHomeTweetsContext\n  } = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(null);\n  const {\n    0: exploreTweetsContext,\n    1: setExploreTweetsContext\n  } = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(null);\n  const {\n    0: bookmarksTweetsContext,\n    1: setBookmarksTweetsContext\n  } = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(null);\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(() => {\n    async function getCurrentUser(userID) {\n      const user = await db.collection(\"users\").doc(userID).get();\n      setUser(_objectSpread(_objectSpread({}, user.data()), {}, {\n        uid: userID\n      }));\n    }\n\n    _firebase_init__WEBPACK_IMPORTED_MODULE_7__[\"default\"].auth().onAuthStateChanged(loggedUser => {\n      if (!loggedUser) {\n        if (protectedRoutes.includes(Router.pathname)) Router.push(\"/\");\n        setUser(null);\n      } else {\n        getCurrentUser(loggedUser.uid);\n      }\n    });\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n      children: \"Tweeter\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_context_UserContext__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Provider, {\n      value: {\n        user,\n        setUser\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_context_HomeTweetsContext__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Provider, {\n        value: {\n          homeTweetsContext,\n          setHomeTweetsContext\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_context_ExploreTweetsContext__WEBPACK_IMPORTED_MODULE_4__[\"default\"].Provider, {\n          value: {\n            exploreTweetsContext,\n            setExploreTweetsContext\n          },\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_context_BookmarksTweetsContext__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Provider, {\n            value: {\n              bookmarksTweetsContext,\n              setBookmarksTweetsContext\n            },\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Component, _objectSpread({}, pageProps), void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 48,\n              columnNumber: 15\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 46,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvX2FwcC5qc3g/NDM0YSJdLCJuYW1lcyI6WyJkYiIsImZpcmViYXNlIiwiZmlyZXN0b3JlIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJSb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJwcm90ZWN0ZWRSb3V0ZXMiLCJ1c2VyIiwic2V0VXNlciIsInVzZVN0YXRlIiwiaG9tZVR3ZWV0c0NvbnRleHQiLCJzZXRIb21lVHdlZXRzQ29udGV4dCIsImV4cGxvcmVUd2VldHNDb250ZXh0Iiwic2V0RXhwbG9yZVR3ZWV0c0NvbnRleHQiLCJib29rbWFya3NUd2VldHNDb250ZXh0Iiwic2V0Qm9va21hcmtzVHdlZXRzQ29udGV4dCIsInVzZUVmZmVjdCIsImdldEN1cnJlbnRVc2VyIiwidXNlcklEIiwiY29sbGVjdGlvbiIsImRvYyIsImdldCIsImRhdGEiLCJ1aWQiLCJhdXRoIiwib25BdXRoU3RhdGVDaGFuZ2VkIiwibG9nZ2VkVXNlciIsImluY2x1ZGVzIiwicGF0aG5hbWUiLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLEVBQUUsR0FBR0Msc0RBQVEsQ0FBQ0MsU0FBVCxFQUFYOztBQUVBLFNBQVNDLEtBQVQsQ0FBZTtBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FBZixFQUF5QztBQUN2QyxRQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsUUFBTUMsZUFBZSxHQUFHLENBQUMsT0FBRCxFQUFVLFlBQVYsQ0FBeEI7QUFFQSxRQUFNO0FBQUEsT0FBQ0MsSUFBRDtBQUFBLE9BQU9DO0FBQVAsTUFBa0JDLHNEQUFRLENBQUMsSUFBRCxDQUFoQztBQUNBLFFBQU07QUFBQSxPQUFDQyxpQkFBRDtBQUFBLE9BQW9CQztBQUFwQixNQUE0Q0Ysc0RBQVEsQ0FBQyxJQUFELENBQTFEO0FBQ0EsUUFBTTtBQUFBLE9BQUNHLG9CQUFEO0FBQUEsT0FBdUJDO0FBQXZCLE1BQWtESixzREFBUSxDQUFDLElBQUQsQ0FBaEU7QUFDQSxRQUFNO0FBQUEsT0FBQ0ssc0JBQUQ7QUFBQSxPQUF5QkM7QUFBekIsTUFBc0ROLHNEQUFRLENBQUMsSUFBRCxDQUFwRTtBQUVBTyx5REFBUyxDQUFDLE1BQU07QUFDZCxtQkFBZUMsY0FBZixDQUE4QkMsTUFBOUIsRUFBc0M7QUFDcEMsWUFBTVgsSUFBSSxHQUFHLE1BQU1ULEVBQUUsQ0FBQ3FCLFVBQUgsQ0FBYyxPQUFkLEVBQXVCQyxHQUF2QixDQUEyQkYsTUFBM0IsRUFBbUNHLEdBQW5DLEVBQW5CO0FBQ0FiLGFBQU8saUNBQU1ELElBQUksQ0FBQ2UsSUFBTCxFQUFOO0FBQW1CQyxXQUFHLEVBQUVMO0FBQXhCLFNBQVA7QUFDRDs7QUFFRG5CLDBEQUFRLENBQUN5QixJQUFULEdBQWdCQyxrQkFBaEIsQ0FBb0NDLFVBQUQsSUFBZ0I7QUFDakQsVUFBSSxDQUFDQSxVQUFMLEVBQWlCO0FBQ2YsWUFBSXBCLGVBQWUsQ0FBQ3FCLFFBQWhCLENBQXlCdkIsTUFBTSxDQUFDd0IsUUFBaEMsQ0FBSixFQUErQ3hCLE1BQU0sQ0FBQ3lCLElBQVAsQ0FBWSxHQUFaO0FBQy9DckIsZUFBTyxDQUFDLElBQUQsQ0FBUDtBQUNELE9BSEQsTUFHTztBQUNMUyxzQkFBYyxDQUFDUyxVQUFVLENBQUNILEdBQVosQ0FBZDtBQUNEO0FBQ0YsS0FQRDtBQVFELEdBZFEsRUFjTixFQWRNLENBQVQ7QUFnQkEsc0JBQ0U7QUFBQSw0QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUUscUVBQUMsNERBQUQsQ0FBYSxRQUFiO0FBQXNCLFdBQUssRUFBRTtBQUFFaEIsWUFBRjtBQUFRQztBQUFSLE9BQTdCO0FBQUEsNkJBQ0UscUVBQUMsa0VBQUQsQ0FBbUIsUUFBbkI7QUFDRSxhQUFLLEVBQUU7QUFBRUUsMkJBQUY7QUFBcUJDO0FBQXJCLFNBRFQ7QUFBQSwrQkFFRSxxRUFBQyxxRUFBRCxDQUFzQixRQUF0QjtBQUNFLGVBQUssRUFBRTtBQUFFQyxnQ0FBRjtBQUF3QkM7QUFBeEIsV0FEVDtBQUFBLGlDQUVFLHFFQUFDLHVFQUFELENBQXdCLFFBQXhCO0FBQ0UsaUJBQUssRUFBRTtBQUFFQyxvQ0FBRjtBQUEwQkM7QUFBMUIsYUFEVDtBQUFBLG1DQUVFLHFFQUFDLFNBQUQsb0JBQWVaLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRjtBQUFBLGtCQURGO0FBaUJEOztBQUVjRixvRUFBZiIsImZpbGUiOiIuL3NyYy9wYWdlcy9fYXBwLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEJvb2ttYXJrc1R3ZWV0c0NvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvQm9va21hcmtzVHdlZXRzQ29udGV4dFwiO1xuaW1wb3J0IEV4cGxvcmVUd2VldHNDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L0V4cGxvcmVUd2VldHNDb250ZXh0XCI7XG5pbXBvcnQgSG9tZVR3ZWV0c0NvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvSG9tZVR3ZWV0c0NvbnRleHRcIjtcbmltcG9ydCBVc2VyQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9Vc2VyQ29udGV4dFwiO1xuaW1wb3J0IGZpcmViYXNlIGZyb20gXCIuLi9maXJlYmFzZS9pbml0XCI7XG5pbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFsLmNzc1wiO1xuaW1wb3J0IFwiLi4vc3R5bGVzL3Jlc2V0LmNzc1wiO1xuXG5jb25zdCBkYiA9IGZpcmViYXNlLmZpcmVzdG9yZSgpO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgY29uc3QgUm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHByb3RlY3RlZFJvdXRlcyA9IFtcIi9ob21lXCIsIFwiL2Jvb2ttYXJrc1wiXTtcblxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2hvbWVUd2VldHNDb250ZXh0LCBzZXRIb21lVHdlZXRzQ29udGV4dF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2V4cGxvcmVUd2VldHNDb250ZXh0LCBzZXRFeHBsb3JlVHdlZXRzQ29udGV4dF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2Jvb2ttYXJrc1R3ZWV0c0NvbnRleHQsIHNldEJvb2ttYXJrc1R3ZWV0c0NvbnRleHRdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiBnZXRDdXJyZW50VXNlcih1c2VySUQpIHtcbiAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKFwidXNlcnNcIikuZG9jKHVzZXJJRCkuZ2V0KCk7XG4gICAgICBzZXRVc2VyKHsgLi4udXNlci5kYXRhKCksIHVpZDogdXNlcklEIH0pO1xuICAgIH1cblxuICAgIGZpcmViYXNlLmF1dGgoKS5vbkF1dGhTdGF0ZUNoYW5nZWQoKGxvZ2dlZFVzZXIpID0+IHtcbiAgICAgIGlmICghbG9nZ2VkVXNlcikge1xuICAgICAgICBpZiAocHJvdGVjdGVkUm91dGVzLmluY2x1ZGVzKFJvdXRlci5wYXRobmFtZSkpIFJvdXRlci5wdXNoKFwiL1wiKTtcbiAgICAgICAgc2V0VXNlcihudWxsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGdldEN1cnJlbnRVc2VyKGxvZ2dlZFVzZXIudWlkKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDx0aXRsZT5Ud2VldGVyPC90aXRsZT5cbiAgICAgIDxVc2VyQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyB1c2VyLCBzZXRVc2VyIH19PlxuICAgICAgICA8SG9tZVR3ZWV0c0NvbnRleHQuUHJvdmlkZXJcbiAgICAgICAgICB2YWx1ZT17eyBob21lVHdlZXRzQ29udGV4dCwgc2V0SG9tZVR3ZWV0c0NvbnRleHQgfX0+XG4gICAgICAgICAgPEV4cGxvcmVUd2VldHNDb250ZXh0LlByb3ZpZGVyXG4gICAgICAgICAgICB2YWx1ZT17eyBleHBsb3JlVHdlZXRzQ29udGV4dCwgc2V0RXhwbG9yZVR3ZWV0c0NvbnRleHQgfX0+XG4gICAgICAgICAgICA8Qm9va21hcmtzVHdlZXRzQ29udGV4dC5Qcm92aWRlclxuICAgICAgICAgICAgICB2YWx1ZT17eyBib29rbWFya3NUd2VldHNDb250ZXh0LCBzZXRCb29rbWFya3NUd2VldHNDb250ZXh0IH19PlxuICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgICAgICA8L0Jvb2ttYXJrc1R3ZWV0c0NvbnRleHQuUHJvdmlkZXI+XG4gICAgICAgICAgPC9FeHBsb3JlVHdlZXRzQ29udGV4dC5Qcm92aWRlcj5cbiAgICAgICAgPC9Ib21lVHdlZXRzQ29udGV4dC5Qcm92aWRlcj5cbiAgICAgIDwvVXNlckNvbnRleHQuUHJvdmlkZXI+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.jsx\n");

/***/ }),

/***/ "./src/styles/global.css":
/*!*******************************!*\
  !*** ./src/styles/global.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3NyYy9zdHlsZXMvZ2xvYmFsLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/styles/global.css\n");

/***/ }),

/***/ "./src/styles/reset.css":
/*!******************************!*\
  !*** ./src/styles/reset.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3NyYy9zdHlsZXMvcmVzZXQuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/styles/reset.css\n");

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.jsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.jsx */"./src/pages/_app.jsx");


/***/ }),

/***/ "firebase":
/*!***************************!*\
  !*** external "firebase" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"firebase\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZVwiPzYyNDIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiZmlyZWJhc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///firebase\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });