webpackHotUpdate("static/development/pages/index.js",{

/***/ "ge2G":
/*!**********************************!*\
  !*** ./components/test/Diff.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "OkUi");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var json_diff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! json-diff */ "i8z/");
/* harmony import */ var json_diff__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(json_diff__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _diff_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./diff.less */ "Og7T");
/* harmony import */ var _diff_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_diff_less__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var EMPTY = '""';

var handleJsonDiff = function handleJsonDiff(oldJson, newJson) {
  var mergedOldJson = oldJson || EMPTY;
  var mergedNewJson = newJson || EMPTY;

  try {
    mergedOldJson = JSON.parse(mergedOldJson);
    mergedNewJson = JSON.parse(mergedNewJson);
  } catch (err) {
    throw new Error('invalid json');
  }

  return Object(json_diff__WEBPACK_IMPORTED_MODULE_1__["diffString"])(mergedOldJson, mergedNewJson);
};

var JsonDiff = function JsonDiff(_ref) {
  var oldJson = _ref.oldJson,
      newJson = _ref.newJson,
      raw = _ref.raw;
  var diff;

  try {
    if (raw) {
      diff = handleJsonDiff(oldJson, newJson);
    } else {
      diff = Object(json_diff__WEBPACK_IMPORTED_MODULE_1__["diffString"])(oldJson, newJson);
    }
  } catch (err) {
    return __jsx("div", null, "JSON ERROR");
  }

  console.log("diff", diff);
  return __jsx("div", {
    style: {
      overflow: 'auto',
      width: 400
    }
  }, __jsx("pre", null, typeof diff === 'string' && diff.split('\n').map(function (e, i) {
    var row = null;

    if (e.indexOf('[31m-') > -1 && e.indexOf('[39m') > -1) {
      row = __jsx("p", {
        key: i,
        className: 'delete'
      }, e.replace(new RegExp('\\[31m|\\[39m', 'gm'), ''));
    } else if (e.indexOf('[32m+') > -1 && e.indexOf('[39m') > -1) {
      row = __jsx("p", {
        key: i,
        className: 'add'
      }, e.replace(new RegExp('\\[32m|\\[39m', 'gm'), ''));
    } else {
      row = __jsx("p", {
        key: i
      }, e);
    }

    return row;
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (JsonDiff);

/***/ })

})
//# sourceMappingURL=index.js.0e46cec164e84c07b65c.hot-update.js.map