/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./utils/group/departments.js":
/*!************************************!*\
  !*** ./utils/group/departments.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _listDepartment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listDepartment */ \"./utils/group/listDepartment.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\nvar groupByDepartment = function groupByDepartment() {\n  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},\n      _ref$places = _ref.places,\n      places = _ref$places === void 0 ? [] : _ref$places;\n\n  var groupByDpt = {};\n  /**\n   * {\n   *   \"69\": [{}, {}, {}, {}, {}],\n   *   \"70\": [{}, {}]\n   * }\n   */\n\n  var _iterator = _createForOfIteratorHelper(places),\n      _step;\n\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var place = _step.value;\n\n      if (!place.id) {\n        // console.log(\"listDepartmentName\", listDepartmentName);\n        // console.log(\"place.name.toLowerCase()\", place.name.toLowerCase());\n        if (_listDepartment__WEBPACK_IMPORTED_MODULE_0__.listDepartmentName[place.name.toLowerCase()]) {\n          // console.log(\"#1 place\", place);\n          place.id = _listDepartment__WEBPACK_IMPORTED_MODULE_0__.listDepartmentName[place.name.toLowerCase()];\n        }\n      }\n\n      if (place.id) {\n        // console.log(\"#2 place\", place);\n        var _dptName = place.id.substr(0, 2);\n\n        if (!groupByDpt.hasOwnProperty(_dptName)) {\n          groupByDpt[_dptName] = [];\n        }\n\n        groupByDpt[_dptName].push(place);\n      }\n    } // console.table(groupByDpt);\n\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n\n  var dpts = [];\n  var dptNames = Object.keys(groupByDpt);\n\n  for (var _i = 0, _dptNames = dptNames; _i < _dptNames.length; _i++) {\n    var _listDepartment$dptNa;\n\n    var dptName = _dptNames[_i];\n    var cities = groupByDpt[dptName];\n    var cityMerge = {\n      id: dptName,\n      name: (_listDepartment$dptNa = _listDepartment__WEBPACK_IMPORTED_MODULE_0__.listDepartment[dptName]) === null || _listDepartment$dptNa === void 0 ? void 0 : _listDepartment$dptNa.name,\n      total: 0,\n      type: \"department\",\n      coords: cities[0].coords,\n      keywords: []\n    };\n\n    var _iterator2 = _createForOfIteratorHelper(cities),\n        _step2;\n\n    try {\n      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n        var city = _step2.value;\n        cityMerge.total += city.total;\n        cityMerge.keywords = mergeKeywords({\n          keywords: cityMerge.keywords,\n          newKeywords: city.keywords\n        });\n      }\n    } catch (err) {\n      _iterator2.e(err);\n    } finally {\n      _iterator2.f();\n    }\n\n    dpts.push(cityMerge);\n  }\n\n  dpts.sort(function (a, b) {\n    return a.name.toLowerCase().charCodeAt(0) - b.name.toLowerCase().charCodeAt(0);\n  }); // console.table(dpts);\n\n  return dpts;\n};\n\nvar mergeKeywords = function mergeKeywords(_ref2) {\n  var keywords = _ref2.keywords,\n      newKeywords = _ref2.newKeywords;\n\n  // console.log(\"#mergeKeywords #1\");\n  // console.table(keywords);\n  var _iterator3 = _createForOfIteratorHelper(newKeywords),\n      _step3;\n\n  try {\n    var _loop = function _loop() {\n      var newKeyword = _step3.value;\n      var index = keywords.findIndex(function (k) {\n        return k.keyword === newKeyword.keyword;\n      });\n\n      if (index === -1) {\n        keywords.push(newKeyword);\n      } else {\n        keywords[index].count += newKeyword.count;\n      }\n    };\n\n    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {\n      _loop();\n    } // console.log(\"#mergeKeywords #2\");\n    // console.table(keywords);\n\n  } catch (err) {\n    _iterator3.e(err);\n  } finally {\n    _iterator3.f();\n  }\n\n  return keywords;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (groupByDepartment);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvZ3JvdXAvZGVwYXJ0bWVudHMuanM/ZjUxZiJdLCJuYW1lcyI6WyJncm91cEJ5RGVwYXJ0bWVudCIsInBsYWNlcyIsImdyb3VwQnlEcHQiLCJwbGFjZSIsImlkIiwibGlzdERlcGFydG1lbnROYW1lIiwibmFtZSIsInRvTG93ZXJDYXNlIiwiZHB0TmFtZSIsInN1YnN0ciIsImhhc093blByb3BlcnR5IiwicHVzaCIsImRwdHMiLCJkcHROYW1lcyIsIk9iamVjdCIsImtleXMiLCJjaXRpZXMiLCJjaXR5TWVyZ2UiLCJsaXN0RGVwYXJ0bWVudCIsInRvdGFsIiwidHlwZSIsImNvb3JkcyIsImtleXdvcmRzIiwiY2l0eSIsIm1lcmdlS2V5d29yZHMiLCJuZXdLZXl3b3JkcyIsInNvcnQiLCJhIiwiYiIsImNoYXJDb2RlQXQiLCJuZXdLZXl3b3JkIiwiaW5kZXgiLCJmaW5kSW5kZXgiLCJrIiwia2V5d29yZCIsImNvdW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLEdBQTBCO0FBQUEsaUZBQVAsRUFBTztBQUFBLHlCQUF2QkMsTUFBdUI7QUFBQSxNQUF2QkEsTUFBdUIsNEJBQWQsRUFBYzs7QUFDbEQsTUFBTUMsVUFBVSxHQUFHLEVBQW5CO0FBQ0E7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVBvRCw2Q0FROUJELE1BUjhCO0FBQUE7O0FBQUE7QUFRbEQsd0RBQTRCO0FBQUEsVUFBakJFLEtBQWlCOztBQUMxQixVQUFJLENBQUNBLEtBQUssQ0FBQ0MsRUFBWCxFQUFlO0FBQ2I7QUFDQTtBQUNBLFlBQUlDLCtEQUFrQixDQUFDRixLQUFLLENBQUNHLElBQU4sQ0FBV0MsV0FBWCxFQUFELENBQXRCLEVBQWtEO0FBQ2hEO0FBQ0FKLGVBQUssQ0FBQ0MsRUFBTixHQUFXQywrREFBa0IsQ0FBQ0YsS0FBSyxDQUFDRyxJQUFOLENBQVdDLFdBQVgs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OztBQWJtRDtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQWNuRCxTQUFPYixRQUFQO0FBQ0QsQ0FmRDs7QUFpQkEsK0RBQWV0QixpQkFBZiIsImZpbGUiOiIuL3V0aWxzL2dyb3VwL2RlcGFydG1lbnRzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbGlzdERlcGFydG1lbnQsIGxpc3REZXBhcnRtZW50TmFtZSB9IGZyb20gXCIuL2xpc3REZXBhcnRtZW50XCI7XG5cbmNvbnN0IGdyb3VwQnlEZXBhcnRtZW50ID0gKHsgcGxhY2VzID0gW10gfSA9IHt9KSA9PiB7XG4gIGNvbnN0IGdyb3VwQnlEcHQgPSB7fTtcbiAgLyoqXG4gICAqIHtcbiAgICogICBcIjY5XCI6IFt7fSwge30sIHt9LCB7fSwge31dLFxuICAgKiAgIFwiNzBcIjogW3t9LCB7fV1cbiAgICogfVxuICAgKi9cbiAgZm9yIChjb25zdCBwbGFjZSBvZiBwbGFjZXMpIHtcbiAgICBpZiAoIXBsYWNlLmlkKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcImxpc3REZXBhcnRtZW50TmFtZVwiLCBsaXN0RGVwYXJ0bWVudE5hbWUpO1xuICAgICAgLy8gY29uc29sZS5sb2coXCJwbGFjZS5uYW1lLnRvTG93ZXJDYXNlKClcIiwgcGxhY2UubmFtZS50b0xvd2VyQ2FzZSgpKTtcbiAgICAgIGlmIChsaXN0RGVwYXJ0bWVudE5hbWVbcGxhY2UubmFtZS50b0xvd2VyQ2FzZSgpXSkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIiMxIHBsYWNlXCIsIHBsYWNlKTtcbiAgICAgICAgcGxhY2UuaWQgPSBsaXN0RGVwYXJ0bWVudE5hbWVbcGxhY2UubmFtZS50b0xvd2VyQ2FzZSgpXTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHBsYWNlLmlkKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcIiMyIHBsYWNlXCIsIHBsYWNlKTtcbiAgICAgIGNvbnN0IGRwdE5hbWUgPSBwbGFjZS5pZC5zdWJzdHIoMCwgMik7XG4gICAgICBpZiAoIWdyb3VwQnlEcHQuaGFzT3duUHJvcGVydHkoZHB0TmFtZSkpIHtcbiAgICAgICAgZ3JvdXBCeURwdFtkcHROYW1lXSA9IFtdO1xuICAgICAgfVxuXG4gICAgICBncm91cEJ5RHB0W2RwdE5hbWVdLnB1c2gocGxhY2UpO1xuICAgIH1cbiAgfVxuICAvLyBjb25zb2xlLnRhYmxlKGdyb3VwQnlEcHQpO1xuXG4gIGNvbnN0IGRwdHMgPSBbXTtcbiAgY29uc3QgZHB0TmFtZXMgPSBPYmplY3Qua2V5cyhncm91cEJ5RHB0KTtcbiAgZm9yIChjb25zdCBkcHROYW1lIG9mIGRwdE5hbWVzKSB7XG4gICAgY29uc3QgY2l0aWVzID0gZ3JvdXBCeURwdFtkcHROYW1lXTtcbiAgICBjb25zdCBjaXR5TWVyZ2UgPSB7XG4gICAgICBpZDogZHB0TmFtZSxcbiAgICAgIG5hbWU6IGxpc3REZXBhcnRtZW50W2RwdE5hbWVdPy5uYW1lLFxuICAgICAgdG90YWw6IDAsXG4gICAgICB0eXBlOiBcImRlcGFydG1lbnRcIixcbiAgICAgIGNvb3JkczogY2l0aWVzWzBdLmNvb3JkcyxcbiAgICAgIGtleXdvcmRzOiBbXSxcbiAgICB9O1xuICAgIGZvciAoY29uc3QgY2l0eSBvZiBjaXRpZXMpIHtcbiAgICAgIGNpdHlNZXJnZS50b3RhbCArPSBjaXR5LnRvdGFsO1xuICAgICAgY2l0eU1lcmdlLmtleXdvcmRzID0gbWVyZ2VLZXl3b3Jkcyh7XG4gICAgICAgIGtleXdvcmRzOiBjaXR5TWVyZ2Uua2V5d29yZHMsXG4gICAgICAgIG5ld0tleXdvcmRzOiBjaXR5LmtleXdvcmRzLFxuICAgICAgfSk7XG4gICAgfVxuICAgIGRwdHMucHVzaChjaXR5TWVyZ2UpO1xuICB9XG5cbiAgZHB0cy5zb3J0KChhLCBiKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIGEubmFtZS50b0xvd2VyQ2FzZSgpLmNoYXJDb2RlQXQoMCkgLSBiLm5hbWUudG9Mb3dlckNhc2UoKS5jaGFyQ29kZUF0KDApXG4gICAgKTtcbiAgfSk7XG5cbiAgLy8gY29uc29sZS50YWJsZShkcHRzKTtcblxuICByZXR1cm4gZHB0cztcbn07XG5cbmNvbnN0IG1lcmdlS2V5d29yZHMgPSAoeyBrZXl3b3JkcywgbmV3S2V5d29yZHMgfSkgPT4ge1xuICAvLyBjb25zb2xlLmxvZyhcIiNtZXJnZUtleXdvcmRzICMxXCIpO1xuICAvLyBjb25zb2xlLnRhYmxlKGtleXdvcmRzKTtcbiAgZm9yIChjb25zdCBuZXdLZXl3b3JkIG9mIG5ld0tleXdvcmRzKSB7XG4gICAgY29uc3QgaW5kZXggPSBrZXl3b3Jkcy5maW5kSW5kZXgoKGspID0+IGsua2V5d29yZCA9PT0gbmV3S2V5d29yZC5rZXl3b3JkKTtcbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICBrZXl3b3Jkcy5wdXNoKG5ld0tleXdvcmQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBrZXl3b3Jkc1tpbmRleF0uY291bnQgKz0gbmV3S2V5d29yZC5jb3VudDtcbiAgICB9XG4gIH1cblxuICAvLyBjb25zb2xlLmxvZyhcIiNtZXJnZUtleXdvcmRzICMyXCIpO1xuICAvLyBjb25zb2xlLnRhYmxlKGtleXdvcmRzKTtcbiAgcmV0dXJuIGtleXdvcmRzO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ3JvdXBCeURlcGFydG1lbnQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/group/departments.js\n");

/***/ })

});