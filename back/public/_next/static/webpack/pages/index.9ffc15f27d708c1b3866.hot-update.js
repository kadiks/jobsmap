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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _listDepartment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listDepartment */ \"./utils/group/listDepartment.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\nvar groupByDepartment = function groupByDepartment() {\n  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},\n      _ref$places = _ref.places,\n      places = _ref$places === void 0 ? [] : _ref$places;\n\n  var groupByDpt = {};\n  /**\n   * {\n   *   \"69\": [{}, {}, {}, {}, {}],\n   *   \"70\": [{}, {}]\n   * }\n   */\n\n  var _iterator = _createForOfIteratorHelper(places),\n      _step;\n\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var place = _step.value;\n\n      if (!place.id) {\n        // console.log(\"listDepartmentName\", listDepartmentName);\n        // console.log(\"place.name.toLowerCase()\", place.name.toLowerCase());\n        if (_listDepartment__WEBPACK_IMPORTED_MODULE_0__.listDepartmentName[place.name.toLowerCase()]) {\n          // console.log(\"#1 place\", place);\n          place.id = _listDepartment__WEBPACK_IMPORTED_MODULE_0__.listDepartmentName[place.name.toLowerCase()];\n        }\n      }\n\n      if (place.id) {\n        // console.log(\"#2 place\", place);\n        var _dptName = place.id.substr(0, 2);\n\n        if (!groupByDpt.hasOwnProperty(_dptName)) {\n          groupByDpt[_dptName] = [];\n        }\n\n        groupByDpt[_dptName].push(place);\n      }\n    } // console.table(groupByDpt);\n\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n\n  var dpts = [];\n  var dptNames = Object.keys(groupByDpt);\n  console.log({\n    groupByDpt: groupByDpt\n  });\n\n  for (var _i = 0, _dptNames = dptNames; _i < _dptNames.length; _i++) {\n    var dptName = _dptNames[_i];\n    var cities = groupByDpt[dptName]; // console.log({dptName});\n\n    var cityMerge = {\n      id: dptName,\n      name: _listDepartment__WEBPACK_IMPORTED_MODULE_0__.listDepartment[dptName].name,\n      total: 0,\n      type: \"department\",\n      coords: cities[0].coords,\n      keywords: []\n    };\n\n    var _iterator2 = _createForOfIteratorHelper(cities),\n        _step2;\n\n    try {\n      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n        var city = _step2.value;\n        cityMerge.total += city.total;\n        cityMerge.keywords = mergeKeywords({\n          keywords: cityMerge.keywords,\n          newKeywords: city.keywords\n        });\n      }\n    } catch (err) {\n      _iterator2.e(err);\n    } finally {\n      _iterator2.f();\n    }\n\n    dpts.push(cityMerge);\n  }\n\n  dpts.sort(function (a, b) {\n    return a.name.toLowerCase().charCodeAt(0) - b.name.toLowerCase().charCodeAt(0);\n  }); // console.table(dpts);\n\n  return dpts;\n};\n\nvar mergeKeywords = function mergeKeywords(_ref2) {\n  var keywords = _ref2.keywords,\n      newKeywords = _ref2.newKeywords;\n\n  // console.log(\"#mergeKeywords #1\");\n  // console.table(keywords);\n  var _iterator3 = _createForOfIteratorHelper(newKeywords),\n      _step3;\n\n  try {\n    var _loop = function _loop() {\n      var newKeyword = _step3.value;\n      var index = keywords.findIndex(function (k) {\n        return k.keyword === newKeyword.keyword;\n      });\n\n      if (index === -1) {\n        keywords.push(newKeyword);\n      } else {\n        keywords[index].count += newKeyword.count;\n      }\n    };\n\n    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {\n      _loop();\n    } // console.log(\"#mergeKeywords #2\");\n    // console.table(keywords);\n\n  } catch (err) {\n    _iterator3.e(err);\n  } finally {\n    _iterator3.f();\n  }\n\n  return keywords;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (groupByDepartment);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvZ3JvdXAvZGVwYXJ0bWVudHMuanM/ZjUxZiJdLCJuYW1lcyI6WyJncm91cEJ5RGVwYXJ0bWVudCIsInBsYWNlcyIsImdyb3VwQnlEcHQiLCJwbGFjZSIsImlkIiwibGlzdERlcGFydG1lbnROYW1lIiwibmFtZSIsInRvTG93ZXJDYXNlIiwiZHB0TmFtZSIsInN1YnN0ciIsImhhc093blByb3BlcnR5IiwicHVzaCIsImRwdHMiLCJkcHROYW1lcyIsIk9iamVjdCIsImtleXMiLCJjb25zb2xlIiwibG9nIiwiY2l0aWVzIiwiY2l0eU1lcmdlIiwibGlzdERlcGFydG1lbnQiLCJ0b3RhbCIsInR5cGUiLCJjb29yZHMiLCJrZXl3b3JkcyIsImNpdHkiLCJtZXJnZUtleXdvcmRzIiwibmV3S2V5d29yZHMiLCJzb3J0IiwiYSIsImIiLCJjaGFyQ29kZUF0IiwibmV3S2V5d29yZCIsImluZGV4IiwiZmluZEluZGV4IiwiayIsImtleXdvcmQiLCJjb3VudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixHQUEwQjtBQUFBLGlGQUFQLEVBQU87QUFBQSx5QkFBdkJDLE1BQXVCO0FBQUEsTUFBdkJBLE1BQXVCLDRCQUFkLEVBQWM7O0FBQ2xELE1BQU1DLFVBQVUsR0FBRyxFQUFuQjtBQUNBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFQb0QsNkNBUTlCRCxNQVI4QjtBQUFBOztBQUFBO0FBUWxELHdEQUE0QjtBQUFBLFVBQWpCRSxLQUFpQjs7QUFDMUIsVUFBSSxDQUFDQSxLQUFLLENBQUNDLEVBQVgsRUFBZTtBQUNiO0FBQ0E7QUFDQSxZQUFJQywrREFBa0IsQ0FBQ0YsS0FBSyxDQUFDRyxJQUFOLENBQVdDLFdBQVgsRUFBRCxDQUF0QixFQUFrRDtBQUNoRDtBQUNBSixlQUFLLENBQUNDLEVBQU4sR0FBV0MsK0RBQWtCLENBQUNGLEtBQUssQ0FBQ0cs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LFVBQVUsQ0FBQ0ssS0FBcEM7QUFDRDtBQVRnRDs7QUFHbkQsMkRBQXNDO0FBQUE7QUFPckMsS0FWa0QsQ0FZbkQ7QUFDQTs7QUFibUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFjbkQsU0FBT2IsUUFBUDtBQUNELENBZkQ7O0FBaUJBLCtEQUFleEIsaUJBQWYiLCJmaWxlIjoiLi91dGlscy9ncm91cC9kZXBhcnRtZW50cy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGxpc3REZXBhcnRtZW50LCBsaXN0RGVwYXJ0bWVudE5hbWUgfSBmcm9tIFwiLi9saXN0RGVwYXJ0bWVudFwiO1xuXG5jb25zdCBncm91cEJ5RGVwYXJ0bWVudCA9ICh7IHBsYWNlcyA9IFtdIH0gPSB7fSkgPT4ge1xuICBjb25zdCBncm91cEJ5RHB0ID0ge307XG4gIC8qKlxuICAgKiB7XG4gICAqICAgXCI2OVwiOiBbe30sIHt9LCB7fSwge30sIHt9XSxcbiAgICogICBcIjcwXCI6IFt7fSwge31dXG4gICAqIH1cbiAgICovXG4gIGZvciAoY29uc3QgcGxhY2Ugb2YgcGxhY2VzKSB7XG4gICAgaWYgKCFwbGFjZS5pZCkge1xuICAgICAgLy8gY29uc29sZS5sb2coXCJsaXN0RGVwYXJ0bWVudE5hbWVcIiwgbGlzdERlcGFydG1lbnROYW1lKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwicGxhY2UubmFtZS50b0xvd2VyQ2FzZSgpXCIsIHBsYWNlLm5hbWUudG9Mb3dlckNhc2UoKSk7XG4gICAgICBpZiAobGlzdERlcGFydG1lbnROYW1lW3BsYWNlLm5hbWUudG9Mb3dlckNhc2UoKV0pIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCIjMSBwbGFjZVwiLCBwbGFjZSk7XG4gICAgICAgIHBsYWNlLmlkID0gbGlzdERlcGFydG1lbnROYW1lW3BsYWNlLm5hbWUudG9Mb3dlckNhc2UoKV07XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChwbGFjZS5pZCkge1xuICAgICAgLy8gY29uc29sZS5sb2coXCIjMiBwbGFjZVwiLCBwbGFjZSk7XG4gICAgICBjb25zdCBkcHROYW1lID0gcGxhY2UuaWQuc3Vic3RyKDAsIDIpO1xuICAgICAgaWYgKCFncm91cEJ5RHB0Lmhhc093blByb3BlcnR5KGRwdE5hbWUpKSB7XG4gICAgICAgIGdyb3VwQnlEcHRbZHB0TmFtZV0gPSBbXTtcbiAgICAgIH1cblxuICAgICAgZ3JvdXBCeURwdFtkcHROYW1lXS5wdXNoKHBsYWNlKTtcbiAgICB9XG4gIH1cbiAgLy8gY29uc29sZS50YWJsZShncm91cEJ5RHB0KTtcblxuICBjb25zdCBkcHRzID0gW107XG4gIGNvbnN0IGRwdE5hbWVzID0gT2JqZWN0LmtleXMoZ3JvdXBCeURwdCk7XG4gIGNvbnNvbGUubG9nKHtncm91cEJ5RHB0fSk7XG4gIGZvciAoY29uc3QgZHB0TmFtZSBvZiBkcHROYW1lcykge1xuICAgIGNvbnN0IGNpdGllcyA9IGdyb3VwQnlEcHRbZHB0TmFtZV07XG4gICAgLy8gY29uc29sZS5sb2coe2RwdE5hbWV9KTtcbiAgICBcbiAgICBjb25zdCBjaXR5TWVyZ2UgPSB7XG4gICAgICBpZDogZHB0TmFtZSxcbiAgICAgIG5hbWU6IGxpc3REZXBhcnRtZW50W2RwdE5hbWVdLm5hbWUsXG4gICAgICB0b3RhbDogMCxcbiAgICAgIHR5cGU6IFwiZGVwYXJ0bWVudFwiLFxuICAgICAgY29vcmRzOiBjaXRpZXNbMF0uY29vcmRzLFxuICAgICAga2V5d29yZHM6IFtdLFxuICAgIH07XG4gICAgZm9yIChjb25zdCBjaXR5IG9mIGNpdGllcykge1xuICAgICAgY2l0eU1lcmdlLnRvdGFsICs9IGNpdHkudG90YWw7XG4gICAgICBjaXR5TWVyZ2Uua2V5d29yZHMgPSBtZXJnZUtleXdvcmRzKHtcbiAgICAgICAga2V5d29yZHM6IGNpdHlNZXJnZS5rZXl3b3JkcyxcbiAgICAgICAgbmV3S2V5d29yZHM6IGNpdHkua2V5d29yZHMsXG4gICAgICB9KTtcbiAgICB9XG4gICAgZHB0cy5wdXNoKGNpdHlNZXJnZSk7XG4gIH1cblxuICBkcHRzLnNvcnQoKGEsIGIpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgYS5uYW1lLnRvTG93ZXJDYXNlKCkuY2hhckNvZGVBdCgwKSAtIGIubmFtZS50b0xvd2VyQ2FzZSgpLmNoYXJDb2RlQXQoMClcbiAgICApO1xuICB9KTtcblxuICAvLyBjb25zb2xlLnRhYmxlKGRwdHMpO1xuXG4gIHJldHVybiBkcHRzO1xufTtcblxuY29uc3QgbWVyZ2VLZXl3b3JkcyA9ICh7IGtleXdvcmRzLCBuZXdLZXl3b3JkcyB9KSA9PiB7XG4gIC8vIGNvbnNvbGUubG9nKFwiI21lcmdlS2V5d29yZHMgIzFcIik7XG4gIC8vIGNvbnNvbGUudGFibGUoa2V5d29yZHMpO1xuICBmb3IgKGNvbnN0IG5ld0tleXdvcmQgb2YgbmV3S2V5d29yZHMpIHtcbiAgICBjb25zdCBpbmRleCA9IGtleXdvcmRzLmZpbmRJbmRleCgoaykgPT4gay5rZXl3b3JkID09PSBuZXdLZXl3b3JkLmtleXdvcmQpO1xuICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgIGtleXdvcmRzLnB1c2gobmV3S2V5d29yZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGtleXdvcmRzW2luZGV4XS5jb3VudCArPSBuZXdLZXl3b3JkLmNvdW50O1xuICAgIH1cbiAgfVxuXG4gIC8vIGNvbnNvbGUubG9nKFwiI21lcmdlS2V5d29yZHMgIzJcIik7XG4gIC8vIGNvbnNvbGUudGFibGUoa2V5d29yZHMpO1xuICByZXR1cm4ga2V5d29yZHM7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBncm91cEJ5RGVwYXJ0bWVudDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/group/departments.js\n");

/***/ })

});