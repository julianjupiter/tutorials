webpackHotUpdate_N_E("pages/java/[slug]",{

/***/ "./pages/java/[slug].js":
/*!******************************!*\
  !*** ./pages/java/[slug].js ***!
  \******************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_markdown_with_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-markdown/with-html */ "./node_modules/react-markdown/with-html.js");
/* harmony import */ var react_markdown_with_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_markdown_with_html__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-syntax-highlighter */ "./node_modules/react-syntax-highlighter/dist/esm/index.js");
/* harmony import */ var react_syntax_highlighter_dist_esm_styles_prism_material_dark__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-syntax-highlighter/dist/esm/styles/prism/material-dark */ "./node_modules/react-syntax-highlighter/dist/esm/styles/prism/material-dark.js");
var _this = undefined,
    _jsxFileName = "D:\\workspace\\github\\tutorials\\pages\\java\\[slug].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var CodeBlock = function CodeBlock(_ref) {
  var language = _ref.language,
      value = _ref.value;
  return __jsx(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_2__["Prism"], {
    language: language,
    style: react_syntax_highlighter_dist_esm_styles_prism_material_dark__WEBPACK_IMPORTED_MODULE_3__["default"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 10
    }
  }, value);
};

_c = CodeBlock;

var Java = function Java(_ref2) {
  var content = _ref2.content,
      frontmatter = _ref2.frontmatter;
  var title = frontmatter.title,
      updatedAt = frontmatter.updatedAt;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, title), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, "Updated at ", updatedAt), __jsx(react_markdown_with_html__WEBPACK_IMPORTED_MODULE_1___default.a, {
    escapeHtml: false,
    source: content,
    renderers: {
      code: CodeBlock
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }));
};

_c2 = Java;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Java);

var _c, _c2;

