webpackHotUpdate("static/development/pages/index.js",{

/***/ "23aj":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "YF4q");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "4pUa");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/button */ "PYIr");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "0XnL");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "RZGo");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "UYjy");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "lpPp");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "Gd07");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "lgOM");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "olyO");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "OkUi");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_Index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @components/Index */ "5zUh");
/* harmony import */ var _components_common_Title__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @components/common/Title */ "WaOk");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/link */ "Y0ZI");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! next/router */ "cLeH");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @utils/index */ "cBaE");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! axios */ "91MD");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _components_test_Diff__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @components/test/Diff */ "ge2G");
/* harmony import */ var _static_styles_common_less__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @static/styles/common.less */ "akmK");
/* harmony import */ var _static_styles_common_less__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_static_styles_common_less__WEBPACK_IMPORTED_MODULE_18__);










var __jsx = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement;



/**Link, */





 // import Head from 'next/head'



var Index =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(Index, _React$Component);

  function Index() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Index);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Index)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "onBtnClick", function () {
      console.log('click');
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      next_router__WEBPACK_IMPORTED_MODULE_14___default.a.events.on('', function (url) {
        console.log("App is changing to:", url);
      });
      next_router__WEBPACK_IMPORTED_MODULE_14___default.a.events.on('', function (url) {
        console.log('App change complete:', url);
      });
      next_router__WEBPACK_IMPORTED_MODULE_14___default.a.events.on('', function (err, url) {
        if (err.cancelled) {
          console.log("Route to ".concat(url, " was cancelled!"));
        }
      });
      next_router__WEBPACK_IMPORTED_MODULE_14___default.a.beforePopState(function (_ref) {
        var url = _ref.url;
        console.log('beforePopState:', url);
        return true;
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", null, __jsx(_components_common_Title__WEBPACK_IMPORTED_MODULE_12__["default"], null), __jsx("pre", null, "InitialProps: ", Object(_utils_index__WEBPACK_IMPORTED_MODULE_15__["stringify"])(this.props.data)), __jsx(next_link__WEBPACK_IMPORTED_MODULE_13___default.a, {
        href: "/about"
      }, __jsx("a", {
        title: "about page"
      }, "click,link router")), __jsx("br", null), __jsx(next_link__WEBPACK_IMPORTED_MODULE_13___default.a, {
        href: {
          pathname: '/about',
          query: {
            name: 'test'
          }
        },
        replace: true
      }, __jsx("a", null, "click,link router with params")), __jsx("div", null, "Router API ", __jsx("button", {
        onClick: function onClick() {
          return next_router__WEBPACK_IMPORTED_MODULE_14___default.a.push('/category', '/category/1', {
            gametype: '1'
          });
        }
      }, "click, API")), __jsx(_components_Index__WEBPACK_IMPORTED_MODULE_11__["Index"], null), __jsx("img", {
        src: __webpack_require__(/*! @images/cat.jpg */ "dvu9")
      }), __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_2___default.a, {
        onClick: this.onBtnClick
      }, "Antd button"), __jsx("div", {
        className: "common"
      }), __jsx(_components_test_Diff__WEBPACK_IMPORTED_MODULE_17__["default"], {
        oldJson: {
          workflows: [{
            foo: 'abc'
          }]
        },
        newJson: {
          workflows: [{
            foo: 'abz',
            test: 'aa'
          }]
        }
      }));
    }
  }], [{
    key: "getInitialProps",
    //拓展
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var res;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_16___default.a.get('http://localhost:3001/api/test');

              case 2:
                res = _context.sent;
                console.log('res:', res.data);
                return _context.abrupt("return", {
                  data: res.data
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps() {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.a587dfbfe111d2f78539.hot-update.js.map