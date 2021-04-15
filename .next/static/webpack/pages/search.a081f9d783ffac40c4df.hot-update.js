webpackHotUpdate_N_E("pages/search",{

/***/ "./src/pages/search.jsx":
/*!******************************!*\
  !*** ./src/pages/search.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _layouts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layouts */ \"./src/layouts/index.jsx\");\n/* harmony import */ var _components_ExploreFIlters_ExploreFilters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ExploreFIlters/ExploreFilters */ \"./src/components/ExploreFIlters/ExploreFilters.jsx\");\n/* harmony import */ var material_ui_chip_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! material-ui-chip-input */ \"./node_modules/material-ui-chip-input/lib/ChipInput.js\");\n/* harmony import */ var material_ui_chip_input__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(material_ui_chip_input__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _jsxFileName = \"/Users/matthewfrances/Documents/development/School/Winter2021/SOEN357/twitter-clone/src/pages/search.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar Search = function Search() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"Projects\"),\n      filter = _useState[0],\n      setFilter = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n      tags = _useState2[0],\n      setTags = _useState2[1];\n\n  var addTag = function addTag(tagName) {\n    var tagSet = new Set(tags);\n    tagSet.add(tagName);\n    setTags(Array.from(tagSet));\n  };\n\n  var removeTag = function removeTag(tagName) {\n    setTags(tags.filter(function (tag) {\n      return tag !== tagName;\n    }));\n  };\n\n  var searchByTags = function searchByTags() {\n    // TODO - Search by tags\n    console.log('Searching by tags');\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"Search | Tweeter\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_layouts__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"mx-4 sm:mx-12 md:mx-24 lg:mx-48 mt-5\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"flex flex-col lg:grid lg:grid-cols-3 lg:col-gap-5\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"hidden lg:block lg:col-span-1\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: \"w-full bg-white rounded-lg p-5\",\n              style: {\n                height: \"max-content\"\n              },\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n                className: \"pl-5 font-poppins font-semibold text-base py-4 list-none rounded-full cursor-pointer \".concat(filter === \"Projects\" ? 'text-white bg-blue-300' : 'hover:bg-gray-300 text-gray-600'),\n                onClick: function onClick(e) {\n                  return setFilter(e.target.innerHTML);\n                },\n                children: \"Projects\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 39,\n                columnNumber: 15\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n                className: \"pl-5 font-poppins font-semibold text-base py-4 list-none rounded-full cursor-pointer \".concat(filter === \"People\" ? 'text-white bg-blue-300' : 'hover:bg-gray-300 text-gray-600'),\n                onClick: function onClick(e) {\n                  return setFilter(e.target.innerHTML);\n                },\n                children: \"People\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 42,\n                columnNumber: 15\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n                className: \"pl-5 font-poppins font-semibold text-base py-4 list-none rounded-full cursor-pointer \".concat(filter === \"Tags\" ? 'text-white bg-blue-300' : 'hover:bg-gray-300 text-gray-600'),\n                onClick: function onClick(e) {\n                  return setFilter(e.target.innerHTML);\n                },\n                children: \"Tags\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 45,\n                columnNumber: 15\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 36,\n              columnNumber: 13\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 35,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"lg:col-span-2\",\n            children: [filter !== \"Tags\" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              \"class\": \"pt-2 relative mx-auto text-gray-600\",\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n                \"class\": \"w-full border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none\",\n                type: \"search\",\n                name: \"search\",\n                placeholder: \"Search\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 53,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n                type: \"submit\",\n                \"class\": \"absolute right-0 top-0 mt-5 mr-4\",\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n                  \"class\": \"text-gray-600 h-4 w-4 fill-current\",\n                  xmlns: \"http://www.w3.org/2000/svg\",\n                  version: \"1.1\",\n                  id: \"Capa_1\",\n                  x: \"0px\",\n                  y: \"0px\",\n                  viewBox: \"0 0 56.966 56.966\",\n                  xmlSpace: \"preserve\",\n                  width: \"512px\",\n                  height: \"512px\",\n                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n                    d: \"M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z\"\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 60,\n                    columnNumber: 23\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 56,\n                  columnNumber: 21\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 55,\n                columnNumber: 19\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 52,\n              columnNumber: 17\n            }, _this), filter === \"Tags\" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: \"pt-2 flex flex-col w-full items-end mx-auto\",\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                className: \" p-3 bg-white w-full rounded\",\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(material_ui_chip_input__WEBPACK_IMPORTED_MODULE_5___default.a, {\n                  fullWidth: true,\n                  placeholder: \"Press enter to add a tag\",\n                  value: tags,\n                  onAdd: function onAdd(chip) {\n                    return addTag(chip);\n                  },\n                  onDelete: function onDelete(chip) {\n                    return removeTag(chip);\n                  }\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 69,\n                  columnNumber: 19\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 68,\n                columnNumber: 17\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n                className: \"bg-blue-400 text-white mt-2 px-3 py-2 rounded-full\",\n                onClick: searchByTags,\n                children: \"Search\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 77,\n                columnNumber: 17\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 67,\n              columnNumber: 17\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 50,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 7\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 27,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Search, \"wnapJwtmC20WX2QLCmhsaQFBef8=\");\n\n_c = Search;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Search);\n\nvar _c;\n\n$RefreshReg$(_c, \"Search\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3NlYXJjaC5qc3g/MzJlYyJdLCJuYW1lcyI6WyJTZWFyY2giLCJ1c2VTdGF0ZSIsImZpbHRlciIsInNldEZpbHRlciIsInRhZ3MiLCJzZXRUYWdzIiwiYWRkVGFnIiwidGFnTmFtZSIsInRhZ1NldCIsIlNldCIsImFkZCIsIkFycmF5IiwiZnJvbSIsInJlbW92ZVRhZyIsInRhZyIsInNlYXJjaEJ5VGFncyIsImNvbnNvbGUiLCJsb2ciLCJoZWlnaHQiLCJlIiwidGFyZ2V0IiwiaW5uZXJIVE1MIiwiY2hpcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFBQTs7QUFBQSxrQkFDU0Msc0RBQVEsQ0FBQyxVQUFELENBRGpCO0FBQUEsTUFDWkMsTUFEWTtBQUFBLE1BQ0pDLFNBREk7O0FBQUEsbUJBRUtGLHNEQUFRLENBQUMsRUFBRCxDQUZiO0FBQUEsTUFFWkcsSUFGWTtBQUFBLE1BRU5DLE9BRk07O0FBSW5CLE1BQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLE9BQUQsRUFBYTtBQUMxQixRQUFNQyxNQUFNLEdBQUcsSUFBSUMsR0FBSixDQUFRTCxJQUFSLENBQWY7QUFDQUksVUFBTSxDQUFDRSxHQUFQLENBQVdILE9BQVg7QUFDQUYsV0FBTyxDQUFDTSxLQUFLLENBQUNDLElBQU4sQ0FBV0osTUFBWCxDQUFELENBQVA7QUFDRCxHQUpEOztBQU1BLE1BQU1LLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNOLE9BQUQsRUFBYTtBQUM3QkYsV0FBTyxDQUFDRCxJQUFJLENBQUNGLE1BQUwsQ0FBWSxVQUFBWSxHQUFHO0FBQUEsYUFBSUEsR0FBRyxLQUFLUCxPQUFaO0FBQUEsS0FBZixDQUFELENBQVA7QUFDRCxHQUZEOztBQUlBLE1BQU1RLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdB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SyxFQUFFRSxJQUhUO0FBSUUsdUJBQUssRUFBRSxlQUFDa0IsSUFBRDtBQUFBLDJCQUFVaEIsTUFBTSxDQUFDZ0IsSUFBRCxDQUFoQjtBQUFBLG1CQUpUO0FBS0UsMEJBQVEsRUFBRSxrQkFBQ0EsSUFBRDtBQUFBLDJCQUFVVCxTQUFTLENBQUNTLElBQUQsQ0FBbkI7QUFBQTtBQUxaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURBLGVBVUE7QUFBUSx5QkFBUyxFQUFDLG9EQUFsQjtBQUF1RSx1QkFBTyxFQUFFUCxZQUFoRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFWQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBakJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFoQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQThERCxDQWpGRDs7R0FBTWYsTTs7S0FBQUEsTTtBQW1GU0EscUVBQWYiLCJmaWxlIjoiLi9zcmMvcGFnZXMvc2VhcmNoLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2xheW91dHNcIjtcbmltcG9ydCBFeHBsb3JlRmlsdGVycyBmcm9tIFwiLi4vY29tcG9uZW50cy9FeHBsb3JlRklsdGVycy9FeHBsb3JlRmlsdGVyc1wiO1xuaW1wb3J0IENoaXBJbnB1dCBmcm9tICdtYXRlcmlhbC11aS1jaGlwLWlucHV0JztcblxuY29uc3QgU2VhcmNoID0gKCkgPT4ge1xuICBjb25zdCBbZmlsdGVyLCBzZXRGaWx0ZXJdID0gdXNlU3RhdGUoXCJQcm9qZWN0c1wiKTtcbiAgY29uc3QgW3RhZ3MsIHNldFRhZ3NdID0gdXNlU3RhdGUoW10pO1xuXG4gIGNvbnN0IGFkZFRhZyA9ICh0YWdOYW1lKSA9PiB7XG4gICAgY29uc3QgdGFnU2V0ID0gbmV3IFNldCh0YWdzKTtcbiAgICB0YWdTZXQuYWRkKHRhZ05hbWUpO1xuICAgIHNldFRhZ3MoQXJyYXkuZnJvbSh0YWdTZXQpKTtcbiAgfVxuXG4gIGNvbnN0IHJlbW92ZVRhZyA9ICh0YWdOYW1lKSA9PiB7XG4gICAgc2V0VGFncyh0YWdzLmZpbHRlcih0YWcgPT4gdGFnICE9PSB0YWdOYW1lKSk7XG4gIH1cblxuICBjb25zdCBzZWFyY2hCeVRhZ3MgPSAoKSA9PiB7XG4gICAgLy8gVE9ETyAtIFNlYXJjaCBieSB0YWdzXG4gICAgY29uc29sZS5sb2coJ1NlYXJjaGluZyBieSB0YWdzJylcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+U2VhcmNoIHwgVHdlZXRlcjwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxMYXlvdXQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LTQgc206bXgtMTIgbWQ6bXgtMjQgbGc6bXgtNDggbXQtNVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBsZzpncmlkIGxnOmdyaWQtY29scy0zIGxnOmNvbC1nYXAtNVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gbGc6YmxvY2sgbGc6Y29sLXNwYW4tMVwiPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctd2hpdGUgcm91bmRlZC1sZyBwLTVcIlxuICAgICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IFwibWF4LWNvbnRlbnRcIiB9fT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17YHBsLTUgZm9udC1wb3BwaW5zIGZvbnQtc2VtaWJvbGQgdGV4dC1iYXNlIHB5LTQgbGlzdC1ub25lIHJvdW5kZWQtZnVsbCBjdXJzb3ItcG9pbnRlciAke2ZpbHRlciA9PT0gXCJQcm9qZWN0c1wiID8gJ3RleHQtd2hpdGUgYmctYmx1ZS0zMDAnIDogJ2hvdmVyOmJnLWdyYXktMzAwIHRleHQtZ3JheS02MDAnfWB9IG9uQ2xpY2s9eyhlKSA9PiBzZXRGaWx0ZXIoZS50YXJnZXQuaW5uZXJIVE1MKX0+XG4gICAgICAgICAgICAgICAgUHJvamVjdHNcbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17YHBsLTUgZm9udC1wb3BwaW5zIGZvbnQtc2VtaWJvbGQgdGV4dC1iYXNlIHB5LTQgbGlzdC1ub25lIHJvdW5kZWQtZnVsbCBjdXJzb3ItcG9pbnRlciAke2ZpbHRlciA9PT0gXCJQZW9wbGVcIiA/ICd0ZXh0LXdoaXRlIGJnLWJsdWUtMzAwJyA6ICdob3ZlcjpiZy1ncmF5LTMwMCB0ZXh0LWdyYXktNjAwJ31gfSBvbkNsaWNrPXsoZSkgPT4gc2V0RmlsdGVyKGUudGFyZ2V0LmlubmVySFRNTCl9PlxuICAgICAgICAgICAgICAgIFBlb3BsZVxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtgcGwtNSBmb250LXBvcHBpbnMgZm9udC1zZW1pYm9sZCB0ZXh0LWJhc2UgcHktNCBsaXN0LW5vbmUgcm91bmRlZC1mdWxsIGN1cnNvci1wb2ludGVyICR7ZmlsdGVyID09PSBcIlRhZ3NcIiA/ICd0ZXh0LXdoaXRlIGJnLWJsdWUtMzAwJyA6ICdob3ZlcjpiZy1ncmF5LTMwMCB0ZXh0LWdyYXktNjAwJ31gfSBvbkNsaWNrPXsoZSkgPT4gc2V0RmlsdGVyKGUudGFyZ2V0LmlubmVySFRNTCl9PlxuICAgICAgICAgICAgICAgIFRhZ3NcbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOmNvbC1zcGFuLTJcIj5cbiAgICAgICAgICAgICAgeyBmaWx0ZXIgIT09IFwiVGFnc1wiICYmXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInB0LTIgcmVsYXRpdmUgbXgtYXV0byB0ZXh0LWdyYXktNjAwXCI+XG4gICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJ3LWZ1bGwgYm9yZGVyLTIgYm9yZGVyLWdyYXktMzAwIGJnLXdoaXRlIGgtMTAgcHgtNSBwci0xNiByb3VuZGVkLWxnIHRleHQtc20gZm9jdXM6b3V0bGluZS1ub25lXCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInNlYXJjaFwiIG5hbWU9XCJzZWFyY2hcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiIC8+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImFic29sdXRlIHJpZ2h0LTAgdG9wLTAgbXQtNSBtci00XCI+XG4gICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3M9XCJ0ZXh0LWdyYXktNjAwIGgtNCB3LTQgZmlsbC1jdXJyZW50XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgICAgICAgdmVyc2lvbj1cIjEuMVwiIGlkPVwiQ2FwYV8xXCIgeD1cIjBweFwiIHk9XCIwcHhcIlxuICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNTYuOTY2IDU2Ljk2NlwiIHhtbFNwYWNlPVwicHJlc2VydmVcIlxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiNTEycHhcIiBoZWlnaHQ9XCI1MTJweFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTU1LjE0Niw1MS44ODdMNDEuNTg4LDM3Ljc4NmMzLjQ4Ni00LjE0NCw1LjM5Ni05LjM1OCw1LjM5Ni0xNC43ODZjMC0xMi42ODItMTAuMzE4LTIzLTIzLTIzcy0yMywxMC4zMTgtMjMsMjMgIHMxMC4zMTgsMjMsMjMsMjNjNC43NjEsMCw5LjI5OC0xLjQzNiwxMy4xNzctNC4xNjJsMTMuNjYxLDE0LjIwOGMwLjU3MSwwLjU5MywxLjMzOSwwLjkyLDIuMTYyLDAuOTIgIGMwLjc3OSwwLDEuNTE4LTAuMjk3LDIuMDc5LTAuODM3QzU2LjI1NSw1NC45ODIsNTYuMjkzLDUzLjA4LDU1LjE0Niw1MS44ODd6IE0yMy45ODQsNmM5LjM3NCwwLDE3LDcuNjI2LDE3LDE3cy03LjYyNiwxNy0xNywxNyAgcy0xNy03LjYyNi0xNy0xN1MxNC42MSw2LDIzLjk4NCw2elwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgeyBmaWx0ZXIgPT09IFwiVGFnc1wiICYmXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0yIGZsZXggZmxleC1jb2wgdy1mdWxsIGl0ZW1zLWVuZCBteC1hdXRvXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgcC0zIGJnLXdoaXRlIHctZnVsbCByb3VuZGVkXCI+XG4gICAgICAgICAgICAgICAgICA8Q2hpcElucHV0XG4gICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nUHJlc3MgZW50ZXIgdG8gYWRkIGEgdGFnJ1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGFnc31cbiAgICAgICAgICAgICAgICAgICAgb25BZGQ9eyhjaGlwKSA9PiBhZGRUYWcoY2hpcCl9XG4gICAgICAgICAgICAgICAgICAgIG9uRGVsZXRlPXsoY2hpcCkgPT4gcmVtb3ZlVGFnKGNoaXApfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLWJsdWUtNDAwIHRleHQtd2hpdGUgbXQtMiBweC0zIHB5LTIgcm91bmRlZC1mdWxsXCIgb25DbGljaz17c2VhcmNoQnlUYWdzfT5cbiAgICAgICAgICAgICAgICAgIFNlYXJjaFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9MYXlvdXQ+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2g7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/search.jsx\n");

/***/ })

})