$RefreshReg$(_c, "CodeBlock");
$RefreshReg$(_c2, "Java");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvamF2YS9bc2x1Z10uanMiXSwibmFtZXMiOlsiQ29kZUJsb2NrIiwibGFuZ3VhZ2UiLCJ2YWx1ZSIsIm1hdGVyaWFsTGlnaHQiLCJKYXZhIiwiY29udGVudCIsImZyb250bWF0dGVyIiwidGl0bGUiLCJ1cGRhdGVkQXQiLCJjb2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFJQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FBeUI7QUFBQSxNQUF0QkMsUUFBc0IsUUFBdEJBLFFBQXNCO0FBQUEsTUFBWkMsS0FBWSxRQUFaQSxLQUFZO0FBQ3pDLFNBQU8sTUFBQyw4REFBRDtBQUFtQixZQUFRLEVBQUVELFFBQTdCO0FBQXVDLFNBQUssRUFBRUUsb0dBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBOERELEtBQTlELENBQVA7QUFDRCxDQUZEOztLQUFNRixTOztBQUlOLElBQU1JLElBQUksR0FBRyxTQUFQQSxJQUFPLFFBQThCO0FBQUEsTUFBM0JDLE9BQTJCLFNBQTNCQSxPQUEyQjtBQUFBLE1BQWxCQyxXQUFrQixTQUFsQkEsV0FBa0I7QUFBQSxNQUNqQ0MsS0FEaUMsR0FDWkQsV0FEWSxDQUNqQ0MsS0FEaUM7QUFBQSxNQUMxQkMsU0FEMEIsR0FDWkYsV0FEWSxDQUMxQkUsU0FEMEI7QUFFekMsU0FBTyxtRUFDTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUtELEtBQUwsQ0FESyxFQUVMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQWdCQyxTQUFoQixDQUZLLEVBR0wsTUFBQywrREFBRDtBQUFlLGNBQVUsRUFBRSxLQUEzQjtBQUFrQyxVQUFNLEVBQUVILE9BQTFDO0FBQW1ELGFBQVMsRUFBRTtBQUFFSSxVQUFJLEVBQUVUO0FBQVIsS0FBOUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhLLENBQVA7QUFLRCxDQVBEOztNQUFNSSxJOztBQVNTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9qYXZhL1tzbHVnXS45YWEyYmQ1OGQ2MzVlNDcxN2I2Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgZnMgZnJvbSBcImZzXCI7XHJcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XHJcbmltcG9ydCBtYXR0ZXIgZnJvbSBcImdyYXktbWF0dGVyXCI7XHJcbmltcG9ydCBSZWFjdE1hcmtkb3duIGZyb20gXCJyZWFjdC1tYXJrZG93bi93aXRoLWh0bWxcIjtcclxuaW1wb3J0IHsgUHJpc20gYXMgU3ludGF4SGlnaGxpZ2h0ZXIgfSBmcm9tIFwicmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyXCI7XHJcbmltcG9ydCBtYXRlcmlhbExpZ2h0IGZyb20gJ3JlYWN0LXN5bnRheC1oaWdobGlnaHRlci9kaXN0L2VzbS9zdHlsZXMvcHJpc20vbWF0ZXJpYWwtZGFyayc7XHJcblxyXG5jb25zdCBDb2RlQmxvY2sgPSAoeyBsYW5ndWFnZSwgdmFsdWUgfSkgPT4ge1xyXG4gIHJldHVybiA8U3ludGF4SGlnaGxpZ2h0ZXIgbGFuZ3VhZ2U9e2xhbmd1YWdlfSBzdHlsZT17bWF0ZXJpYWxMaWdodH0+e3ZhbHVlfTwvU3ludGF4SGlnaGxpZ2h0ZXI+O1xyXG59O1xyXG5cclxuY29uc3QgSmF2YSA9ICh7IGNvbnRlbnQsIGZyb250bWF0dGVyIH0pID0+IHtcclxuICBjb25zdCB7IHRpdGxlLCB1cGRhdGVkQXQgfSA9IGZyb250bWF0dGVyO1xyXG4gIHJldHVybiA8PlxyXG4gICAgPGgxPnt0aXRsZX08L2gxPlxyXG4gICAgPGgzPlVwZGF0ZWQgYXQge3VwZGF0ZWRBdH08L2gzPlxyXG4gICAgPFJlYWN0TWFya2Rvd24gZXNjYXBlSHRtbD17ZmFsc2V9IHNvdXJjZT17Y29udGVudH0gcmVuZGVyZXJzPXt7IGNvZGU6IENvZGVCbG9jayB9fSAvPlxyXG4gICAgPC8+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEphdmFcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuICBjb25zdCBmaWxlcyA9IGZzLnJlYWRkaXJTeW5jKFwiY29udGVudHMvamF2YVwiKTtcclxuXHJcbiAgY29uc3QgcGF0aHMgPSBmaWxlcy5tYXAoKGZpbGVuYW1lKSA9PiAoe1xyXG4gICAgcGFyYW1zOiB7XHJcbiAgICAgIHNsdWc6IGZpbGVuYW1lLnJlcGxhY2UoXCIubWRcIiwgXCJcIiksXHJcbiAgICB9LFxyXG4gIH0pKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHBhdGhzLFxyXG4gICAgZmFsbGJhY2s6IGZhbHNlLFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtczogeyBzbHVnIH0gfSkge1xyXG4gICBjb25zdCBtYXJrZG93bldpdGhNZXRhZGF0YSA9IGZzXHJcbiAgICAucmVhZEZpbGVTeW5jKHBhdGguam9pbihcImNvbnRlbnRzL2phdmFcIiwgc2x1ZyArIFwiLm1kXCIpKVxyXG4gICAgLnRvU3RyaW5nKCk7XHJcblxyXG4gIGNvbnN0IHsgZGF0YSwgY29udGVudCB9ID0gbWF0dGVyKG1hcmtkb3duV2l0aE1ldGFkYXRhKTtcclxuXHJcbiAgLy8gQ29udmVydCBwb3N0IGRhdGUgdG8gZm9ybWF0OiBNb250aCBkYXksIFllYXJcclxuICBjb25zdCBvcHRpb25zID0geyB5ZWFyOiBcIm51bWVyaWNcIiwgbW9udGg6IFwibG9uZ1wiLCBkYXk6IFwibnVtZXJpY1wiIH07XHJcbiAgY29uc3QgZm9ybWF0dGVkRGF0ZSA9IG5ldyBEYXRlKGRhdGEudXBkYXRlZEF0KS50b0xvY2FsZURhdGVTdHJpbmcoXCJlbi1VU1wiLCBvcHRpb25zKTtcclxuXHJcbiAgY29uc3QgZnJvbnRtYXR0ZXIgPSB7XHJcbiAgICAuLi5kYXRhLFxyXG4gICAgZGF0ZTogZm9ybWF0dGVkRGF0ZSxcclxuICB9O1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgY29udGVudDogY29udGVudCxcclxuICAgICAgZnJvbnRtYXR0ZXIsXHJcbiAgICB9LFxyXG4gIH07XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9