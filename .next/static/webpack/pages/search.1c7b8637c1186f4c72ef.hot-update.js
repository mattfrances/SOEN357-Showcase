webpackHotUpdate_N_E("pages/search",{

/***/ "./src/pages/search.jsx":
/*!******************************!*\
  !*** ./src/pages/search.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _layouts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layouts */ \"./src/layouts/index.jsx\");\n/* harmony import */ var _components_ExploreFIlters_ExploreFilters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ExploreFIlters/ExploreFilters */ \"./src/components/ExploreFIlters/ExploreFilters.jsx\");\n/* harmony import */ var material_ui_chip_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! material-ui-chip-input */ \"./node_modules/material-ui-chip-input/lib/ChipInput.js\");\n/* harmony import */ var material_ui_chip_input__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(material_ui_chip_input__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _jsxFileName = \"/Users/matthewfrances/Documents/development/School/Winter2021/SOEN357/twitter-clone/src/pages/search.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar Search = function Search() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"Projects\"),\n      filter = _useState[0],\n      setFilter = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\"),\n      searchValue = _useState2[0],\n      setSearchValue = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n      tags = _useState3[0],\n      setTags = _useState3[1];\n\n  var addTag = function addTag(tagName) {\n    var tagSet = new Set(tags);\n    tagSet.add(tagName);\n    setTags(Array.from(tagSet));\n  };\n\n  var removeTag = function removeTag(tagName) {\n    setTags(tags.filter(function (tag) {\n      return tag !== tagName;\n    }));\n  };\n\n  var searchByProjectOrPerson = function searchByProjectOrPerson(choice) {\n    if (choice === 'project') {\n      console.log('Searching by project name.');\n    } else {\n      console.log('Searching by user.');\n    }\n  };\n\n  var searchByTags = function searchByTags() {\n    // TODO - Search by tags\n    console.log('Searching by tags', tags);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"Search | Tweeter\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_layouts__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"mx-4 sm:mx-12 md:mx-24 lg:mx-48 mt-5\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"flex flex-col lg:grid lg:grid-cols-3 lg:col-gap-5\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"hidden lg:block lg:col-span-1\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: \"w-full bg-white rounded-lg p-5\",\n              style: {\n                height: \"max-content\"\n              },\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n                className: \"pl-5 font-poppins font-semibold text-base py-4 list-none rounded-full cursor-pointer \".concat(filter === \"Projects\" ? 'text-white bg-blue-300' : 'hover:bg-gray-300 text-gray-600'),\n                onClick: function onClick(e) {\n                  return setFilter(e.target.innerHTML);\n                },\n                children: \"Projects\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 49,\n                columnNumber: 15\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n                className: \"pl-5 font-poppins font-semibold text-base py-4 list-none rounded-full cursor-pointer \".concat(filter === \"People\" ? 'text-white bg-blue-300' : 'hover:bg-gray-300 text-gray-600'),\n                onClick: function onClick(e) {\n                  return setFilter(e.target.innerHTML);\n                },\n                children: \"People\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 52,\n                columnNumber: 15\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n                className: \"pl-5 font-poppins font-semibold text-base py-4 list-none rounded-full cursor-pointer \".concat(filter === \"Tags\" ? 'text-white bg-blue-300' : 'hover:bg-gray-300 text-gray-600'),\n                onClick: function onClick(e) {\n                  return setFilter(e.target.innerHTML);\n                },\n                children: \"Tags\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 55,\n                columnNumber: 15\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 46,\n              columnNumber: 13\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 45,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"lg:col-span-2\",\n            children: [filter !== \"Tags\" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              \"class\": \"pt-2 relative mx-auto text-gray-600\",\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n                \"class\": \"w-full border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none\",\n                type: \"search\",\n                name: \"search\",\n                placeholder: \"Search\",\n                value: searchValue,\n                onChange: function onChange(e) {\n                  return setSearchValue(e.target.value);\n                },\n                onKeyUp: function onKeyUp(e) {\n                  return e.key === 'Enter' && console.log('subnmitted');\n                }\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 63,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n                type: \"submit\",\n                \"class\": \"absolute right-0 top-0 mt-5 mr-4\",\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n                  \"class\": \"text-gray-600 h-4 w-4 fill-current\",\n                  xmlns: \"http://www.w3.org/2000/svg\",\n                  version: \"1.1\",\n                  id: \"Capa_1\",\n                  x: \"0px\",\n                  y: \"0px\",\n                  viewBox: \"0 0 56.966 56.966\",\n                  xmlSpace: \"preserve\",\n                  width: \"512px\",\n                  height: \"512px\",\n                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n                    d: \"M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z\"\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 70,\n                    columnNumber: 23\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 66,\n                  columnNumber: 21\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 65,\n                columnNumber: 19\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 62,\n              columnNumber: 17\n            }, _this), filter === \"Tags\" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: \"pt-2 flex flex-col w-full items-end mx-auto\",\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                className: \" p-3 bg-white w-full rounded\",\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(material_ui_chip_input__WEBPACK_IMPORTED_MODULE_5___default.a, {\n                  fullWidth: true,\n                  placeholder: \"Press enter to add a tag\",\n                  value: tags,\n                  onAdd: function onAdd(chip) {\n                    return addTag(chip);\n                  },\n                  onDelete: function onDelete(chip) {\n                    return removeTag(chip);\n                  }\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 79,\n                  columnNumber: 19\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 78,\n                columnNumber: 17\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n                className: \"bg-blue-400 text-white mt-2 px-3 py-2 rounded-full focus:outline-none\",\n                onClick: searchByTags,\n                children: \"Search\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 87,\n                columnNumber: 17\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 77,\n              columnNumber: 17\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 60,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 7\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 37,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Search, \"PQQCCyvg8z8anTvdava8pGQaSZc=\");\n\n_c = Search;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Search);\n\nvar _c;\n\n$RefreshReg$(_c, \"Search\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3NlYXJjaC5qc3g/MzJlYyJdLCJuYW1lcyI6WyJTZWFyY2giLCJ1c2VTdGF0ZSIsImZpbHRlciIsInNldEZpbHRlciIsInNlYXJjaFZhbHVlIiwic2V0U2VhcmNoVmFsdWUiLCJ0YWdzIiwic2V0VGFncyIsImFkZFRhZyIsInRhZ05hbWUiLCJ0YWdTZXQiLCJTZXQiLCJhZGQiLCJBcnJheSIsImZyb20iLCJyZW1vdmVUYWciLCJ0YWciLCJzZWFyY2hCeVByb2plY3RPclBlcnNvbiIsImNob2ljZSIsImNvbnNvbGUiLCJsb2ciLCJzZWFyY2hCeVRhZ3MiLCJoZWlnaHQiLCJlIiwidGFyZ2V0IiwiaW5uZXJIVE1MIiwidmFsdWUiLCJrZXkiLCJjaGlwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUFBLGtCQUNTQyxzREFBUSxDQUFDLFVBQUQsQ0FEakI7QUFBQSxNQUNaQyxNQURZO0FBQUEsTUFDSkMsU0FESTs7QUFBQSxtQkFFbUJGLHNEQUFRLENBQUMsRUFBRCxDQUYzQjtBQUFBLE1BRVpHLFdBRlk7QUFBQSxNQUVDQyxjQUZEOztBQUFBLG1CQUdLSixzREFBUSxDQUFDLEVBQUQsQ0FIYjtBQUFBLE1BR1pLLElBSFk7QUFBQSxNQUdOQyxPQUhNOztBQUtuQixNQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxPQUFELEVBQWE7QUFDMUIsUUFBTUMsTUFBTSxHQUFHLElBQUlDLEdBQUosQ0FBUUwsSUFBUixDQUFmO0FBQ0FJLFVBQU0sQ0FBQ0UsR0FBUCxDQUFXSCxPQUFYO0FBQ0FGLFdBQU8sQ0FBQ00sS0FBSyxDQUFDQyxJQUFOLENBQVdKLE1BQVgsQ0FBRCxDQUFQO0FBQ0QsR0FKRDs7QUFNQSxNQUFNSyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDTixPQUFELEVBQWE7QUFDN0JGLFdBQU8sQ0FBQ0QsSUFBSSxDQUFDSixNQUFMLENBQVksVUFBQWMsR0FBRztBQUFBLGFBQUlBLEdBQUcsS0FBS1AsT0FBWjtBQUFBLEtBQWYsQ0FBRCxDQUFQO0FBQ0QsR0FGRDs7QUFJQSxNQUFNUSx1QkFBdUIsR0FBRyxTQUExQkEsdUJBQTBCLENBQUNDLE1BQUQsRUFBWTtBQUMxQyxRQUFJQSxNQUFNLEtBQUssU0FBZixFQUEwQjtBQUN4QkMsYUFBTyxDQUFDQyxHQUFSLENBQVksNEJBQVo7QUFDRCxLQUZELE1BR0s7QUFDSEQsYUFBTyxDQUFDQyxHQUFSLENBQVksb0JBQVo7QUFDRDtBQUNGLEdBUEQ7O0FBU0EsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUN6QjtBQUNBRixXQUFPLENBQUNDLEdBQVIsQ0FBWSxtQkFBWixFQUFpQ2QsSUFBakM7QUFDRCxHQUhEOztBQUtBLHNCQUNFO0FBQUEsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFBQSw2QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUtFLHFFQUFDLGdEQUFEO0FBQUEsNkJBQ0E7QUFBSyxpQkFBUyxFQUFDLHNDQUFmO0FBQUEsK0JBQ0k7QUFBSyxtQkFBUyxFQUFDLG1EQUFmO0FBQUEsa0NBQ0U7QUFBSyxxQkFBUyxFQUFDLCtCQUFmO0FBQUEsbUNBQ0E7QUFDRSx1QkFBUyxFQUFDLGdDQURaO0FBRUUsbUJBQUssRUFBRTtBQUFFZ0Isc0JBQU0sRUFBRTtBQUFWLGVBRlQ7QUFBQSxzQ0FHRTtBQUFJLHlCQUFTLGlHQUEwRnBCLE1BQU0sS0FBSyxVQUFYLEdBQXdCLHdCQUF4QixHQUFtRCxpQ0FBN0ksQ0FBYjtBQUErTCx1QkFBTyxFQUFFLGlCQUFDcUIsQ0FBRDtBQUFBLHlCQUFPcEIsU0FBUyxDQUFDb0IsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLFNBQVYsQ0FBaEI7QUFBQSxpQkFBeE07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSEYsZUFNRTtBQUFJLHlCQUFTLGlHQUEwRnZCLE1BQU0sS0FBSyxRQUFYLEdBQXNCLHdCQUF0QixHQUFpRCxpQ0FBM0ksQ0FBYjtBQUE2TCx1QkFBTyxFQUFFLGlCQUFDcUIsQ0FBRDtBQUFBLHlCQUFPcEIsU0FBUyxDQUFDb0IsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLFNBQVYsQ0FBaEI7QUFBQSxpQkFBdE07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBTkYsZUFTRTtBQUFJLHlCQUFTLGlHQUEwRnZCLE1BQU0sS0FBSyxNQUFYLEdBQW9CLHdCQUFwQixHQUErQyxpQ0FBekksQ0FBYjtBQUEyTCx1QkFBTyxFQUFFLGlCQUFDcUIsQ0FBRDtBQUFBLHlCQUFPcEIsU0FBUyxDQUFDb0IsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLFNBQVYsQ0FBaEI7QUFBQSxpQkFBcE07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQWdCRTtBQUFLLHFCQUFTLEVBQUMsZUFBZjtBQUFBLHVCQUNJdkIsTUFBTSxLQUFLLE1BQVgsaUJBQ0E7QUFBSyx1QkFBTSxxQ0FBWDtBQUFBLHNDQUNFO0FBQU8seUJBQU0sZ0dBQWI7QUFDRSxvQkFBSSxFQUFDLFFBRFA7QUFDZ0Isb0JBQUksRUFBQyxRQURyQjtBQUM4QiwyQkFBVyxFQUFDLFFBRDFDO0FBQ21ELHFCQUFLLEVBQUVFLFdBRDFEO0FBQ3VFLHdCQUFRLEVBQUUsa0JBQUNtQixDQUFEO0FBQUEseUJBQU9sQixjQUFjLENBQUNrQixDQUFDLENBQUNDLE1BQUYsQ0FBU0UsS0FBVixDQUFyQjtBQUFBLGlCQURqRjtBQUN3SCx1QkFBTyxFQUFFLGlCQUFDSCxDQUFEO0FBQUEseUJBQU9BLENBQUMsQ0FBQ0ksR0FBRixLQUFVLE9BQVYsSUFBcUJSLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVosQ0FBNUI7QUFBQTtBQURqSTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLGVBR0U7QUFBUSxvQkFBSSxFQUFDLFFBQWI7QUFBc0IseUJBQU0sa0NBQTVCO0FBQUEsdUNBQ0U7QUFBSywyQkFBTSxvQ0FBWDtBQUFnRCx1QkFBSyxFQUFDLDRCQUF0RDtBQUNFLHlCQUFPLEVBQUMsS0FEVjtBQUNnQixvQkFBRSxFQUFDLFFBRG5CO0FBQzRCLG1CQUFDLEVBQUMsS0FEOUI7QUFDb0MsbUJBQUMsRUFBQyxLQUR0QztBQUVFLHlCQUFPLEVBQUMsbUJBRlY7QUFFOEIsMEJBQVEsRUFBQyxVQUZ2QztBQUdFLHVCQUFLLEVBQUMsT0FIUjtBQUdnQix3QkFBTSxFQUFDLE9BSHZCO0FBQUEseUNBSUU7QUFDRSxxQkFBQyxFQUFDO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGSixFQWdCSWxCLE1BQU0sS0FBSyxNQUFYLGlCQUNBO0FBQUssdUJBQVMsRUFBQyw2Q0FBZjtBQUFBLHNDQUNBO0FBQUsseUJBQVMsRUFBQyw4QkFBZjtBQUFBLHVDQUNFLHFFQUFDLDZEQUFEO0FBQ0UsMkJBQVMsTUFEWDtBQUVFLDZCQUFXLEVBQUMsMEJBRmQ7QUFHRSx1QkFBSyxFQUFFSSxJQUhUO0FBSUUsdUJBQUssRUFBRSxlQUFDc0IsSUFBRDtBQUFBLDJCQUFVcEIsTUFBTSxDQUFDb0IsSUFBRCxDQUFoQjtBQUFBLG1CQUpUO0FBS0UsMEJBQVEsRUFBRSxrQkFBQ0EsSUFBRDtBQUFBLDJCQUFVYixTQUFTLENBQUNhLElBQUQsQ0FBbkI7QUFBQTtBQUxaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURBLGVBVUE7QUFBUSx5QkFBUyxFQUFDLHVFQUFsQjtBQUEwRix1QkFBTyxFQUFFUCxZQUFuRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFWQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBakJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFoQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQThERCxDQTNGRDs7R0FBTXJCLE07O0tBQUFBLE07QUE2RlNBLHFFQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL3NlYXJjaC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9sYXlvdXRzXCI7XG5pbXBvcnQgRXhwbG9yZUZpbHRlcnMgZnJvbSBcIi4uL2NvbXBvbmVudHMvRXhwbG9yZUZJbHRlcnMvRXhwbG9yZUZpbHRlcnNcIjtcbmltcG9ydCBDaGlwSW5wdXQgZnJvbSAnbWF0ZXJpYWwtdWktY2hpcC1pbnB1dCc7XG5cbmNvbnN0IFNlYXJjaCA9ICgpID0+IHtcbiAgY29uc3QgW2ZpbHRlciwgc2V0RmlsdGVyXSA9IHVzZVN0YXRlKFwiUHJvamVjdHNcIik7XG4gIGNvbnN0IFtzZWFyY2hWYWx1ZSwgc2V0U2VhcmNoVmFsdWVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFt0YWdzLCBzZXRUYWdzXSA9IHVzZVN0YXRlKFtdKTtcblxuICBjb25zdCBhZGRUYWcgPSAodGFnTmFtZSkgPT4ge1xuICAgIGNvbnN0IHRhZ1NldCA9IG5ldyBTZXQodGFncyk7XG4gICAgdGFnU2V0LmFkZCh0YWdOYW1lKTtcbiAgICBzZXRUYWdzKEFycmF5LmZyb20odGFnU2V0KSk7XG4gIH1cblxuICBjb25zdCByZW1vdmVUYWcgPSAodGFnTmFtZSkgPT4ge1xuICAgIHNldFRhZ3ModGFncy5maWx0ZXIodGFnID0+IHRhZyAhPT0gdGFnTmFtZSkpO1xuICB9XG5cbiAgY29uc3Qgc2VhcmNoQnlQcm9qZWN0T3JQZXJzb24gPSAoY2hvaWNlKSA9PiB7XG4gICAgaWYgKGNob2ljZSA9PT0gJ3Byb2plY3QnKSB7XG4gICAgICBjb25zb2xlLmxvZygnU2VhcmNoaW5nIGJ5IHByb2plY3QgbmFtZS4nKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZygnU2VhcmNoaW5nIGJ5IHVzZXIuJylcbiAgICB9XG4gIH1cblxuICBjb25zdCBzZWFyY2hCeVRhZ3MgPSAoKSA9PiB7XG4gICAgLy8gVE9ETyAtIFNlYXJjaCBieSB0YWdzXG4gICAgY29uc29sZS5sb2coJ1NlYXJjaGluZyBieSB0YWdzJywgdGFncylcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+U2VhcmNoIHwgVHdlZXRlcjwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxMYXlvdXQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LTQgc206bXgtMTIgbWQ6bXgtMjQgbGc6bXgtNDggbXQtNVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBsZzpncmlkIGxnOmdyaWQtY29scy0zIGxnOmNvbC1nYXAtNVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gbGc6YmxvY2sgbGc6Y29sLXNwYW4tMVwiPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctd2hpdGUgcm91bmRlZC1sZyBwLTVcIlxuICAgICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IFwibWF4LWNvbnRlbnRcIiB9fT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17YHBsLTUgZm9udC1wb3BwaW5zIGZvbnQtc2VtaWJvbGQgdGV4dC1iYXNlIHB5LTQgbGlzdC1ub25lIHJvdW5kZWQtZnVsbCBjdXJzb3ItcG9pbnRlciAke2ZpbHRlciA9PT0gXCJQcm9qZWN0c1wiID8gJ3RleHQtd2hpdGUgYmctYmx1ZS0zMDAnIDogJ2hvdmVyOmJnLWdyYXktMzAwIHRleHQtZ3JheS02MDAnfWB9IG9uQ2xpY2s9eyhlKSA9PiBzZXRGaWx0ZXIoZS50YXJnZXQuaW5uZXJIVE1MKX0+XG4gICAgICAgICAgICAgICAgUHJvamVjdHNcbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17YHBsLTUgZm9udC1wb3BwaW5zIGZvbnQtc2VtaWJvbGQgdGV4dC1iYXNlIHB5LTQgbGlzdC1ub25lIHJvdW5kZWQtZnVsbCBjdXJzb3ItcG9pbnRlciAke2ZpbHRlciA9PT0gXCJQZW9wbGVcIiA/ICd0ZXh0LXdoaXRlIGJnLWJsdWUtMzAwJyA6ICdob3ZlcjpiZy1ncmF5LTMwMCB0ZXh0LWdyYXktNjAwJ31gfSBvbkNsaWNrPXsoZSkgPT4gc2V0RmlsdGVyKGUudGFyZ2V0LmlubmVySFRNTCl9PlxuICAgICAgICAgICAgICAgIFBlb3BsZVxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtgcGwtNSBmb250LXBvcHBpbnMgZm9udC1zZW1pYm9sZCB0ZXh0LWJhc2UgcHktNCBsaXN0LW5vbmUgcm91bmRlZC1mdWxsIGN1cnNvci1wb2ludGVyICR7ZmlsdGVyID09PSBcIlRhZ3NcIiA/ICd0ZXh0LXdoaXRlIGJnLWJsdWUtMzAwJyA6ICdob3ZlcjpiZy1ncmF5LTMwMCB0ZXh0LWdyYXktNjAwJ31gfSBvbkNsaWNrPXsoZSkgPT4gc2V0RmlsdGVyKGUudGFyZ2V0LmlubmVySFRNTCl9PlxuICAgICAgICAgICAgICAgIFRhZ3NcbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOmNvbC1zcGFuLTJcIj5cbiAgICAgICAgICAgICAgeyBmaWx0ZXIgIT09IFwiVGFnc1wiICYmXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInB0LTIgcmVsYXRpdmUgbXgtYXV0byB0ZXh0LWdyYXktNjAwXCI+XG4gICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJ3LWZ1bGwgYm9yZGVyLTIgYm9yZGVyLWdyYXktMzAwIGJnLXdoaXRlIGgtMTAgcHgtNSBwci0xNiByb3VuZGVkLWxnIHRleHQtc20gZm9jdXM6b3V0bGluZS1ub25lXCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInNlYXJjaFwiIG5hbWU9XCJzZWFyY2hcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiIHZhbHVlPXtzZWFyY2hWYWx1ZX0gb25DaGFuZ2U9eyhlKSA9PiBzZXRTZWFyY2hWYWx1ZShlLnRhcmdldC52YWx1ZSl9IG9uS2V5VXA9eyhlKSA9PiBlLmtleSA9PT0gJ0VudGVyJyAmJiBjb25zb2xlLmxvZygnc3Vibm1pdHRlZCcpfSAvPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJhYnNvbHV0ZSByaWdodC0wIHRvcC0wIG10LTUgbXItNFwiPlxuICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzPVwidGV4dC1ncmF5LTYwMCBoLTQgdy00IGZpbGwtY3VycmVudFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgICAgICAgIHZlcnNpb249XCIxLjFcIiBpZD1cIkNhcGFfMVwiIHg9XCIwcHhcIiB5PVwiMHB4XCJcbiAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDU2Ljk2NiA1Ni45NjZcIiB4bWxTcGFjZT1cInByZXNlcnZlXCJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjUxMnB4XCIgaGVpZ2h0PVwiNTEycHhcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk01NS4xNDYsNTEuODg3TDQxLjU4OCwzNy43ODZjMy40ODYtNC4xNDQsNS4zOTYtOS4zNTgsNS4zOTYtMTQuNzg2YzAtMTIuNjgyLTEwLjMxOC0yMy0yMy0yM3MtMjMsMTAuMzE4LTIzLDIzICBzMTAuMzE4LDIzLDIzLDIzYzQuNzYxLDAsOS4yOTgtMS40MzYsMTMuMTc3LTQuMTYybDEzLjY2MSwxNC4yMDhjMC41NzEsMC41OTMsMS4zMzksMC45MiwyLjE2MiwwLjkyICBjMC43NzksMCwxLjUxOC0wLjI5NywyLjA3OS0wLjgzN0M1Ni4yNTUsNTQuOTgyLDU2LjI5Myw1My4wOCw1NS4xNDYsNTEuODg3eiBNMjMuOTg0LDZjOS4zNzQsMCwxNyw3LjYyNiwxNywxN3MtNy42MjYsMTctMTcsMTcgIHMtMTctNy42MjYtMTctMTdTMTQuNjEsNiwyMy45ODQsNnpcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHsgZmlsdGVyID09PSBcIlRhZ3NcIiAmJlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMiBmbGV4IGZsZXgtY29sIHctZnVsbCBpdGVtcy1lbmQgbXgtYXV0b1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIHAtMyBiZy13aGl0ZSB3LWZ1bGwgcm91bmRlZFwiPlxuICAgICAgICAgICAgICAgICAgPENoaXBJbnB1dFxuICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1ByZXNzIGVudGVyIHRvIGFkZCBhIHRhZydcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RhZ3N9XG4gICAgICAgICAgICAgICAgICAgIG9uQWRkPXsoY2hpcCkgPT4gYWRkVGFnKGNoaXApfVxuICAgICAgICAgICAgICAgICAgICBvbkRlbGV0ZT17KGNoaXApID0+IHJlbW92ZVRhZyhjaGlwKX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1ibHVlLTQwMCB0ZXh0LXdoaXRlIG10LTIgcHgtMyBweS0yIHJvdW5kZWQtZnVsbCBmb2N1czpvdXRsaW5lLW5vbmVcIiBvbkNsaWNrPXtzZWFyY2hCeVRhZ3N9PlxuICAgICAgICAgICAgICAgICAgU2VhcmNoXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0xheW91dD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/search.jsx\n");

/***/ })

})