(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['react-payment-icons'] = {}, global.React));
}(this, (function (exports, React) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  var propTypes = {exports: {}};

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var ReactPropTypesSecret$1 = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

  var ReactPropTypesSecret_1 = ReactPropTypesSecret$1;

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var ReactPropTypesSecret = ReactPropTypesSecret_1;

  function emptyFunction() {}
  function emptyFunctionWithReset() {}
  emptyFunctionWithReset.resetWarningCache = emptyFunction;

  var factoryWithThrowingShims = function() {
    function shim(props, propName, componentName, location, propFullName, secret) {
      if (secret === ReactPropTypesSecret) {
        // It is still safe when called from React.
        return;
      }
      var err = new Error(
        'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
        'Use PropTypes.checkPropTypes() to call them. ' +
        'Read more at http://fb.me/use-check-prop-types'
      );
      err.name = 'Invariant Violation';
      throw err;
    }  shim.isRequired = shim;
    function getShim() {
      return shim;
    }  // Important!
    // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
    var ReactPropTypes = {
      array: shim,
      bool: shim,
      func: shim,
      number: shim,
      object: shim,
      string: shim,
      symbol: shim,

      any: shim,
      arrayOf: getShim,
      element: shim,
      elementType: shim,
      instanceOf: getShim,
      node: shim,
      objectOf: getShim,
      oneOf: getShim,
      oneOfType: getShim,
      shape: getShim,
      exact: getShim,

      checkPropTypes: emptyFunctionWithReset,
      resetWarningCache: emptyFunction
    };

    ReactPropTypes.PropTypes = ReactPropTypes;

    return ReactPropTypes;
  };

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  {
    // By explicitly using `prop-types` you are opting into new production behavior.
    // http://fb.me/prop-types-in-prod
    propTypes.exports = factoryWithThrowingShims();
  }

  var PropTypes = propTypes.exports;

  var DEFAULT_HEIGHT = 29;
  var DEFAULT_WIDTH = 45;

  var Visa$1 = /*#__PURE__*/function (_Component) {
    _inherits(Visa, _Component);

    var _super = _createSuper(Visa);

    function Visa(props, context) {
      var _this;

      _classCallCheck(this, Visa);

      _this = _super.call(this, props, context);

      _defineProperty(_assertThisInitialized(_this), "renderFlat", function () {
        var p = _this.props;
        var h = "".concat(p.height, "px");
        var w = "".concat(p.width, "px");
        return /*#__PURE__*/React__default['default'].createElement("svg", {
          width: w,
          height: h,
          viewBox: "0 0 750 471",
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg"
        }, /*#__PURE__*/React__default['default'].createElement("g", {
          id: "Page-1",
          stroke: "none",
          strokeWidth: "1",
          fill: "none",
          fillRule: "evenodd"
        }, /*#__PURE__*/React__default['default'].createElement("g", {
          id: "visa"
        }, /*#__PURE__*/React__default['default'].createElement("rect", {
          id: "Rectangle-1",
          fill: "#0E4595",
          x: "0",
          y: "0",
          width: "750",
          height: "471",
          rx: "40"
        }), /*#__PURE__*/React__default['default'].createElement("path", {
          d: "M278.1975,334.2275 L311.5585,138.4655 L364.9175,138.4655 L331.5335,334.2275 L278.1975,334.2275 L278.1975,334.2275 Z",
          id: "Shape",
          fill: "#FFFFFF"
        }), /*#__PURE__*/React__default['default'].createElement("path", {
          d: "M524.3075,142.6875 C513.7355,138.7215 497.1715,134.4655 476.4845,134.4655 C423.7605,134.4655 386.6205,161.0165 386.3045,199.0695 C386.0075,227.1985 412.8185,242.8905 433.0585,252.2545 C453.8275,261.8495 460.8105,267.9695 460.7115,276.5375 C460.5795,289.6595 444.1255,295.6545 428.7885,295.6545 C407.4315,295.6545 396.0855,292.6875 378.5625,285.3785 L371.6865,282.2665 L364.1975,326.0905 C376.6605,331.5545 399.7065,336.2895 423.6355,336.5345 C479.7245,336.5345 516.1365,310.2875 516.5505,269.6525 C516.7515,247.3835 502.5355,230.4355 471.7515,216.4645 C453.1005,207.4085 441.6785,201.3655 441.7995,192.1955 C441.7995,184.0585 451.4675,175.3575 472.3565,175.3575 C489.8055,175.0865 502.4445,178.8915 512.2925,182.8575 L517.0745,185.1165 L524.3075,142.6875",
          id: "path13",
          fill: "#FFFFFF"
        }), /*#__PURE__*/React__default['default'].createElement("path", {
          d: "M661.6145,138.4655 L620.3835,138.4655 C607.6105,138.4655 598.0525,141.9515 592.4425,154.6995 L513.1975,334.1025 L569.2285,334.1025 C569.2285,334.1025 578.3905,309.9805 580.4625,304.6845 C586.5855,304.6845 641.0165,304.7685 648.7985,304.7685 C650.3945,311.6215 655.2905,334.1025 655.2905,334.1025 L704.8025,334.1025 L661.6145,138.4655 L661.6145,138.4655 Z M596.1975,264.8725 C600.6105,253.5935 617.4565,210.1495 617.4565,210.1495 C617.1415,210.6705 621.8365,198.8155 624.5315,191.4655 L628.1385,208.3435 C628.1385,208.3435 638.3555,255.0725 640.4905,264.8715 L596.1975,264.8715 L596.1975,264.8725 L596.1975,264.8725 Z",
          id: "Path",
          fill: "#FFFFFF"
        }), /*#__PURE__*/React__default['default'].createElement("path", {
          d: "M232.9025,138.4655 L180.6625,271.9605 L175.0965,244.8315 C165.3715,213.5575 135.0715,179.6755 101.1975,162.7125 L148.9645,333.9155 L205.4195,333.8505 L289.4235,138.4655 L232.9025,138.4655",
          id: "path16",
          fill: "#FFFFFF"
        }), /*#__PURE__*/React__default['default'].createElement("path", {
          d: "M131.9195,138.4655 L45.8785,138.4655 L45.1975,142.5385 C112.1365,158.7425 156.4295,197.9015 174.8155,244.9525 L156.1065,154.9925 C152.8765,142.5965 143.5085,138.8975 131.9195,138.4655",
          id: "path18",
          fill: "#F2AE14"
        }))));
      });

      _defineProperty(_assertThisInitialized(_this), "renderMono", function () {
        var p = _this.props;
        var h = "".concat(p.height, "px");
        var w = "".concat(p.width, "px");
        return /*#__PURE__*/React__default['default'].createElement("svg", {
          width: w,
          height: h,
          viewBox: "0 0 750 471",
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg"
        }, /*#__PURE__*/React__default['default'].createElement("g", {
          id: "Page-1",
          stroke: "none",
          strokeWidth: "1",
          fill: "none",
          fillRule: "evenodd"
        }, /*#__PURE__*/React__default['default'].createElement("g", {
          id: "Visa",
          fill: "#393939"
        }, /*#__PURE__*/React__default['default'].createElement("path", {
          d: "M0,40.0047706 C0,17.9107459 17.9143492,0 39.9919369,0 L710.008063,0 C732.095,0 750,17.9064659 750,40.0047706 L750,430.995229 C750,453.089254 732.085651,471 710.008063,471 L39.9919369,471 C17.905,471 0,453.093534 0,430.995229 L0,40.0047706 Z M277.6505,333.6295 L311.0115,137.8675 L364.3705,137.8675 L330.9865,333.6295 L277.6505,333.6295 Z M524.5125,142.6875 C513.9405,138.7215 497.3765,134.4655 476.6895,134.4655 C423.9655,134.4655 386.8255,161.0165 386.5095,199.0695 C386.2125,227.1985 413.0235,242.8905 433.2635,252.2545 C454.0325,261.8495 461.0155,267.9695 460.9165,276.5375 C460.7845,289.6595 444.3305,295.6545 428.9935,295.6545 C407.6365,295.6545 396.2905,292.6875 378.7675,285.3785 L371.8915,282.2665 L364.4025,326.0905 C376.8655,331.5545 399.9115,336.2895 423.8405,336.5345 C479.9295,336.5345 516.3415,310.2875 516.7555,269.6525 C516.9565,247.3835 502.7405,230.4355 471.9565,216.4645 C453.3055,207.4085 441.8835,201.3655 442.0045,192.1955 C442.0045,184.0585 451.6725,175.3575 472.5615,175.3575 C490.0105,175.0865 502.6495,178.8915 512.4975,182.8575 L517.2795,185.1165 L524.5125,142.6875 Z M661.3395,138.0545 L620.1085,138.0545 C607.3355,138.0545 597.7775,141.5405 592.1675,154.2885 L512.9225,333.6915 L568.9535,333.6915 C568.9535,333.6915 578.1155,309.5695 580.1875,304.2735 C586.3105,304.2735 640.7415,304.3575 648.5235,304.3575 C650.1195,311.2105 655.0155,333.6915 655.0155,333.6915 L704.5275,333.6915 L661.3395,138.0545 Z M175.088482,244.366797 C175.089488,244.370031 175.090494,244.373266 175.0915,244.3765 L180.6575,271.5055 L232.8975,138.0105 L289.4185,138.0105 L205.4145,333.3955 L148.9595,333.4605 L101.520801,163.434171 C85.1184477,154.339743 66.4024534,147.029038 45.4725,141.9625 L46.1535,137.8895 L132.1945,137.8895 C143.7835,138.3215 153.1515,142.0205 156.3815,154.4165 L175.088482,244.366796 Z M595.5425,264.2325 C599.9555,252.9535 616.8015,209.5095 616.8015,209.5095 C616.4865,210.0305 621.1815,198.1755 623.8765,190.8255 L627.4835,207.7035 C627.4835,207.7035 637.7005,254.4325 639.8355,264.2315 L595.5425,264.2315 L595.5425,264.2325 Z",
          id: "Rectangle-1"
        }))));
      });

      return _this;
    }

    _createClass(Visa, [{
      key: "render",
      value: function render() {
        var p = this.props;

        switch (p.type) {
          case "mono":
            return this.renderMono();

          default:
            return this.renderFlat();
        }
      }
    }]);

    return Visa;
  }(React.Component);

  _defineProperty(Visa$1, "propTypes", {
    type: PropTypes.string,
    height: PropTypes.number,
    width: PropTypes.number
  });

  _defineProperty(Visa$1, "defaultProps", {
    type: "flat",
    height: DEFAULT_HEIGHT,
    width: DEFAULT_WIDTH
  });

  var Discover$1 = /*#__PURE__*/function (_Component) {
    _inherits(Discover, _Component);

    var _super = _createSuper(Discover);

    function Discover(props, context) {
      var _this;

      _classCallCheck(this, Discover);

      _this = _super.call(this, props, context);

      _defineProperty(_assertThisInitialized(_this), "renderFlat", function () {
        var p = _this.props;
        var h = "".concat(p.height, "px");
        var w = "".concat(p.width, "px");
        return /*#__PURE__*/React__default['default'].createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: w,
          height: h,
          viewBox: "0 0 780 501"
        }, /*#__PURE__*/React__default['default'].createElement("g", {
          fill: "none",
          fillRule: "evenodd"
        }, /*#__PURE__*/React__default['default'].createElement("path", {
          fill: "#4D4D4D",
          d: "M54.992188,0 C24.626565,0 -4.7369516e-15,24.629374 0,55.003906 L0,445.99609 C0,476.37636 24.618673,501 54.992188,501 L725.00781,501 C755.37344,501 780,476.37062 780,445.99609 L780,268.55664 L780,55.003906 C780,24.623637 755.38133,-4.7369516e-15 725.00781,0 L54.992188,0 L54.992188,0 L54.992188,0 Z"
        }), /*#__PURE__*/React__default['default'].createElement("path", {
          fill: "#FFFFFF",
          d: "M327.15234,161.89258 C335.9889,161.89258 343.40028,163.67723 352.41992,167.98242 L352.41992,190.73438 C343.87628,182.87089 336.46483,179.58008 326.66406,179.58008 C307.4002,179.58008 292.25,194.59455 292.25,213.63086 C292.25,233.70517 306.93133,247.82617 327.61914,247.82617 C336.93171,247.82617 344.20582,244.70584 352.41992,236.96875 L352.41992,259.73242 C343.07888,263.87291 335.50876,265.50781 326.66406,265.50781 C295.38621,265.50781 271.08203,242.91198 271.08203,213.77148 C271.08203,184.94507 296.03316,161.89258 327.15234,161.89258 L327.15234,161.89258 L327.15234,161.89258 Z M230.03906,162.51953 C241.58477,162.51953 252.14952,166.24004 260.98242,173.51367 L250.23438,186.76172 C244.88362,181.11594 239.82337,178.73438 233.66992,178.73438 C224.81668,178.73437 218.36914,183.47936 218.36914,189.72266 C218.36914,195.07734 221.98883,197.91138 234.31445,202.20508 C257.67927,210.24859 264.60352,217.3809 264.60352,233.13086 C264.60352,252.32421 249.62806,265.68359 228.2832,265.68359 C212.65323,265.68359 201.29008,259.88895 191.82617,246.8125 L205.09375,234.78125 C209.82489,243.39164 217.71615,248.00391 227.51367,248.00391 C236.67693,248.00391 243.46094,242.05155 243.46094,234.01953 C243.46094,229.85606 241.40612,226.28585 237.30273,223.76172 C235.2368,222.56668 231.1447,220.78491 223.10352,218.11523 C203.81198,211.57701 197.19336,204.58834 197.19336,190.92969 C197.19336,174.70478 211.40702,162.51953 230.03906,162.51953 L230.03906,162.51953 L230.03906,162.51953 Z M464.76172,164.24805 L487.19922,164.24805 L515.2832,230.83984 L543.72852,164.24805 L565.99609,164.24805 L520.50195,265.93359 L509.44922,265.93359 L464.76172,164.24805 L464.76172,164.24805 L464.76172,164.24805 Z M67.414062,164.40039 L97.564453,164.40039 C130.87609,164.40039 154.09766,184.78179 154.09766,214.04102 C154.09766,228.63041 146.99364,242.73654 134.98047,252.09766 C124.87172,259.99945 113.35396,263.54297 97.40625,263.54297 L67.414062,263.54297 L67.414062,164.40039 L67.414062,164.40039 L67.414062,164.40039 Z M163.54883,164.40039 L184.08984,164.40039 L184.08984,263.54297 L163.54883,263.54297 L163.54883,164.40039 L163.54883,164.40039 L163.54883,164.40039 Z M575.2832,164.40039 L633.53516,164.40039 L633.53516,181.19922 L595.80859,181.19922 L595.80859,203.20508 L632.14453,203.20508 L632.14453,219.99609 L595.80859,219.99609 L595.80859,246.75781 L633.53516,246.75781 L633.53516,263.54297 L575.2832,263.54297 L575.2832,164.40039 L575.2832,164.40039 L575.2832,164.40039 Z M647.14062,164.40039 L677.5957,164.40039 C701.28599,164.40039 714.86133,175.11052 714.86133,193.67188 C714.86133,208.85113 706.34712,218.81273 690.875,221.77734 L724.02344,263.54297 L698.76367,263.54297 L670.33398,223.71484 L667.65625,223.71484 L667.65625,263.54297 L647.14062,263.54297 L647.14062,164.40039 L647.14062,164.40039 L647.14062,164.40039 Z M667.65625,180.01562 L667.65625,210.04102 L673.6582,210.04102 C686.77472,210.04102 693.72656,204.67918 693.72656,194.71289 C693.72656,185.06451 686.77347,180.01562 673.98242,180.01562 L667.65625,180.01562 L667.65625,180.01562 L667.65625,180.01562 Z M87.939453,181.19922 L87.939453,246.75781 L93.451172,246.75781 C106.72432,246.75781 115.10685,244.36382 121.56055,238.87891 C128.66438,232.92288 132.9375,223.41276 132.9375,213.89844 C132.9375,204.39943 128.66438,195.17283 121.56055,189.2168 C114.77608,183.43696 106.72432,181.19922 93.451172,181.19922 L87.939453,181.19922 L87.939453,181.19922 L87.939453,181.19922 Z"
        }), /*#__PURE__*/React__default['default'].createElement("path", {
          fill: "#F47216",
          d: "M415.13086 161.21289C446.07103 161.21289 471.15234 184.79287 471.15234 213.92188L471.15234 213.95508C471.15234 243.08408 446.07103 266.69727 415.13086 266.69727 384.19069 266.69727 359.10938 243.08408 359.10938 213.95508L359.10938 213.92188C359.10938 184.79287 384.19069 161.21289 415.13086 161.21289L415.13086 161.21289 415.13086 161.21289zM779.981917 288.361069C753.932037 306.691919 558.904907 437.700579 221.228007 500.98412L724.989727 500.98412C755.355357 500.98412 779.981917 476.35474 779.981917 445.980209L779.981917 288.361069 779.981917 288.361069 779.981917 288.361069z"
        })));
      });

      _defineProperty(_assertThisInitialized(_this), "renderMono", function () {
        var p = _this.props;
        var h = "".concat(p.height, "px");
        var w = "".concat(p.width, "px");
        return /*#__PURE__*/React__default['default'].createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: w,
          height: h,
          viewBox: "0 0 750 471",
          version: "1.1",
          id: "svg2"
        }, /*#__PURE__*/React__default['default'].createElement("g", {
          id: "Page-1",
          stroke: "none",
          strokeWidth: "1",
          fill: "none",
          fillRule: "evenodd"
        }, /*#__PURE__*/React__default['default'].createElement("g", {
          id: "discover",
          transform: "translate(375.000000, 235.500000) scale(1, -1) translate(-375.000000, -235.500000) ",
          fill: "#393939"
        }, /*#__PURE__*/React__default['default'].createElement("path", {
          d: "M 0,40.004771 C 0,17.910746 17.914349,0 39.991937,0 L 710.00806,0 C 732.095,0 750,17.906466 750,40.004771 l 0,390.990459 C 750,453.08925 732.08565,471 710.00806,471 L 39.991937,471 C 17.905,471 0,453.09353 0,430.99523 Z m 149.43105,-31.4905954 557.42909,0 c 18.77936,0 34.00303,15.2195984 34.00303,33.9925264 l 0,179.418418 c 0,0 -208.87509,-147.428343 -591.43212,-213.4109444 z M 87.362471,255.88812 c -6.669449,-5.66014 -15.333048,-8.13053 -29.049923,-8.13053 l -5.695708,0 0,67.65297 5.695708,0 c 13.716875,0 22.038656,-2.30833 29.049923,-8.27282 7.341313,-6.14632 11.757621,-15.66817 11.757621,-25.47066 0,-9.81829 -4.416308,-19.63264 -11.757621,-25.77896 z m -24.798007,76.85861 -31.158432,0 0,-102.3095 30.99446,0 c 16.480851,0 28.383104,3.65617 38.829788,11.81042 12.41477,9.66019 19.75609,24.21767 19.75609,39.27319 0,30.19403 -23.99665,51.22589 -58.421906,51.22589 z m 68.188736,-102.3095 21.22733,0 0,102.3095 -21.22733,0 z m 73.13186,63.29653 c -12.73767,4.43089 -16.47917,7.35582 -16.47917,12.88158 0,6.44276 6.66482,11.34005 15.81403,11.34005 6.35917,0 11.58693,-2.45852 17.11656,-8.28468 l 11.1072,13.6721 c -9.12819,7.50601 -20.04619,11.344 -31.97787,11.344 -19.25492,0 -33.94259,-12.57327 -33.94259,-29.31655 0,-14.09502 6.83889,-21.30855 26.77534,-28.05566 8.31001,-2.75497 12.53922,-4.59294 14.67422,-5.82616 4.24056,-2.60477 6.3642,-6.28861 6.3642,-10.5851 0,-8.28864 -7.01126,-14.431 -16.48085,-14.431 -10.12505,0 -18.27949,4.75895 -23.1688,13.64443 L 159.97551,247.7016 c 9.78028,-13.49422 21.52445,-19.47453 37.67694,-19.47453 22.05841,0 37.53441,13.78672 37.53441,33.59328 0,16.25315 -7.1559,23.61292 -31.3018,31.91341 z m 37.99732,-11.93665 c 0,-30.0715 25.11586,-53.38798 57.43933,-53.38798 9.14038,0 16.96478,1.68777 26.6181,5.96054 l 0,23.4904 c -8.4887,-7.98429 -16.00618,-11.20567 -25.63006,-11.20567 -21.37941,0 -36.55311,14.5733 -36.55311,35.28895 0,19.6445 15.65721,35.13876 35.56507,35.13876 10.12842,0 17.78884,-3.3953 26.6181,-11.51002 l 0,23.47854 c -9.32117,4.44274 -16.9816,6.28465 -26.11357,6.28465 -32.1595,0 -57.94386,-23.79079 -57.94386,-53.53817 z m 252.364,-17.61349 -29.02301,68.72017 -23.1873,0 46.18119,-104.93403 11.42337,0 47.01367,104.93403 -23.01071,0 -29.39721,-68.72017 z m 62.00658,-33.74639 60.19869,0 0,17.32036 -38.98746,0 0,27.61693 37.54955,0 0,17.32827 -37.54955,0 0,22.70777 38.98746,0 0,17.33617 -60.19869,0 z m 101.66254,55.21014 -6.2015,0 0,30.98455 6.53785,0 c 13.21865,0 20.40398,-5.20955 20.40398,-15.16619 0,-10.2847 -7.18533,-15.81836 -20.74033,-15.81836 z m 42.58222,16.89348 c 0,19.15437 -14.0301,30.20588 -38.51236,30.20588 l -31.47418,0 0,-102.3095 21.20282,0 0,41.0993 2.7665,0 29.38039,-41.0993 26.10515,0 -34.2575,43.09932 c 15.98936,3.05933 24.78918,13.34008 24.78918,29.0043 z m -367.64587,-20.93267 0,0.0356 c 0,30.05964 25.92016,54.39194 57.89467,54.39194 31.97451,0 57.89467,-24.3323 57.89467,-54.39194 l 0,-0.0356 c 0,-30.05964 -25.92016,-54.42751 -57.89467,-54.42751 -31.97451,0 -57.89467,24.36787 -57.89467,54.42751 z",
          id: "Rectangle-1"
        }))));
      });

      return _this;
    }

    _createClass(Discover, [{
      key: "render",
      value: function render() {
        var p = this.props;

        switch (p.type) {
          case "mono":
            return this.renderMono();

          default:
            return this.renderFlat();
        }
      }
    }]);

    return Discover;
  }(React.Component);

  _defineProperty(Discover$1, "propTypes", {
    type: PropTypes.string,
    height: PropTypes.number,
    width: PropTypes.number
  });

  _defineProperty(Discover$1, "defaultProps", {
    type: "flat",
    height: DEFAULT_HEIGHT,
    width: DEFAULT_WIDTH
  });

  var Diners$1 = /*#__PURE__*/function (_Component) {
    _inherits(Diners, _Component);

    var _super = _createSuper(Diners);

    function Diners(props, context) {
      var _this;

      _classCallCheck(this, Diners);

      _this = _super.call(this, props, context);

      _defineProperty(_assertThisInitialized(_this), "renderFlat", function () {
        var p = _this.props;
        var h = "".concat(p.height, "px");
        var w = "".concat(p.width, "px");
        return /*#__PURE__*/React__default['default'].createElement("svg", {
          width: w,
          height: h,
          viewBox: "0 0 750 471",
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg",
          xmlnsXlink: "http://www.w3.org/1999/xlink"
        }, /*#__PURE__*/React__default['default'].createElement("g", {
          id: "Page-1",
          stroke: "none",
          "stroke-width": "1",
          fill: "none",
          "fill-rule": "evenodd"
        }, /*#__PURE__*/React__default['default'].createElement("g", {
          id: "diners",
          "fill-rule": "nonzero"
        }, /*#__PURE__*/React__default['default'].createElement("rect", {
          id: "rectangle",
          fill: "#0079BE",
          x: "0",
          y: "0",
          width: "750",
          height: "471",
          rx: "40"
        }), /*#__PURE__*/React__default['default'].createElement("path", {
          d: "M584.933911,237.947339 C584.933911,138.53154 501.952976,69.8140806 411.038924,69.8471464 L332.79674,69.8471464 C240.793699,69.8140806 165.066089,138.552041 165.066089,237.947339 C165.066089,328.877778 240.793699,403.587432 332.79674,403.150963 L411.038924,403.150963 C501.952976,403.586771 584.933911,328.857939 584.933911,237.947339 Z",
          id: "Shape-path",
          fill: "#FFFFFF"
        }), /*#__PURE__*/React__default['default'].createElement("path", {
          d: "M333.280302,83.9308394 C249.210378,83.9572921 181.085889,152.238282 181.066089,236.510581 C181.085889,320.768331 249.209719,389.042708 333.280302,389.069161 C417.370025,389.042708 485.508375,320.768331 485.520254,236.510581 C485.507715,152.238282 417.370025,83.9572921 333.280302,83.9308394 Z",
          id: "Shape-path",
          fill: "#0079BE"
        }), /*#__PURE__*/React__default['default'].createElement("path", {
          d: "M237.066089,236.09774 C237.145288,194.917524 262.812421,159.801587 299.006443,145.847134 L299.006443,326.327183 C262.812421,312.380667 237.144628,277.283907 237.066089,236.09774 Z M368.066089,326.372814 L368.066089,145.847134 C404.273312,159.767859 429.980043,194.903637 430.046043,236.103692 C429.980043,277.316312 404.273312,312.425636 368.066089,326.372814 Z",
          id: "Path",
          fill: "#FFFFFF"
        }))));
      });

      _defineProperty(_assertThisInitialized(_this), "renderMono", function () {
        var p = _this.props;
        var h = "".concat(p.height, "px");
        var w = "".concat(p.width, "px");
        return /*#__PURE__*/React__default['default'].createElement("svg", {
          width: w,
          height: h,
          viewBox: "0 0 750 471",
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg",
          xmlnsXlink: "http://www.w3.org/1999/xlink"
        }, /*#__PURE__*/React__default['default'].createElement("g", {
          id: "Page-1",
          stroke: "none",
          "stroke-width": "1",
          fill: "none",
          "fill-rule": "evenodd"
        }, /*#__PURE__*/React__default['default'].createElement("g", {
          id: "diners",
          fill: "#393939",
          "fill-rule": "nonzero"
        }, /*#__PURE__*/React__default['default'].createElement("path", {
          d: "M0,40.0047706 C0,17.9107459 17.9143492,0 39.9919369,0 L710.008063,0 C732.095,0 750,17.9064659 750,40.0047706 L750,430.995229 C750,453.089254 732.085651,471 710.008063,471 L39.9919369,471 C17.905,471 0,453.093534 0,430.995229 L0,40.0047706 Z M584.933911,236.947339 C584.933911,137.53154 501.952976,68.8140806 411.038924,68.8471464 L332.79674,68.8471464 C240.793699,68.8140806 165.066089,137.552041 165.066089,236.947339 C165.066089,327.877778 240.793699,402.587432 332.79674,402.150963 L411.038924,402.150963 C501.952976,402.586771 584.933911,327.857939 584.933911,236.947339 Z M333.166996,82.6223815 C249.097073,82.6488342 180.972583,150.929824 180.952783,235.202123 C180.972583,319.459873 249.096413,387.73425 333.166996,387.760703 C417.256719,387.73425 485.395069,319.459873 485.406949,235.202123 C485.394409,150.929824 417.256719,82.6488342 333.166996,82.6223815 Z M236.682602,235.202123 C236.761801,194.021908 262.428934,158.90597 298.622956,144.951518 L298.622956,325.431566 C262.428934,311.48505 236.761141,276.388291 236.682602,235.202123 Z M367.697836,325.471245 L367.697836,144.945566 C403.905059,158.866291 429.611791,194.002068 429.67779,235.202123 C429.611791,276.414743 403.905059,311.524068 367.697836,325.471245 Z",
          id: "Rectangle-1"
        }))));
      });

      return _this;
    }

    _createClass(Diners, [{
      key: "render",
      value: function render() {
        var p = this.props;

        switch (p.type) {
          case "mono":
            return this.renderMono();

          default:
            return this.renderFlat();
        }
      }
    }]);

    return Diners;
  }(React.Component);

  _defineProperty(Diners$1, "propTypes", {
    type: PropTypes.string,
    height: PropTypes.number,
    width: PropTypes.number
  });

  _defineProperty(Diners$1, "defaultProps", {
    type: "flat",
    height: DEFAULT_HEIGHT,
    width: DEFAULT_WIDTH
  });

  var Mastercard$1 = /*#__PURE__*/function (_Component) {
    _inherits(Mastercard, _Component);

    var _super = _createSuper(Mastercard);

    function Mastercard(props, context) {
      var _this;

      _classCallCheck(this, Mastercard);

      _this = _super.call(this, props, context);

      _defineProperty(_assertThisInitialized(_this), "renderFlat", function () {
        var p = _this.props;
        var h = "".concat(p.height, "px");
        var w = "".concat(p.width, "px");
        return /*#__PURE__*/React__default['default'].createElement("svg", {
          width: w,
          height: h,
          viewBox: "0 0 750 471",
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg"
        }, /*#__PURE__*/React__default['default'].createElement("g", {
          id: "Page-1",
          stroke: "none",
          strokeWidth: "1",
          fill: "none",
          fillRule: "evenodd"
        }, /*#__PURE__*/React__default['default'].createElement("g", {
          id: "mastercard"
        }, /*#__PURE__*/React__default['default'].createElement("rect", {
          id: "Rectangle-1",
          fill: "#000000",
          x: "0",
          y: "0",
          width: "750",
          height: "471",
          rx: "40"
        }), /*#__PURE__*/React__default['default'].createElement("path", {
          d: "M434.008334,235.5 C434.008334,334.641668 353.6375,415.004169 254.499999,415.004169 C155.362498,415.004169 74.9999973,334.641668 74.9999973,235.5 C74.9999973,136.366666 155.362498,55.9958324 254.499999,55.9958324 C353.6375,55.9958324 434.008334,136.366666 434.008334,235.5",
          id: "Fill-1",
          fill: "#D9222A"
        }), /*#__PURE__*/React__default['default'].createElement("path", {
          d: "M495.491667,55.9958324 C449.1125,55.9958324 406.85,73.5916658 374.991666,102.462499 C368.504166,108.345833 362.445833,114.7 356.866666,121.458333 L393.133333,121.458333 C398.091667,127.4875 402.658333,133.829166 406.816667,140.470833 L343.183333,140.470833 C339.370833,146.575 335.908333,152.916666 332.841666,159.479167 L417.154167,159.479167 C420.033333,165.6375 422.575,171.975 424.754167,178.483333 L325.241666,178.483333 C323.166666,184.675 321.420833,191.0125 320.024999,197.491667 L429.966667,197.491667 C432.604167,209.741667 434.008334,222.458334 434.008334,235.5 C434.008334,255.433334 430.754167,274.612501 424.754167,292.520834 L325.241666,292.520834 C327.416666,299.033334 329.958333,305.375001 332.837499,311.529168 L417.154167,311.529168 C414.079167,318.091668 410.625,324.433335 406.808333,330.541668 L343.183333,330.541668 C347.3375,337.170835 351.9125,343.520835 356.866666,349.537501 L393.125,349.537501 C387.554167,356.308335 381.491666,362.670835 374.995833,368.550002 C406.854167,397.416668 449.1125,415.004169 495.491667,415.004169 C594.629168,415.004169 675.000002,334.641668 675.000002,235.5 C675.000002,136.370833 594.629168,55.9958324 495.491667,55.9958324",
          id: "Fill-2",
          fill: "#EE9F2D"
        }), /*#__PURE__*/React__default['default'].createElement("path", {
          d: "M651.075002,335.558335 C651.075002,332.358335 653.666669,329.758335 656.870835,329.758335 C660.075002,329.758335 662.666669,332.358335 662.666669,335.558335 C662.666669,338.758335 660.075002,341.358335 656.870835,341.358335 C653.666669,341.358335 651.075002,338.758335 651.075002,335.558335 L651.075002,335.558335 L651.075002,335.558335 Z M656.870835,339.966668 C659.304169,339.966668 661.279169,337.991668 661.279169,335.558335 C661.279169,333.120835 659.304169,331.154168 656.870835,331.154168 C654.433335,331.154168 652.466669,333.120835 652.466669,335.558335 C652.466669,337.991668 654.433335,339.966668 656.870835,339.966668 L656.870835,339.966668 L656.870835,339.966668 Z M656.087502,338.108335 L654.900002,338.108335 L654.900002,333.012501 L657.050002,333.012501 C657.500002,333.012501 657.958335,333.012501 658.354169,333.266668 C658.766669,333.545835 659.000002,334.037501 659.000002,334.545835 C659.000002,335.116668 658.662502,335.650001 658.116669,335.858335 L659.054169,338.108335 L657.737502,338.108335 L656.958335,336.091668 L656.087502,336.091668 L656.087502,338.108335 L656.087502,338.108335 Z M656.087502,335.216668 L656.745835,335.216668 C656.991669,335.216668 657.250002,335.237501 657.470835,335.116668 C657.666669,334.991668 657.766669,334.758335 657.766669,334.533335 C657.766669,334.337501 657.645835,334.112501 657.479169,334.016668 C657.270835,333.887501 656.941669,333.916668 656.720835,333.916668 L656.087502,333.916668 L656.087502,335.216668 L656.087502,335.216668 Z",
          id: "Fill-3",
          fill: "#000000"
        }), /*#__PURE__*/React__default['default'].createElement("path", {
          d: "M212.587498,255.154167 C210.541665,254.916667 209.641665,254.854167 208.237498,254.854167 C197.191665,254.854167 191.599998,258.641667 191.599998,266.120834 C191.599998,270.733334 194.329165,273.666667 198.587498,273.666667 C206.524998,273.666667 212.245832,266.108334 212.587498,255.154167 L212.587498,255.154167 L212.587498,255.154167 Z M226.758332,288.150001 L210.612498,288.150001 L210.983332,280.475001 C206.058332,286.541668 199.487498,289.425001 190.558332,289.425001 C179.995832,289.425001 172.754165,281.175001 172.754165,269.195834 C172.754165,251.170834 185.349998,240.654167 206.970832,240.654167 C209.179165,240.654167 212.012498,240.854167 214.912498,241.225001 C215.516665,238.783334 215.674998,237.7375 215.674998,236.425 C215.674998,231.516667 212.279165,229.6875 203.174998,229.6875 C193.641665,229.579167 185.779165,231.958334 182.549998,233.020834 C182.754165,231.791667 185.249998,216.3625 185.249998,216.3625 C194.962498,213.516667 201.366665,212.445834 208.574998,212.445834 C225.308332,212.445834 234.170832,219.958334 234.154165,234.158334 C234.187499,237.9625 233.558332,242.658334 232.574999,248.829167 C230.883332,259.558334 227.254165,282.545834 226.758332,288.150001 L226.758332,288.150001 L226.758332,288.150001 Z",
          id: "Fill-4",
          fill: "#000000"
        }), /*#__PURE__*/React__default['default'].createElement("path", {
          d: "M164.599998,288.150001 L145.112498,288.150001 L156.274998,218.154167 L131.349998,288.150001 L118.070831,288.150001 L116.429164,218.554167 L104.695831,288.150001 L86.4541641,288.150001 L101.691664,197.095833 L129.712498,197.095833 L131.412498,248.062501 L148.504165,197.095833 L179.670832,197.095833 L164.599998,288.150001",
          id: "Fill-5",
          fill: "#000000"
        }), /*#__PURE__*/React__default['default'].createElement("path", {
          d: "M519.575001,255.154167 C517.537501,254.916667 516.633334,254.854167 515.233334,254.854167 C504.191667,254.854167 498.600001,258.641667 498.600001,266.120834 C498.600001,270.733334 501.325001,273.666667 505.583334,273.666667 C513.520834,273.666667 519.245834,266.108334 519.575001,255.154167 L519.575001,255.154167 L519.575001,255.154167 Z M533.758334,288.150001 L517.612501,288.150001 L517.979168,280.475001 C513.054168,286.541668 506.479167,289.425001 497.558334,289.425001 C486.991667,289.425001 479.758334,281.175001 479.758334,269.195834 C479.758334,251.170834 492.345834,240.654167 513.970834,240.654167 C516.179168,240.654167 519.008334,240.854167 521.904168,241.225001 C522.508334,238.783334 522.666668,237.7375 522.666668,236.425 C522.666668,231.516667 519.275001,229.6875 510.170834,229.6875 C500.637501,229.579167 492.783334,231.958334 489.541667,233.020834 C489.745834,231.791667 492.250001,216.3625 492.250001,216.3625 C501.962501,213.516667 508.362501,212.445834 515.562501,212.445834 C532.304168,212.445834 541.166668,219.958334 541.150001,234.158334 C541.183334,237.9625 540.554168,242.658334 539.570834,248.829167 C537.887501,259.558334 534.250001,282.545834 533.758334,288.150001 L533.758334,288.150001 L533.758334,288.150001 Z",
          id: "Fill-6",
          fill: "#000000"
        }), /*#__PURE__*/React__default['default'].createElement("path", {
          d: "M313.366666,287.025001 C308.033333,288.704168 303.874999,289.425001 299.366666,289.425001 C289.404166,289.425001 283.966666,283.700001 283.966666,273.158334 C283.824999,269.887501 285.399999,261.279167 286.637499,253.420834 C287.762499,246.504167 295.087499,202.891667 295.087499,202.891667 L314.458333,202.891667 L312.195833,214.1 L323.895833,214.1 L321.254166,231.895834 L309.512499,231.895834 C307.262499,245.979167 304.058333,263.520834 304.020833,265.845834 C304.020833,269.662501 306.058333,271.329167 310.691666,271.329167 C312.912499,271.329167 314.633333,271.104167 315.945833,270.629167 L313.366666,287.025001",
          id: "Fill-7",
          fill: "#000000"
        }), /*#__PURE__*/React__default['default'].createElement("path", {
          d: "M372.758333,286.425001 C366.104166,288.458334 359.683333,289.441668 352.879166,289.425001 C331.195833,289.404168 319.891666,278.079167 319.891666,256.391667 C319.891666,231.079167 334.270833,212.445834 353.791666,212.445834 C369.7625,212.445834 379.9625,222.879167 379.9625,239.241667 C379.9625,244.670834 379.2625,249.970834 377.575,257.454167 L338.999999,257.454167 C337.695833,268.195834 344.570833,272.670834 355.8375,272.670834 C362.770833,272.670834 369.025,271.241667 375.979166,268.008334 L372.758333,286.425001 L372.758333,286.425001 Z M361.870833,242.525001 C361.979166,240.983334 363.925,229.308334 352.858333,229.308334 C346.6875,229.308334 342.274999,234.0125 340.479166,242.525001 L361.870833,242.525001 L361.870833,242.525001 Z",
          id: "Fill-8",
          fill: "#000000"
        }), /*#__PURE__*/React__default['default'].createElement("path", {
          d: "M238.445832,237.508334 C238.445832,246.875001 242.987499,253.333334 253.287499,258.183334 C261.179166,261.891667 262.399999,262.991667 262.399999,266.354167 C262.399999,270.970834 258.920832,273.054167 251.208332,273.054167 C245.395832,273.054167 239.987499,272.145834 233.749999,270.133334 C233.749999,270.133334 231.187499,286.454168 231.070832,287.233334 C235.499999,288.200001 239.449999,289.095834 251.349999,289.425001 C271.912499,289.425001 281.408332,281.595834 281.408332,264.675001 C281.408332,254.500001 277.433332,248.529167 267.670832,244.041667 C259.499999,240.291667 258.562499,239.454167 258.562499,235.995834 C258.562499,231.991667 261.799999,229.95 268.099999,229.95 C271.924999,229.95 277.149999,230.358334 282.099999,231.0625 L284.874999,213.8875 C279.829166,213.0875 272.179166,212.445834 267.724999,212.445834 C245.924999,212.445834 238.379165,223.833334 238.445832,237.508334",
          id: "Fill-9",
          fill: "#000000"
        }), /*#__PURE__*/React__default['default'].createElement("path", {
          d: "M467.533334,214.391667 C472.945834,214.391667 477.991667,215.8125 484.945834,219.3125 L488.133334,199.55 C485.279167,198.429167 475.229167,191.85 466.716667,191.85 C453.675,191.85 442.65,198.320834 434.895834,209 C423.5875,205.254167 418.9375,212.825 413.2375,220.366667 L408.175,221.545834 C408.558333,219.0625 408.904167,216.595834 408.7875,214.1 L390.891667,214.1 C388.445833,237.016667 384.1125,260.229167 380.720833,283.175001 L379.8375,288.150001 L399.333333,288.150001 C402.5875,267.008334 404.370833,253.470834 405.454167,244.308334 L412.795833,240.225001 C413.891667,236.145834 417.325,234.766667 424.2125,234.933334 C423.3125,239.766667 422.829167,244.850001 422.829167,250.116667 C422.829167,274.341667 435.9,289.425001 456.879167,289.425001 C462.283334,289.425001 466.920834,288.712501 474.100001,286.766668 L477.529167,266.008334 C471.070834,269.187501 465.770834,270.683334 460.970834,270.683334 C449.641667,270.683334 442.7875,262.320834 442.7875,248.500001 C442.7875,228.45 452.983334,214.391667 467.533334,214.391667",
          id: "Fill-10",
          fill: "#000000"
        }), /*#__PURE__*/React__default['default'].createElement("path", {
          d: "M170.208331,282.741668 L150.716665,282.741668 L161.887498,212.754167 L136.962498,282.741668 L123.679164,282.741668 L122.037498,213.154167 L110.304164,282.741668 L92.0624975,282.741668 L107.299998,191.7 L135.320831,191.7 L136.108331,248.062501 L155.012498,191.7 L185.279165,191.7 L170.208331,282.741668",
          id: "Fill-12",
          fill: "#FFFFFF"
        }), /*#__PURE__*/React__default['default'].createElement("path", {
          d: "M632.520835,197.095833 L628.200002,223.404167 C622.870835,216.391667 617.145835,211.316667 609.587502,211.316667 C599.754168,211.316667 590.804168,218.770834 584.945835,229.741667 C576.787501,228.05 568.350001,225.179167 568.350001,225.179167 L568.345835,225.245834 C569.004168,219.1125 569.266668,215.370834 569.208335,214.1 L551.308334,214.1 C548.870834,237.016667 544.537501,260.229167 541.150001,283.175001 L540.258334,288.150001 L559.750001,288.150001 C562.383335,271.054167 564.400001,256.858334 565.883335,245.600001 C572.541668,239.583334 575.875001,234.333334 582.604168,234.683334 C579.625001,241.887501 577.879168,250.187501 577.879168,258.700001 C577.879168,277.212501 587.245835,289.425001 601.412502,289.425001 C608.554168,289.425001 614.033335,286.962501 619.379168,281.254168 L618.466668,288.137501 L636.900002,288.137501 L651.741669,197.095833 L632.520835,197.095833 L632.520835,197.095833 Z M608.150002,271.037501 C601.516668,271.037501 598.166668,266.129167 598.166668,256.441667 C598.166668,241.887501 604.437502,231.566667 613.279168,231.566667 C619.975002,231.566667 623.600002,236.670834 623.600002,246.075001 C623.600002,260.754167 617.229168,271.037501 608.150002,271.037501 L608.150002,271.037501 L608.150002,271.037501 Z",
          id: "Fill-11",
          fill: "#000000"
        }), /*#__PURE__*/React__default['default'].createElement("path", {
          d: "M218.191665,249.758334 C216.149998,249.520834 215.245832,249.458334 213.845832,249.458334 C202.799998,249.458334 197.212498,253.245834 197.212498,260.725001 C197.212498,265.329167 199.941665,268.270834 204.191665,268.270834 C212.137498,268.270834 217.858332,260.712501 218.191665,249.758334 L218.191665,249.758334 L218.191665,249.758334 Z M232.370832,282.741668 L216.224998,282.741668 L216.591665,275.079167 C211.670832,281.133334 205.091665,284.029168 196.170832,284.029168 C185.604165,284.029168 178.366665,275.779167 178.366665,263.800001 C178.366665,245.766667 190.958332,235.258334 212.583332,235.258334 C214.791665,235.258334 217.624998,235.458334 220.520832,235.829167 C221.124999,233.3875 221.283332,232.341667 221.283332,231.020834 C221.283332,226.1125 217.891665,224.291667 208.787498,224.291667 C199.249998,224.183334 191.391665,226.5625 188.158332,227.6125 C188.362498,226.3875 190.858332,210.975 190.858332,210.975 C200.566665,208.116667 206.979165,207.045834 214.179165,207.045834 C230.916665,207.045834 239.783332,214.5625 239.766665,228.75 C239.795832,232.570834 239.162499,237.2625 238.183332,243.425001 C236.495832,254.150001 232.862499,277.150001 232.370832,282.741668 L232.370832,282.741668 L232.370832,282.741668 Z",
          id: "Fill-13",
          fill: "#FFFFFF"
        }), /*#__PURE__*/React__default['default'].createElement("path", {
          d: "M493.745834,194.15 L490.554167,213.916667 C483.604167,210.420834 478.554167,208.995834 473.145834,208.995834 C458.595834,208.995834 448.395834,223.054167 448.395834,243.104167 C448.395834,256.925001 455.254167,265.283334 466.579167,265.283334 C471.379167,265.283334 476.675001,263.791667 483.133334,260.608334 L479.712501,281.358334 C472.529167,283.316668 467.895834,284.029168 462.4875,284.029168 C441.5125,284.029168 428.4375,268.945834 428.4375,244.720834 C428.4375,212.170834 446.495834,189.420833 472.325001,189.420833 C480.833334,189.420833 490.887501,193.029167 493.745834,194.15",
          id: "Fill-14",
          fill: "#FFFFFF"
        }), /*#__PURE__*/React__default['default'].createElement("path", {
          d: "M525.187501,249.758334 C523.145834,249.520834 522.245834,249.458334 520.841668,249.458334 C509.800001,249.458334 504.208334,253.245834 504.208334,260.725001 C504.208334,265.329167 506.937501,268.270834 511.191668,268.270834 C519.129168,268.270834 524.854168,260.712501 525.187501,249.758334 L525.187501,249.758334 L525.187501,249.758334 Z M539.366668,282.741668 L523.216668,282.741668 L523.587501,275.079167 C518.662501,281.133334 512.087501,284.029168 503.166667,284.029168 C492.604167,284.029168 485.362501,275.779167 485.362501,263.800001 C485.362501,245.766667 497.958334,235.258334 519.575001,235.258334 C521.787501,235.258334 524.616668,235.458334 527.516668,235.829167 C528.116668,233.3875 528.279168,232.341667 528.279168,231.020834 C528.279168,226.1125 524.887501,224.291667 515.783334,224.291667 C506.250001,224.183334 498.387501,226.5625 495.154167,227.6125 C495.358334,226.3875 497.858334,210.975 497.858334,210.975 C507.566667,208.116667 513.975001,207.045834 521.175001,207.045834 C537.916668,207.045834 546.779168,214.5625 546.758334,228.75 C546.791668,232.570834 546.162501,237.2625 545.179168,243.425001 C543.495834,254.150001 539.854168,277.150001 539.366668,282.741668 L539.366668,282.741668 L539.366668,282.741668 Z",
          id: "Fill-15",
          fill: "#FFFFFF"
        }), /*#__PURE__*/React__default['default'].createElement("path", {
          d: "M318.974999,281.620834 C313.637499,283.300001 309.479166,284.029168 304.974999,284.029168 C295.012499,284.029168 289.574999,278.304167 289.574999,267.762501 C289.437499,264.483334 291.012499,255.883334 292.249999,248.025001 C293.370832,241.100001 300.695832,197.491667 300.695832,197.491667 L320.062499,197.491667 L317.804166,208.704167 L327.745833,208.704167 L325.099999,226.491667 L315.124999,226.491667 C312.874999,240.583334 309.662499,258.112501 309.629166,260.441667 C309.629166,264.270834 311.670833,265.925001 316.299999,265.925001 C318.520833,265.925001 320.237499,265.708334 321.554166,265.233334 L318.974999,281.620834",
          id: "Fill-16",
          fill: "#FFFFFF"
        }), /*#__PURE__*/React__default['default'].createElement("path", {
          d: "M378.366666,281.029167 C371.716666,283.062501 365.2875,284.041668 358.4875,284.029168 C336.804166,284.008334 325.499999,272.683334 325.499999,250.995834 C325.499999,225.675 339.879166,207.045834 359.4,207.045834 C375.370833,207.045834 385.570833,217.475 385.570833,233.845834 C385.570833,239.279167 384.870833,244.579167 383.1875,252.058334 L344.6125,252.058334 C343.308333,262.800001 350.183333,267.279167 361.45,267.279167 C368.379166,267.279167 374.6375,265.845834 381.5875,262.604167 L378.366666,281.029167 L378.366666,281.029167 Z M367.475,237.116667 C367.591666,235.579167 369.533333,223.9 358.4625,223.9 C352.295833,223.9 347.883333,228.616667 346.0875,237.116667 L367.475,237.116667 L367.475,237.116667 Z",
          id: "Fill-17",
          fill: "#FFFFFF"
        }), /*#__PURE__*/React__default['default'].createElement("path", {
          d: "M244.054165,232.1125 C244.054165,241.479167 248.595832,247.929167 258.895832,252.787501 C266.787499,256.495834 268.008332,257.600001 268.008332,260.958334 C268.008332,265.575001 264.524999,267.658334 256.820832,267.658334 C251.004165,267.658334 245.595832,266.750001 239.354165,264.737501 C239.354165,264.737501 236.799999,281.058334 236.683332,281.837501 C241.104165,282.804168 245.058332,283.687501 256.958332,284.029168 C277.524999,284.029168 287.016666,276.200001 287.016666,259.283334 C287.016666,249.104167 283.045832,243.133334 273.279166,238.645834 C265.112499,234.8875 264.166666,234.0625 264.166666,230.6 C264.166666,226.6 267.412499,224.541667 273.708332,224.541667 C277.529166,224.541667 282.754166,224.9625 287.712499,225.666667 L290.483332,208.4875 C285.441666,207.6875 277.791666,207.045834 273.337499,207.045834 C251.533332,207.045834 243.991665,218.425 244.054165,232.1125",
          id: "Fill-18",
          fill: "#FFFFFF"
        }), /*#__PURE__*/React__default['default'].createElement("path", {
          d: "M642.508335,282.741668 L624.070835,282.741668 L624.987502,275.850001 C619.641668,281.566668 614.162502,284.029168 607.020835,284.029168 C592.854168,284.029168 583.491668,271.816667 583.491668,253.304167 C583.491668,228.675 598.012502,207.9125 615.200002,207.9125 C622.758335,207.9125 628.479168,211 633.804168,218.008334 L638.129169,191.7 L657.350002,191.7 L642.508335,282.741668 L642.508335,282.741668 Z M613.762502,265.633334 C622.837502,265.633334 629.212502,255.350001 629.212502,240.679167 C629.212502,231.275 625.583335,226.170834 618.887502,226.170834 C610.050002,226.170834 603.770835,236.4875 603.770835,251.045834 C603.770835,260.733334 607.129168,265.633334 613.762502,265.633334 L613.762502,265.633334 L613.762502,265.633334 Z",
          id: "Fill-19",
          fill: "#FFFFFF"
        }), /*#__PURE__*/React__default['default'].createElement("path", {
          d: "M556.920835,208.704167 C554.479168,231.620834 550.145834,254.833334 546.758334,277.766667 L545.866668,282.741668 L565.358335,282.741668 C572.329168,237.466667 574.016668,228.625 584.945835,229.733334 C586.687501,220.466667 589.929168,212.35 592.345835,208.254167 C584.183335,206.554167 579.625001,211.166667 573.658335,219.929167 C574.129168,216.141667 574.991668,212.4625 574.820835,208.704167 L556.920835,208.704167",
          id: "Fill-20",
          fill: "#FFFFFF"
        }), /*#__PURE__*/React__default['default'].createElement("path", {
          d: "M396.5,208.704167 C394.054167,231.620834 389.720833,254.833334 386.333333,277.766667 L385.445833,282.741668 L404.945833,282.741668 C411.908333,237.466667 413.591667,228.625 424.516667,229.733334 C426.266667,220.466667 429.508334,212.35 431.916667,208.254167 C423.7625,206.554167 419.2,211.166667 413.2375,219.929167 C413.708333,216.141667 414.5625,212.4625 414.4,208.704167 L396.5,208.704167",
          id: "Fill-21",
          fill: "#FFFFFF"
        }), /*#__PURE__*/React__default['default'].createElement("path", {
          d: "M651.066669,276.945834 C651.066669,273.733334 653.662502,271.145834 656.862502,271.145834 C660.066669,271.145834 662.658335,273.733334 662.658335,276.945834 C662.658335,280.141667 660.066669,282.741668 656.862502,282.741668 C653.662502,282.741668 651.066669,280.141667 651.066669,276.945834 L651.066669,276.945834 L651.066669,276.945834 Z M656.862502,281.350001 C659.300002,281.350001 661.266669,279.375001 661.266669,276.945834 C661.266669,274.512501 659.300002,272.537501 656.862502,272.537501 C654.429169,272.537501 652.454169,274.512501 652.454169,276.945834 C652.454169,279.375001 654.429169,281.350001 656.862502,281.350001 L656.862502,281.350001 L656.862502,281.350001 Z M656.079169,279.479167 L654.891669,279.479167 L654.891669,274.395834 L657.045835,274.395834 C657.491669,274.395834 657.954169,274.404167 658.341669,274.650001 C658.758335,274.933334 658.995835,275.416667 658.995835,275.925001 C658.995835,276.500001 658.658335,277.037501 658.108335,277.241667 L659.050002,279.479167 L657.729169,279.479167 L656.950002,277.470834 L656.079169,277.470834 L656.079169,279.479167 L656.079169,279.479167 Z M656.079169,276.600001 L656.733335,276.600001 C656.979169,276.600001 657.245835,276.616667 657.462502,276.500001 C657.658335,276.375001 657.758335,276.137501 657.758335,275.912501 C657.758335,275.725001 657.641669,275.500001 657.470835,275.387501 C657.266669,275.270834 656.929169,275.304167 656.708335,275.304167 L656.079169,275.304167 L656.079169,276.600001 L656.079169,276.600001 Z",
          id: "Fill-22",
          fill: "#FFFFFF"
        }))));
      });

      _defineProperty(_assertThisInitialized(_this), "renderMono", function () {
        var p = _this.props;
        var h = "".concat(p.height, "px");
        var w = "".concat(p.width, "px");
        return /*#__PURE__*/React__default['default'].createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: w,
          height: h,
          viewBox: "0 0 750 471",
          version: "1.1",
          id: "svg2"
        }, /*#__PURE__*/React__default['default'].createElement("g", {
          id: "Page-1",
          stroke: "none",
          strokeWidth: "1",
          fill: "none",
          fillRule: "evenodd"
        }, /*#__PURE__*/React__default['default'].createElement("g", {
          id: "mastercard",
          fill: "#393939"
        }, /*#__PURE__*/React__default['default'].createElement("path", {
          d: "M 0,40.004771 C 0,17.910746 17.914349,0 39.991937,0 L 710.00806,0 C 732.095,0 750,17.906466 750,40.004771 l 0,390.990459 C 750,453.08925 732.08565,471 710.00806,471 L 39.991937,471 C 17.905,471 0,453.09353 0,430.99523 Z M 703.97468,235.48039 c 0,112.36221 -91.6058,203.80556 -204.19747,203.80556 -46.96116,0 -90.25335,-15.94211 -124.79115,-42.60197 -34.51495,26.65986 -77.80667,42.60197 -124.77013,42.60197 -112.58892,0 -204.190614,-91.44335 -204.190614,-203.80556 0,-112.36631 91.601694,-203.766344 204.190614,-203.766344 46.96346,0 90.25518,15.882374 124.77013,42.580996 34.5378,-26.698622 77.82999,-42.580996 124.79115,-42.580996 112.59167,0 204.19747,91.400034 204.19747,203.766344 z M 499.77721,49.935684 c -41.41885,0 -79.65762,13.54311 -110.54927,36.397678 28.01769,26.023748 48.73854,59.817678 58.63977,97.902548 l -18.92519,0 c -9.69562,-33.67082 -28.64823,-63.39726 -53.95646,-86.274626 -25.2808,22.877366 -44.24712,52.603806 -53.90619,86.274626 l -18.95261,0 c 9.92408,-38.08487 30.64493,-71.8788 58.66262,-97.902548 -30.90993,-22.854568 -69.13453,-36.397678 -110.57395,-36.397678 -102.66759,0 -185.896411,83.059846 -185.896411,185.544706 0,102.45842 83.228821,185.54425 185.896411,185.54425 41.43942,0 79.66402,-13.54265 110.57395,-36.39585 -26.36368,-24.50436 -46.25296,-55.89884 -56.76645,-91.23861 l 19.13538,0 c 10.16624,30.9435 28.21417,58.25544 51.82725,79.60704 23.64051,-21.3516 41.71128,-48.66354 51.87752,-79.60704 l 19.13081,0 c -10.53177,35.33977 -30.41648,66.73425 -56.76645,91.23861 30.89165,22.8532 69.13042,36.39585 110.54927,36.39585 102.66759,0 185.89824,-83.08583 185.89824,-185.54425 0,-102.48486 -83.23065,-185.544706 -185.89824,-185.544706 z m -324.80332,141.318476 -29.76721,0 -18.60261,55.34845 -0.77492,-55.34845 -27.58592,0 -14.974299,89.42693 17.951519,0 11.52966,-68.32111 1.61015,68.32111 13.07904,0 24.51045,-68.72923 -10.98182,68.72923 19.17239,0 14.83357,-89.42693 z m 35.65494,57.0174 c -2.0168,-0.2052 -2.89498,-0.28499 -4.27988,-0.28499 -10.88038,0 -16.36147,3.71728 -16.36147,11.04014 0,4.53671 2.68983,7.42226 6.84679,7.42226 7.82458,0 13.44639,-7.42226 13.79456,-18.17741 z m 13.93391,32.40953 -15.89177,0 0.36918,-7.54356 c -4.85101,5.95806 -11.30988,8.80804 -20.08757,8.80804 -10.41251,0 -17.50192,-8.11355 -17.50192,-19.84818 0,-17.73235 12.36488,-28.04016 33.63631,-28.04016 2.17946,0 4.97072,0.20291 7.82275,0.56817 0.59261,-2.42089 0.73562,-3.43594 0.73562,-4.73827 0,-4.79845 -3.32356,-6.60831 -12.28858,-6.60831 -9.3703,-0.12266 -17.11264,2.21752 -20.29136,3.27406 0.20516,-1.22024 2.67018,-16.3484 2.67018,-16.3484 9.53616,-2.80529 15.84883,-3.86321 22.94006,-3.86321 16.46291,0 25.18349,7.35979 25.16384,21.31057 0.0196,3.74054 -0.59261,8.35568 -1.54938,14.43868 -1.67046,10.50937 -5.23664,33.08122 -5.72736,38.59057 z m 250.44541,-91.62347 c -25.40875,0 -43.17796,22.32607 -43.17796,54.29419 0,23.74741 12.862,38.59376 33.50061,38.59376 5.29558,0 9.87838,-0.69448 16.9285,-2.64478 l 3.36286,-20.35616 c -6.33734,3.11354 -11.55068,4.59553 -16.28426,4.59553 -11.14403,0 -17.86974,-8.21524 -17.86974,-21.77932 0,-19.70226 10.01089,-33.51031 24.33044,-33.51031 5.31843,0 10.2896,1.38395 17.13411,4.84132 l 3.13897,-19.39765 c -2.81,-1.09713 -12.69295,-4.63658 -21.06353,-4.63658 z m 55.25407,59.21394 c -1.99669,-0.2052 -2.89223,-0.28499 -4.29952,-0.28499 -10.86074,0 -16.36193,3.71728 -16.36193,11.04014 0,4.53671 2.6912,7.42226 6.8902,7.42226 7.80401,0 13.44685,-7.42226 13.77125,-18.17741 z m 13.93575,32.40953 -15.86848,0 0.36553,-7.54356 c -4.87065,5.95806 -11.34963,8.80804 -20.11316,8.80804 -10.39012,0 -17.52248,-8.11355 -17.52248,-19.84818 0,-17.73235 12.40966,-28.04016 33.66053,-28.04016 2.17946,0 4.97118,0.20291 7.82686,0.56817 0.58484,-2.42089 0.73106,-3.43594 0.73106,-4.73827 0,-4.79845 -3.32174,-6.60831 -12.26803,-6.60831 -9.38949,-0.12266 -17.11126,2.21752 -20.29135,3.27406 0.18276,-1.22024 2.65007,-16.3484 2.65007,-16.3484 9.55398,-2.80529 15.86847,-3.86321 22.91859,-3.86321 16.4853,0 25.2077,7.35979 25.18486,21.31057 0.0411,3.74054 -0.58942,8.35568 -1.54893,14.43868 -1.64944,10.50937 -5.23161,33.08122 -5.72507,38.59057 z m -225.40265,-17.2034 c -1.28391,0.45098 -2.97448,0.6913 -5.15394,0.6913 -4.56453,0 -6.5795,-1.62472 -6.5795,-5.38806 0.0411,-2.31601 3.19837,-19.51896 5.40067,-33.327 l 9.83727,0 2.60895,-17.4884 -9.80071,0 2.22058,-10.97584 -19.05176,0 c 0,0 -7.21049,42.80124 -8.29017,49.57188 -1.22269,7.7483 -2.77024,16.18607 -2.65053,19.39766 0,10.3525 5.3399,15.98634 15.13833,15.98634 4.44573,0 8.53507,-0.73552 13.79867,-2.35978 l 2.52214,-16.1081 z m 58.63978,15.5381 c -6.56122,1.99499 -12.88028,2.92978 -19.5603,2.92978 -21.35596,-0.0442 -32.47713,-11.16463 -32.47713,-32.45422 0,-24.85001 14.15962,-43.15008 33.37267,-43.15008 15.70856,0 25.756,10.22756 25.756,26.332 0,5.32742 -0.71278,10.51256 -2.3668,17.89606 l -37.9372,0 c -1.28392,10.50936 5.48292,14.90335 16.56754,14.90335 6.82166,0 12.95796,-1.38395 19.80247,-4.5545 l -3.15725,18.09761 z M 366.716,235.88805 c 0.12337,-1.50479 2.01497,-13.01689 -8.86405,-13.01689 -6.07232,0 -10.43124,4.65756 -12.18121,13.01689 l 21.04526,0 z M 239.29625,230.9455 c 0,9.21251 4.4407,15.53582 14.58729,20.31467 7.76381,3.65892 8.96503,4.71501 8.96503,8.03375 0,4.50981 -3.42317,6.54401 -11.02295,6.54401 -5.70406,0 -11.04259,-0.85499 -17.17706,-2.84451 0,0 -2.52351,16.02237 -2.64687,16.79711 4.38176,0.93525 8.25133,1.82581 19.96695,2.15504 20.23058,0 29.56342,-7.70908 29.56342,-24.30145 0,-10.02281 -3.89287,-15.83859 -13.51128,-20.25447 -8.02424,-3.6995 -8.96136,-4.51346 -8.96136,-7.90835 0,-3.94575 3.19836,-5.93891 9.41142,-5.93891 3.74803,0 8.90243,0.40812 13.75161,1.09895 l 2.73278,-16.8769 c -4.97255,-0.77337 -12.49009,-1.42317 -16.87185,-1.42317 -21.45328,0 -28.86892,11.16281 -28.78713,24.60423 z m 412.88316,49.73559 -18.14845,0 0.91382,-6.76882 c -5.2773,5.59326 -10.67341,8.0333 -17.6824,8.0333 -13.94031,0 -23.14704,-11.97858 -23.14704,-30.15599 0,-24.22165 14.27843,-44.59514 31.18865,-44.59514 7.42021,0 13.08132,3.01004 18.32207,9.90335 l 4.23556,-25.84363 18.91148,0 -14.59369,89.42693 z M 623.883,263.88763 c 8.92345,0 15.21966,-10.10854 15.21966,-24.50482 0,-9.25172 -3.5639,-14.25492 -10.17081,-14.25492 -8.69956,0 -14.87241,10.10672 -14.87241,24.40268 0,9.53535 3.30346,14.35706 9.82356,14.35706 z m -59.14695,-55.9221 c -2.40334,22.4916 -6.66174,45.28461 -9.98347,67.81724 l -0.87727,4.89832 19.15365,0 c 6.86735,-44.46882 8.53507,-53.15237 19.27245,-52.05479 1.70884,-9.13088 4.88893,-17.07845 7.29228,-21.10445 -8.04161,-1.67077 -12.52847,2.88601 -18.37234,11.48748 0.46605,-3.74237 1.30219,-7.34247 1.11943,-11.0438 l -17.60473,0 z m -167.57616,0 c -2.40792,22.4916 -6.68459,45.28461 -10.00632,67.81724 l -0.87727,4.89832 19.17193,0 c 6.86735,-44.46882 8.51679,-53.15237 19.25417,-52.05479 1.73168,-9.13088 4.93005,-17.07845 7.29684,-21.10445 -8.00962,-1.67077 -12.52846,2.88601 -18.38147,11.48748 0.47062,-3.74237 1.30219,-7.34247 1.14227,-11.0438 l -17.60015,0 z",
          id: "Rectangle-1"
        }))));
      });

      return _this;
    }

    _createClass(Mastercard, [{
      key: "render",
      value: function render() {
        var p = this.props;

        switch (p.type) {
          case "mono":
            return this.renderMono();

          default:
            return this.renderFlat();
        }
      }
    }]);

    return Mastercard;
  }(React.Component);

  _defineProperty(Mastercard$1, "propTypes", {
    type: PropTypes.string,
    height: PropTypes.number,
    width: PropTypes.number
  });

  _defineProperty(Mastercard$1, "defaultProps", {
    type: "flat",
    height: DEFAULT_HEIGHT,
    width: DEFAULT_WIDTH
  });

  var Amex$1 = /*#__PURE__*/function (_Component) {
    _inherits(Amex, _Component);

    var _super = _createSuper(Amex);

    function Amex(props, context) {
      var _this;

      _classCallCheck(this, Amex);

      _this = _super.call(this, props, context);

      _defineProperty(_assertThisInitialized(_this), "renderFlat", function () {
        var p = _this.props;
        var h = "".concat(p.height, "px");
        var w = "".concat(p.width, "px");
        return /*#__PURE__*/React__default['default'].createElement("svg", {
          width: w,
          height: h,
          viewBox: "0 0 752 471",
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg"
        }, /*#__PURE__*/React__default['default'].createElement("g", {
          id: "Page-1",
          stroke: "none",
          strokeWidth: "1",
          fill: "none",
          fillRule: "evenodd"
        }, /*#__PURE__*/React__default['default'].createElement("g", {
          id: "amex"
        }, /*#__PURE__*/React__default['default'].createElement("rect", {
          id: "Rectangle-1",
          fill: "#2557D6",
          x: "1",
          y: "0",
          width: "750",
          height: "471",
          rx: "40"
        }), /*#__PURE__*/React__default['default'].createElement("path", {
          d: "M1.002688,221.18508 L37.026849,221.18508 L45.149579,201.67506 L63.334596,201.67506 L71.436042,221.18508 L142.31637,221.18508 L142.31637,206.26909 L148.64322,221.24866 L185.43894,221.24866 L191.76579,206.04654 L191.76579,221.18508 L367.91701,221.18508 L367.83451,189.15941 L371.2427,189.15941 C373.62924,189.24161 374.3263,189.46144 374.3263,193.38516 L374.3263,221.18508 L465.43232,221.18508 L465.43232,213.72973 C472.78082,217.6508 484.21064,221.18508 499.25086,221.18508 L537.57908,221.18508 L545.78163,201.67506 L563.96664,201.67506 L571.98828,221.18508 L645.84844,221.18508 L645.84844,202.65269 L657.0335,221.18508 L716.22061,221.18508 L716.22061,98.67789 L657.64543,98.67789 L657.64543,113.14614 L649.44288,98.67789 L589.33787,98.67789 L589.33787,113.14614 L581.80579,98.67789 L500.61839,98.67789 C487.02818,98.67789 475.08221,100.5669 465.43232,105.83121 L465.43232,98.67789 L409.40596,98.67789 L409.40596,105.83121 C403.26536,100.40529 394.89786,98.67789 385.59383,98.67789 L180.90796,98.67789 L167.17407,130.3194 L153.07037,98.67789 L88.59937,98.67789 L88.59937,113.14614 L81.516924,98.67789 L26.533518,98.67789 L0.999997,156.92445 L0.999997,221.18508 L1.002597,221.18508 L1.002688,221.18508 Z M228.39922,203.51436 L206.78472,203.51436 L206.70492,134.72064 L176.13228,203.51436 L157.62,203.51436 L126.96754,134.6597 L126.96754,203.51436 L84.084427,203.51436 L75.982981,183.92222 L32.083524,183.92222 L23.8996,203.51436 L1.000047,203.51436 L38.756241,115.67692 L70.08183,115.67692 L105.94103,198.84086 L105.94103,115.67692 L140.35289,115.67692 L167.94569,175.26406 L193.29297,115.67692 L228.39657,115.67692 L228.39657,203.51436 L228.39957,203.51436 L228.39922,203.51436 Z M68.777214,165.69287 L54.346265,130.67606 L39.997794,165.69287 L68.777214,165.69287 L68.777214,165.69287 Z M314.41947,203.51436 L243.98611,203.51436 L243.98611,115.67692 L314.41947,115.67692 L314.41947,133.96821 L265.07116,133.96821 L265.07116,149.8009 L313.23551,149.8009 L313.23551,167.80606 L265.07116,167.80606 L265.07116,185.34759 L314.41947,185.34759 L314.41947,203.51436 L314.41947,203.51436 Z M413.67528,139.33321 C413.67528,153.33782 404.28877,160.57326 398.81863,162.74575 C403.43206,164.49434 407.37237,167.58351 409.24808,170.14281 C412.22525,174.51164 412.73875,178.41416 412.73875,186.25897 L412.73875,203.51436 L391.47278,203.51436 L391.39298,192.43732 C391.39298,187.1518 391.90115,179.55074 388.0646,175.32499 C384.98366,172.23581 380.28774,171.56552 372.69714,171.56552 L350.06363,171.56552 L350.06363,203.51436 L328.98125,203.51436 L328.98125,115.67692 L377.47552,115.67692 C388.25084,115.67692 396.18999,115.9604 403.00639,119.88413 C409.67644,123.80786 413.67529,129.53581 413.67529,139.33321 L413.67528,139.33321 Z M387.02277,152.37632 C384.1254,154.12756 380.69859,154.18584 376.59333,154.18584 L350.97998,154.18584 L350.97998,134.67583 L376.94186,134.67583 C380.61611,134.67583 384.44999,134.8401 386.94029,136.26016 C389.67536,137.53981 391.36749,140.26337 391.36749,144.02548 C391.36749,147.86443 389.75784,150.95361 387.02277,152.37632 L387.02277,152.37632 Z M447.48908,203.51436 L425.97569,203.51436 L425.97569,115.67692 L447.48908,115.67692 L447.48908,203.51436 L447.48908,203.51436 Z M697.22856,203.51436 L667.35032,203.51436 L627.38585,137.58727 L627.38585,203.51436 L584.44687,203.51436 L576.24166,183.92222 L532.44331,183.92222 L524.48287,203.51436 L499.81137,203.51436 C489.56284,203.51436 476.58722,201.25709 469.23872,193.79909 C461.82903,186.3411 457.97386,176.23903 457.97386,160.26593 C457.97386,147.23895 460.27791,135.33 469.33983,125.91941 C476.15621,118.90916 486.83044,115.67692 501.35982,115.67692 L521.77174,115.67692 L521.77174,134.49809 L501.78818,134.49809 C494.0938,134.49809 489.74909,135.63733 485.564,139.70147 C481.96957,143.4 479.50322,150.39171 479.50322,159.59829 C479.50322,169.00887 481.38158,175.79393 485.30061,180.22633 C488.5465,183.70232 494.445,184.75677 499.99495,184.75677 L509.46393,184.75677 L539.17987,115.67957 L570.77152,115.67957 L606.46843,198.76138 L606.46843,115.67957 L638.5709,115.67957 L675.6327,176.85368 L675.6327,115.67957 L697.22856,115.67957 L697.22856,203.51436 L697.22856,203.51436 Z M569.07051,165.69287 L554.47993,130.67606 L539.96916,165.69287 L569.07051,165.69287 L569.07051,165.69287 Z",
          id: "Path",
          fill: "#FFFFFF"
        }), /*#__PURE__*/React__default['default'].createElement("path", {
          d: "M750.95644,343.76716 C745.83485,351.22516 735.85504,355.00582 722.34464,355.00582 L681.62723,355.00582 L681.62723,336.1661 L722.17969,336.1661 C726.20248,336.1661 729.01736,335.63887 730.71215,333.99096 C732.18079,332.63183 733.2051,330.65804 733.2051,328.26036 C733.2051,325.70107 732.18079,323.66899 730.62967,322.45028 C729.09984,321.10969 726.87294,320.50033 723.20135,320.50033 C703.40402,319.83005 678.70592,321.10969 678.70592,293.30714 C678.70592,280.56363 686.83131,267.14983 708.95664,267.14983 L750.95379,267.14983 L750.95379,249.66925 L711.93382,249.66925 C700.15812,249.66925 691.60438,252.47759 685.54626,256.84375 L685.54626,249.66925 L627.83044,249.66925 C618.60091,249.66925 607.76706,251.94771 602.64279,256.84375 L602.64279,249.66925 L499.57751,249.66925 L499.57751,256.84375 C491.37496,250.95154 477.53466,249.66925 471.14663,249.66925 L403.16366,249.66925 L403.16366,256.84375 C396.67452,250.58593 382.24357,249.66925 373.44772,249.66925 L297.3633,249.66925 L279.95252,268.43213 L263.64586,249.66925 L149.99149,249.66925 L149.99149,372.26121 L261.50676,372.26121 L279.447,353.20159 L296.34697,372.26121 L365.08554,372.32211 L365.08554,343.48364 L371.84339,343.48364 C380.96384,343.62405 391.72054,343.25845 401.21079,339.17311 L401.21079,372.25852 L457.90762,372.25852 L457.90762,340.30704 L460.64268,340.30704 C464.13336,340.30704 464.47657,340.45011 464.47657,343.92344 L464.47657,372.25587 L636.71144,372.25587 C647.64639,372.25587 659.07621,369.46873 665.40571,364.41107 L665.40571,372.25587 L720.03792,372.25587 C731.40656,372.25587 742.50913,370.66889 750.95644,366.60475 L750.95644,343.76712 L750.95644,343.76716 Z M409.45301,296.61266 C409.45301,321.01872 391.16689,326.05784 372.7371,326.05784 L346.42935,326.05784 L346.42935,355.52685 L305.44855,355.52685 L279.48667,326.44199 L252.5058,355.52685 L168.9904,355.52685 L168.9904,267.66822 L253.79086,267.66822 L279.73144,296.46694 L306.55002,267.66822 L373.92106,267.66822 C390.6534,267.66822 409.45301,272.28078 409.45301,296.61266 L409.45301,296.61266 Z M241.82781,337.04655 L189.9892,337.04655 L189.9892,319.56596 L236.27785,319.56596 L236.27785,301.64028 L189.9892,301.64028 L189.9892,285.66718 L242.84947,285.66718 L265.91132,311.27077 L241.82781,337.04655 L241.82781,337.04655 Z M325.3545,347.10668 L292.9833,311.3189 L325.3545,276.6677 L325.3545,347.10668 L325.3545,347.10668 Z M373.2272,308.04117 L345.98027,308.04117 L345.98027,285.66718 L373.47197,285.66718 C381.08388,285.66718 386.36777,288.75636 386.36777,296.43956 C386.36777,304.03796 381.32865,308.04117 373.2272,308.04117 L373.2272,308.04117 Z M515.97053,267.66822 L586.34004,267.66822 L586.34004,285.83764 L536.96778,285.83764 L536.96778,301.81074 L585.1348,301.81074 L585.1348,319.73642 L536.96778,319.73642 L536.96778,337.21701 L586.34004,337.29641 L586.34004,355.52678 L515.97053,355.52678 L515.97053,267.66815 L515.97053,267.66822 Z M488.91724,314.6973 C493.61049,316.42205 497.44703,319.51387 499.24559,322.07317 C502.22276,326.36251 502.65378,330.36571 502.73891,338.10985 L502.73891,355.52685 L481.5714,355.52685 L481.5714,344.53458 C481.5714,339.24908 482.08223,331.42282 478.1632,327.33748 C475.08226,324.19002 470.38635,323.4376 462.69463,323.4376 L440.16223,323.4376 L440.16223,355.52685 L418.97609,355.52685 L418.97609,267.66822 L467.65393,267.66822 C478.32816,267.66822 486.10236,268.13716 493.02251,271.81449 C499.6766,275.8177 503.86168,281.30191 503.86168,291.3245 C503.85868,305.34765 494.46719,312.50362 488.91724,314.6973 L488.91724,314.6973 Z M476.99899,303.59022 C474.17879,305.25668 470.69077,305.39975 466.58817,305.39975 L440.97483,305.39975 L440.97483,285.66718 L466.9367,285.66718 C470.69077,285.66718 474.4475,285.74658 476.99899,287.25416 C479.7314,288.67687 481.36499,291.39779 481.36499,295.15725 C481.36499,298.91672 479.7314,301.94496 476.99899,303.59022 L476.99899,303.59022 Z M667.33539,309.1866 C671.44067,313.41766 673.64095,318.7588 673.64095,327.80112 C673.64095,346.70178 661.78278,355.5242 640.51948,355.5242 L599.45353,355.5242 L599.45353,336.68449 L640.35453,336.68449 C644.35337,336.68449 647.18954,336.15726 648.9668,334.50934 C650.41681,333.15021 651.45709,331.17643 651.45709,328.77875 C651.45709,326.21944 650.33167,324.18738 648.88433,322.96866 C647.27201,321.62807 645.04778,321.01872 641.37619,321.01872 C621.65868,320.34843 596.9659,321.62807 596.9659,293.82551 C596.9659,281.08201 605.00615,267.66822 627.11019,267.66822 L669.37872,267.66822 L669.37872,286.36752 L630.70196,286.36752 C626.86809,286.36752 624.37512,286.51059 622.25464,287.9545 C619.94527,289.37721 619.08856,291.48876 619.08856,294.2759 C619.08856,297.59028 621.04941,299.8449 623.702,300.81987 C625.92624,301.59084 628.31543,301.81603 631.9072,301.81603 L643.25722,302.12071 C654.703,302.39889 662.55967,304.37003 667.33539,309.1866 L667.33539,309.1866 Z M751,285.66718 L712.57335,285.66718 C708.7368,285.66718 706.18797,285.81025 704.04088,287.25416 C701.81665,288.67687 700.95995,290.78843 700.95995,293.57558 C700.95995,296.88994 702.83831,299.14456 705.57071,300.11953 C707.79495,300.8905 710.18415,301.1157 713.6961,301.1157 L725.12327,301.42038 C736.65419,301.70387 744.35123,303.67765 749.04448,308.49157 C749.89852,309.16186 750.41202,309.91428 751,310.6667 L751,285.66718 L751,285.66718 Z",
          id: "path13",
          fill: "#FFFFFF"
        }))));
      });

      _defineProperty(_assertThisInitialized(_this), "renderMono", function () {
        var p = _this.props;
        var h = "".concat(p.height, "px");
        var w = "".concat(p.width, "px");
        return /*#__PURE__*/React__default['default'].createElement("svg", {
          width: w,
          height: h,
          viewBox: "0 0 750 472",
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg"
        }, /*#__PURE__*/React__default['default'].createElement("g", {
          id: "Page-1",
          stroke: "none",
          strokeWidth: "1",
          fill: "none",
          fillRule: "evenodd"
        }, /*#__PURE__*/React__default['default'].createElement("g", {
          id: "Amex",
          fill: "#393939"
        }, /*#__PURE__*/React__default['default'].createElement("path", {
          d: "M0,41.0047706 C0,18.9107459 17.9143492,1 39.9919369,1 L710.008063,1 C732.095,1 750,18.9064659 750,41.0047706 L750,431.995229 C750,454.089254 732.085651,472 710.008063,472 L39.9919369,472 C17.905,472 0,454.093534 0,431.995229 L0,41.0047706 Z M0.00266072556,221.9061 L36.0288848,221.9061 L44.15208,202.394972 L62.3381392,202.394972 L70.4400485,221.9061 L141.324438,221.9061 L141.324438,206.989254 L147.651644,221.969689 L184.449478,221.969689 L190.776684,206.766694 L190.776684,221.9061 L366.938002,221.9061 L366.855519,189.878599 L370.263908,189.878599 C372.650579,189.960734 373.347689,190.180645 373.347689,194.104597 L373.347689,221.9061 L464.458915,221.9061 L464.458915,214.450327 C471.807839,218.371629 483.238316,221.9061 498.279397,221.9061 L536.60981,221.9061 L544.812827,202.394972 L562.998886,202.394972 L571.020974,221.9061 L644.885376,221.9061 L644.885376,203.372648 L656.071066,221.9061 L715.261567,221.9061 L715.261567,99.3918994 L656.683033,99.3918994 L656.683033,113.860975 L648.480016,99.3918994 L588.371565,99.3918994 L588.371565,113.860975 L580.839051,99.3918994 L499.64701,99.3918994 C486.056024,99.3918994 474.109366,101.281013 464.458915,106.545627 L464.458915,99.3918994 L408.429356,99.3918994 L408.429356,106.545627 C402.288401,101.119392 393.920419,99.3918994 384.615862,99.3918994 L179.918263,99.3918994 L166.183597,131.035219 L152.079091,99.3918994 L87.6043891,99.3918994 L87.6043891,113.860975 L80.5215377,99.3918994 L25.5349832,99.3918994 L0,157.641785 L0,221.9061 L0.00266072556,221.9061 L0.00266072556,221.9061 Z M227.659661,204.65237 L206.043927,204.65237 L205.964105,135.854711 L175.389708,204.65237 L156.876379,204.65237 L126.22216,135.793772 L126.22216,204.65237 L83.3365853,204.65237 L75.234676,185.059106 L31.3327042,185.059106 L23.1483124,204.65237 L0.247447477,204.65237 L38.0058039,116.8099 L69.3331867,116.8099 L105.194446,199.978602 L105.194446,116.8099 L139.60827,116.8099 L167.202655,176.400447 L192.551387,116.8099 L227.657001,116.8099 L227.657001,204.65237 L227.659661,204.65237 L227.659661,204.65237 Z M67.6223402,166.748214 L53.1905647,131.729395 L38.8412718,166.748214 L67.6223402,166.748214 L67.6223402,166.748214 Z M313.811294,204.65237 L243.373906,204.65237 L243.373906,116.8099 L313.811294,116.8099 L313.811294,135.102245 L264.460157,135.102245 L264.460157,150.935828 L312.627271,150.935828 L312.627271,168.942024 L264.460157,168.942024 L264.460157,186.484553 L313.811294,186.484553 L313.811294,204.65237 L313.811294,204.65237 L313.811294,204.65237 Z M413.125537,140.467541 C413.125537,154.472949 403.738497,161.708811 398.268045,163.881425 C402.881743,165.630113 406.822278,168.719464 408.698089,171.278908 C411.675441,175.647981 412.188961,179.550736 412.188961,187.395991 L412.188961,204.65237 L390.921782,204.65237 L390.84196,193.574691 C390.84196,188.288882 391.350159,180.687384 387.513392,176.461386 C384.432272,173.372036 379.736092,172.701705 372.145041,172.701705 L349.510249,172.701705 L349.510249,204.65237 L328.42666,204.65237 L328.42666,116.8099 L376.923705,116.8099 C387.699643,116.8099 395.639248,117.0934 402.456027,121.017352 C409.126466,124.941303 413.125537,130.669584 413.125537,140.467541 L413.125537,140.467541 Z M385.552438,152.803746 C382.654907,154.555084 379.227893,154.613374 375.122393,154.613374 L349.507588,154.613374 L349.507588,135.102245 L375.470948,135.102245 C379.14541,135.102245 382.979516,135.266516 385.469955,136.686663 C388.205181,137.966386 389.897402,140.690101 389.897402,144.452432 C389.897402,148.291599 388.287663,151.380949 385.552438,152.803746 L385.552438,152.803746 Z M446.868858,204.65237 L425.354231,204.65237 L425.354231,116.8099 L446.868858,116.8099 L446.868858,204.65237 L446.868858,204.65237 Z M696.466202,204.65237 L666.586254,204.65237 L626.619495,138.721501 L626.619495,204.65237 L583.678045,204.65237 L575.472367,185.059106 L531.671503,185.059106 L523.710612,204.65237 L499.037704,204.65237 C488.788589,204.65237 475.812231,202.394972 468.463307,194.936549 C461.053186,187.478126 457.197795,177.375474 457.197795,161.401466 C457.197795,148.373734 459.501983,136.464103 468.564414,127.052978 C475.381193,120.042325 486.056024,116.8099 500.586247,116.8099 L520.999333,116.8099 L520.999333,135.632151 L501.014623,135.632151 C493.319805,135.632151 488.97484,136.771448 484.789519,140.835825 C481.194879,144.534567 478.728386,151.526673 478.728386,160.733785 C478.728386,170.14491 480.606858,176.930353 484.526107,181.363014 C487.772192,184.839195 493.671021,185.893708 499.221294,185.893708 L508.690817,185.893708 L538.40846,116.81255 L570.001916,116.81255 L605.700871,199.899116 L605.700871,116.81255 L637.805185,116.81255 L674.869092,177.990164 L674.869092,116.81255 L696.466202,116.81255 L696.466202,204.65237 L696.466202,204.65237 Z M568.285748,166.748214 L553.694329,131.729395 L539.182732,166.748214 L568.285748,166.748214 Z M750,344.518333 C744.878103,351.976756 734.897722,355.757633 721.386557,355.757633 L680.666813,355.757633 L680.666813,336.916836 L721.221592,336.916836 C725.244609,336.916836 728.059657,336.38958 729.754539,334.741573 C731.22326,333.382365 732.247639,331.408466 732.247639,329.010643 C732.247639,326.451198 731.22326,324.41901 729.672057,323.200226 C728.14214,321.859565 725.915112,321.250173 722.243311,321.250173 C702.444852,320.579843 677.745337,321.859565 677.745337,294.055412 C677.745337,281.31118 685.871193,267.896617 707.997786,267.896617 L749.997339,267.896617 L749.997339,250.415027 L710.975138,250.415027 C699.198767,250.415027 690.644534,253.223528 684.586062,257.589951 L684.586062,250.415027 L626.866942,250.415027 C617.636885,250.415027 606.802411,252.693622 601.677854,257.589951 L601.677854,250.415027 L498.606667,250.415027 L498.606667,257.589951 C490.40365,251.697399 476.562555,250.415027 470.174153,250.415027 L402.187294,250.415027 L402.187294,257.589951 C395.697784,251.331764 381.266009,250.415027 372.46965,250.415027 L296.380881,250.415027 L278.969093,269.178989 L262.661506,250.415027 L149.000631,250.415027 L149.000631,373.014013 L260.522283,373.014013 L278.463555,353.953304 L295.364484,373.014013 L364.10699,373.074952 L364.10699,344.234834 L370.865232,344.234834 C379.9862,344.375259 390.743513,344.009624 400.234321,339.924051 L400.234321,373.011363 L456.934383,373.011363 L456.934383,341.058049 L459.669609,341.058049 C463.160481,341.058049 463.503714,341.201123 463.503714,344.674655 L463.503714,373.008714 L635.748444,373.008714 C646.684026,373.008714 658.114503,370.22141 664.44437,365.16346 L664.44437,373.008714 L719.079708,373.008714 C730.448989,373.008714 741.552196,371.421646 750,367.357269 L750,344.518333 Z M408.51716,296.840067 C408.51716,321.247524 390.229993,326.286927 371.799147,326.286927 L345.489893,326.286927 L345.489893,355.757633 L304.506737,355.757633 L278.543377,326.671109 L251.560959,355.757633 L168.040784,355.757633 L168.040784,267.893967 L252.846089,267.893967 L278.788164,296.694343 L305.608277,267.893967 L372.98317,267.893967 C389.716473,267.893967 408.51716,272.506796 408.51716,296.840067 Z M240.886128,337.446742 L189.044551,337.446742 L189.044551,319.965152 L235.335855,319.965152 L235.335855,302.038442 L189.044551,302.038442 L189.044551,286.064434 L241.907847,286.064434 L264.971016,311.669478 L240.886128,337.446742 Z M324.488786,347.766655 L292.115738,311.976823 L324.488786,277.323639 L324.488786,347.766655 Z M372.738383,308.442352 L345.489893,308.442352 L345.489893,286.067084 L372.98317,286.067084 C380.595506,286.067084 385.879707,289.156434 385.879707,296.840067 C385.879707,304.438915 380.840293,308.442352 372.738383,308.442352 Z M514.999397,267.893967 L585.372927,267.893967 L585.372927,286.064434 L535.997843,286.064434 L535.997843,302.038442 L584.167619,302.038442 L584.167619,319.965152 L535.997843,319.965152 L535.997843,337.446742 L585.372927,337.526227 L585.372927,355.757633 L514.999397,355.757633 L514.999397,267.893967 L514.999397,267.893967 Z M488.362873,314.925749 C493.056393,316.650592 496.893159,319.742592 498.69181,322.302036 C501.669162,326.591623 502.100199,330.595061 502.185343,338.339633 L502.185343,355.757633 L481.01661,355.757633 L481.01661,344.764739 C481.01661,339.47893 481.527469,331.652223 477.608221,327.56665 C474.5271,324.41901 469.83092,323.666543 462.138762,323.666543 L439.605077,323.666543 L439.605077,355.757633 L418.41772,355.757633 L418.41772,267.893967 L467.098355,267.893967 C477.773186,267.893967 485.547826,268.362934 492.468373,272.040479 C499.122847,276.043917 503.308169,281.528441 503.308169,291.551608 C503.305508,305.575562 493.913147,312.731939 488.362873,314.925749 Z M475.628641,303.991144 C472.808272,305.657698 469.32006,305.800772 465.217222,305.800772 L439.602417,305.800772 L439.602417,286.067084 L465.565777,286.067084 C469.32006,286.067084 473.077005,286.14657 475.628641,287.654151 C478.361206,289.076948 479.994891,291.798014 479.994891,295.557695 C479.994891,299.317376 478.361206,302.345787 475.628641,303.991144 Z M665.891804,309.417379 C669.997304,313.648676 672.197724,318.990126 672.197724,328.032967 C672.197724,346.934703 660.33887,355.757633 639.074351,355.757633 L598.006052,355.757633 L598.006052,336.916836 L638.909386,336.916836 C642.908457,336.916836 645.74479,336.38958 647.522155,334.741573 C648.97225,333.382365 650.012594,331.408466 650.012594,329.010643 C650.012594,326.451198 648.887107,324.41901 647.439672,323.200226 C645.827273,321.859565 643.602906,321.250173 639.931105,321.250173 C620.212468,320.579843 595.518274,321.859565 595.518274,294.055412 C595.518274,281.31118 603.558987,267.896617 625.664294,267.896617 L667.935241,267.896617 L667.935241,286.596989 L629.256274,286.596989 C625.422168,286.596989 622.929069,286.740064 620.80847,288.184057 C618.498961,289.606854 617.642207,291.718528 617.642207,294.505832 C617.642207,297.820392 619.603162,300.075141 622.255905,301.050168 C624.480272,301.82118 626.869603,302.04639 630.461583,302.04639 L641.812238,302.351086 C653.258679,302.629287 661.115802,304.600536 665.891804,309.417379 Z M750,286.59169 L711.571141,286.59169 C707.734374,286.59169 705.185399,286.734765 703.038194,288.178758 C700.813827,289.601555 699.957074,291.713229 699.957074,294.500533 C699.957074,297.815093 701.835546,300.069842 704.568111,301.044869 C706.792478,301.815881 709.181809,302.041091 712.693967,302.041091 L724.121783,302.345787 C735.653368,302.629287 743.350847,304.603185 748.044367,309.417379 C748.89846,310.08771 749.41198,310.840176 750,311.592642 L750,286.59169 Z",
          id: "American"
        }))));
      });

      return _this;
    }

    _createClass(Amex, [{
      key: "render",
      value: function render() {
        var p = this.props;

        switch (p.type) {
          case "mono":
            return this.renderMono();

          default:
            return this.renderFlat();
        }
      }
    }]);

    return Amex;
  }(React.Component);

  _defineProperty(Amex$1, "propTypes", {
    type: PropTypes.string,
    height: PropTypes.number,
    width: PropTypes.number
  });

  _defineProperty(Amex$1, "defaultProps", {
    type: "flat",
    height: DEFAULT_HEIGHT,
    width: DEFAULT_WIDTH
  });

  var Cup$1 = /*#__PURE__*/function (_Component) {
    _inherits(Cup, _Component);

    var _super = _createSuper(Cup);

    function Cup(props, context) {
      var _this;

      _classCallCheck(this, Cup);

      _this = _super.call(this, props, context);

      _defineProperty(_assertThisInitialized(_this), "renderFlat", function () {
        var p = _this.props;
        var h = "".concat(p.height, "px");
        var w = "".concat(p.width, "px");
        return /*#__PURE__*/React__default['default'].createElement("svg", {
          width: w,
          height: h,
          viewBox: "0 0 750 471",
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg"
        }, /*#__PURE__*/React__default['default'].createElement("g", {
          id: "Page-1",
          stroke: "none",
          "stroke-width": "1",
          fill: "none",
          "fill-rule": "evenodd"
        }, /*#__PURE__*/React__default['default'].createElement("g", {
          id: "unionpay",
          "fill-rule": "nonzero"
        }, /*#__PURE__*/React__default['default'].createElement("rect", {
          id: "Rectangle-path",
          fill: "#FFFFFF",
          x: "0",
          y: "0",
          width: "750",
          height: "471",
          rx: "40"
        }), /*#__PURE__*/React__default['default'].createElement("path", {
          d: "M201.809581,55 L344.203266,55 C364.072152,55 376.490206,71.4063861 371.833436,91.4702467 L305.500331,378.94775 C300.843561,399.011611 280.871191,415.417997 261.002305,415.417997 L118.60862,415.417997 C98.7397339,415.417997 86.32168,399.011611 90.9784502,378.94775 L157.311555,91.4702467 C161.968325,71.3018868 181.837211,55 201.706097,55 L201.809581,55 Z",
          id: "Shape",
          fill: "#D10429"
        }), /*#__PURE__*/React__default['default'].createElement("path", {
          d: "M331.750074,55 L495.564902,55 C515.433788,55 506.430699,71.4063861 501.773929,91.4702467 L435.440824,378.94775 C430.784054,399.011611 432.232827,415.417997 412.363941,415.417997 L248.549113,415.417997 C228.576743,415.417997 216.262173,399.011611 221.022427,378.94775 L287.355531,91.4702467 C292.012302,71.3018868 311.881188,55 331.853558,55 L331.750074,55 Z",
          id: "Shape",
          fill: "#022E64"
        }), /*#__PURE__*/React__default['default'].createElement("path", {
          d: "M489.814981,55 L632.208666,55 C652.077552,55 664.495606,71.4063861 659.838836,91.4702467 L593.505731,378.94775 C588.848961,399.011611 568.876591,415.417997 549.007705,415.417997 L406.61402,415.417997 C386.64165,415.417997 374.32708,399.011611 378.98385,378.94775 L445.316955,91.4702467 C449.973725,71.3018868 469.842611,55 489.711498,55 L489.814981,55 Z",
          id: "Shape",
          fill: "#076F74"
        }), /*#__PURE__*/React__default['default'].createElement("path", {
          d: "M465.904754,326.014514 L479.357645,326.014514 L483.186545,312.952104 L469.837137,312.952104 L465.904754,326.014514 Z M476.667067,290.066763 L472.010297,305.532656 C472.010297,305.532656 477.081002,302.920174 479.875064,302.08418 C482.669126,301.457184 486.808478,300.934688 486.808478,300.934688 L490.016475,290.171263 L476.563583,290.171263 L476.667067,290.066763 Z M483.393513,267.912917 L478.94371,282.751814 C478.94371,282.751814 483.910932,280.45283 486.704994,279.721335 C489.499056,278.98984 493.638407,278.780842 493.638407,278.780842 L496.846405,268.017417 L483.496997,268.017417 L483.393513,267.912917 Z M513.093359,267.912917 L495.708083,325.910015 L500.364853,325.910015 L496.742921,337.927431 L492.086151,337.927431 L490.947829,341.584906 L474.390424,341.584906 L475.528745,337.927431 L442,337.927431 L445.311481,326.850508 L448.726446,326.850508 L466.318689,267.912917 L469.837137,256 L486.704994,256 L484.94577,261.956459 C484.94577,261.956459 489.395572,258.716981 493.741891,257.567489 C497.984726,256.417997 522.406899,256 522.406899,256 L518.784967,267.808418 L512.989875,267.808418 L513.093359,267.912917 Z",
          id: "Shape",
          fill: "#FEFEFE"
        }), /*#__PURE__*/React__default['default'].createElement("path", {
          d: "M520,256 L538.006178,256 L538.213146,262.792453 C538.109662,263.941945 539.041016,264.464441 541.214175,264.464441 L544.836108,264.464441 L541.524627,275.645864 L531.797151,275.645864 C523.414965,276.272859 520.206968,272.615385 520.413935,268.539913 L520.103484,256.104499 L520,256 Z M522.216235,309.20029 L505.037927,309.20029 L507.935473,299.272859 L527.597391,299.272859 L530.391454,290.181422 L511.039986,290.181422 L514.351467,279 L568.163034,279 L564.851553,290.181422 L546.741891,290.181422 L543.947829,299.272859 L562.057491,299.272859 L559.056461,309.20029 L539.498026,309.20029 L535.979578,313.380261 L543.947829,313.380261 L545.914021,325.920174 C546.120989,327.174165 546.120989,328.01016 546.534924,328.532656 C546.948859,328.950653 549.328986,329.159652 550.674275,329.159652 L553.054402,329.159652 L549.328986,341.386067 L543.223443,341.386067 C542.292089,341.386067 540.843316,341.281567 538.877124,341.281567 C537.014416,341.072569 535.77261,340.027576 534.530805,339.400581 C533.392483,338.878084 531.736743,337.519594 531.322808,335.11611 L529.4601,322.576197 L520.560494,334.907112 C517.766432,338.773585 513.937532,341.804064 507.418054,341.804064 L495,341.804064 L498.311481,330.936139 L503.071735,330.936139 C504.417024,330.936139 505.65883,330.413643 506.590184,329.891147 C507.521538,329.473149 508.349408,329.055152 509.177278,327.696662 L522.216235,309.20029 Z M334.31354,282 L379.742921,282 L376.43144,292.972424 L358.321778,292.972424 L355.527716,302.272859 L374.154797,302.272859 L370.739832,313.558781 L352.216235,313.558781 L347.662948,328.711176 C347.145529,330.383164 352.112751,330.592163 353.871975,330.592163 L363.185516,329.338171 L359.4601,341.878084 L338.556375,341.878084 C336.900635,341.878084 335.65883,341.669086 333.796122,341.251089 C332.036897,340.833091 331.209027,339.997097 330.48464,338.847605 C329.760254,337.593614 328.518449,336.65312 329.346319,333.936139 L335.348378,313.872279 L325,313.872279 L328.414965,302.377358 L338.763343,302.377358 L341.557405,293.076923 L331.209027,293.076923 L334.520508,282.104499 L334.31354,282 Z M365.700875,262.165457 L384.327956,262.165457 L380.912991,273.555878 L355.455981,273.555878 L352.661919,275.959361 C351.420113,277.108853 351.109662,276.690856 349.557405,277.526851 C348.108632,278.258345 345.107603,279.721335 341.175219,279.721335 L333,279.721335 L336.311481,268.748911 L338.795092,268.748911 C340.864767,268.748911 342.31354,268.539913 343.037927,268.121916 C343.865797,267.599419 344.797151,266.449927 345.728505,264.56894 L350.385275,256 L368.908872,256 L365.700875,262.269956 L365.700875,262.165457 Z M400.808726,280.975327 C400.808726,280.975327 405.879431,276.272859 414.572069,274.809869 C416.538261,274.391872 428.956314,274.600871 428.956314,274.600871 L430.819023,268.330914 L404.637626,268.330914 L400.808726,281.079826 L400.808726,280.975327 Z M425.437866,285.782293 L399.463436,285.782293 L397.91118,291.111756 L420.470644,291.111756 C423.161223,290.798258 423.678642,291.216255 423.885609,291.007257 L425.54135,285.782293 L425.437866,285.782293 Z M391.702153,256.104499 L407.535171,256.104499 L405.258528,264.150943 C405.258528,264.150943 410.22575,260.075472 413.744198,258.612482 C417.262647,257.358491 425.127414,256.104499 425.127414,256.104499 L450.791393,256 L441.995271,285.468795 C440.546498,290.484761 438.787274,293.724238 437.752436,295.291727 C436.821082,296.754717 435.68276,298.113208 433.406117,299.367199 C431.232958,300.516691 429.266766,301.248186 427.404058,301.352685 C425.748317,301.457184 423.057739,301.561684 419.53929,301.561684 L394.806666,301.561684 L387.873253,324.865022 C387.25235,327.164006 386.941899,328.313498 387.355834,328.940493 C387.666285,329.46299 388.597639,330.089985 389.735961,330.089985 L400.601758,329.044993 L396.876342,341.793904 L384.665256,341.793904 C380.732872,341.793904 377.93881,341.689405 375.972618,341.584906 C374.10991,341.375907 372.143718,341.584906 370.798429,340.539913 C369.660107,339.49492 367.900883,338.13643 368.004367,336.777939 C368.10785,335.523948 368.625269,333.433962 369.45314,330.507983 L391.702153,256.104499 Z",
          id: "Shape",
          fill: "#FEFEFE"
        }), /*#__PURE__*/React__default['default'].createElement("path", {
          d: "M437.840227,303 L436.391454,310.105951 C435.770551,312.300435 435.253132,313.972424 433.597391,315.435414 C431.838167,316.898403 429.871975,318.465893 425.111721,318.465893 L416.3156,318.88389 L416.212116,326.825835 C416.108632,329.020319 416.729535,328.811321 417.039986,329.229318 C417.453921,329.647315 417.764373,329.751814 418.178308,329.960813 L420.97237,329.751814 L429.354556,329.333817 L425.836108,341.037736 L416.212116,341.037736 C409.48567,341.037736 404.414965,340.828737 402.862708,339.574746 C401.206968,338.529753 401,337.275762 401,334.976778 L401.620903,303.835994 L417.039986,303.835994 L416.833019,310.21045 L420.558435,310.21045 C421.80024,310.21045 422.731594,310.105951 423.249013,309.792453 C423.766432,309.478955 424.076883,308.956459 424.283851,308.224964 L425.836108,303.208999 L437.94371,303.208999 L437.840227,303 Z M218.470396,147 C217.952978,149.507983 208.018534,195.592163 208.018534,195.592163 C205.845375,204.892598 204.293118,211.580552 199.118929,215.865022 C196.117899,218.373004 192.599451,219.522496 188.563583,219.522496 C182.044105,219.522496 178.318689,216.283019 177.697786,210.117562 L177.594302,208.027576 C177.594302,208.027576 179.560494,195.592163 179.560494,195.487663 C179.560494,195.487663 189.908872,153.478955 191.771581,147.940493 C191.875064,147.626996 191.875064,147.417997 191.875064,147.313498 C171.695727,147.522496 168.073794,147.313498 167.866827,147 C167.763343,147.417997 167.245924,150.030479 167.245924,150.030479 L156.690578,197.36865 L155.759224,201.339623 L154,214.506531 C154,218.373004 154.724386,221.612482 156.276643,224.224964 C161.140381,232.793904 174.903724,234.047896 182.665008,234.047896 C192.702935,234.047896 202.119959,231.853411 208.43247,227.986938 C219.505234,221.403483 222.40278,211.058055 224.886391,201.966618 L226.128196,197.264151 C226.128196,197.264151 236.787026,153.687954 238.649734,148.044993 C238.753218,147.731495 238.753218,147.522496 238.856702,147.417997 C224.162004,147.522496 219.919169,147.417997 218.470396,147.104499 L218.470396,147 Z M277.499056,233.622642 C270.358675,233.518142 267.771581,233.518142 259.389394,233.936139 L259.078943,233.309144 C259.803329,230.069666 260.6312,226.934688 261.252102,223.69521 L262.28694,219.306241 C263.839197,212.513788 265.28797,204.467344 265.494937,202.063861 C265.701905,200.600871 266.11584,196.943396 261.976489,196.943396 C260.217264,196.943396 258.45804,197.77939 256.595332,198.615385 C255.560494,202.272859 253.594302,212.513788 252.559465,217.111756 C250.489789,226.934688 250.386305,228.08418 249.454951,232.891147 L248.834048,233.518142 C241.4867,233.413643 238.899605,233.413643 230.413935,233.83164 L230,233.100145 C231.448773,227.248186 232.794062,221.396226 234.139351,215.544267 C237.6578,199.764877 238.589154,193.703919 239.520508,185.657475 L240.244894,185.239478 C248.523597,184.089985 250.489789,183.776488 259.492878,182 L260.217264,182.835994 L258.871975,187.851959 C260.424232,186.911466 261.873005,185.970972 263.425262,185.239478 C267.668097,183.149492 272.324867,182.522496 274.911962,182.522496 C278.844345,182.522496 283.190664,183.671988 284.949888,188.269956 C286.605629,192.345428 285.570791,197.361393 283.294148,207.288824 L282.155826,212.30479 C279.879183,223.381713 279.465248,225.367199 278.223443,232.891147 L277.395572,233.518142 L277.499056,233.622642 Z M306.558435,233.650218 C302.212116,233.650218 299.418054,233.545718 296.727476,233.650218 C294.036897,233.650218 291.449803,233.859216 287.413935,233.963716 L287.206968,233.650218 L287,233.232221 C288.138322,229.05225 288.655741,227.58926 289.276643,226.12627 C289.794062,224.66328 290.311481,223.20029 291.346319,218.91582 C292.588124,213.377358 293.415995,209.510885 293.933413,206.062409 C294.554316,202.822932 294.864767,200.001451 295.278703,196.761974 L295.589154,196.552975 L295.899605,196.239478 C300.245924,195.612482 302.936502,195.194485 305.730565,194.776488 C308.524627,194.358491 311.422173,193.835994 315.871975,193 L316.078943,193.417997 L316.182427,193.835994 C315.354556,197.28447 314.526686,200.732946 313.698816,204.181422 C312.870946,207.629898 312.043075,211.078374 311.318689,214.526851 C309.766432,221.8418 309.042046,224.558781 308.731594,226.544267 C308.317659,228.425254 308.214175,229.365747 307.593273,233.127721 L307.179338,233.441219 L306.765402,233.754717 L306.558435,233.650218 Z M352.499319,207.975327 C352.188868,209.856313 350.533127,216.857765 348.359968,219.783745 C346.807711,221.978229 345.048487,223.33672 342.978811,223.33672 C342.357909,223.33672 338.83946,223.33672 338.735976,218.007257 C338.735976,215.394775 339.253395,212.677794 339.874298,209.751814 C341.737006,201.287373 344.013649,194.285922 349.705257,194.285922 C354.15506,194.285922 354.465511,199.510885 352.499319,207.975327 Z M371.229884,208.811321 C373.713495,197.734398 371.747303,192.509434 369.367176,189.374456 C365.64176,184.567489 359.018798,183 352.188868,183 C348.049517,183 338.322041,183.417997 330.664241,190.523948 C325.179601,195.644412 322.592506,202.645864 321.143733,209.333817 C319.591476,216.12627 317.832252,228.352685 329.008501,232.950653 C332.423466,234.413643 337.390687,234.83164 340.598684,234.83164 C348.773903,234.83164 357.156089,232.532656 363.4686,225.844702 C368.332338,220.41074 370.505497,212.259797 371.333368,208.811321 L371.229884,208.811321 Z M545.661919,234.891147 C536.969281,234.786647 534.48567,234.786647 526.517419,235.204644 L526,234.577649 C528.173159,226.322206 530.346319,217.962264 532.312511,209.602322 C534.796122,198.734398 535.417024,194.13643 536.244894,187.761974 L536.865797,187.239478 C545.454951,185.985486 547.835078,185.671988 556.838167,184 L557.045135,184.731495 C555.389394,191.628447 553.837137,198.4209 552.181397,205.213353 C548.869916,219.529753 547.731594,226.844702 546.489789,234.36865 L545.661919,234.995646 L545.661919,234.891147 Z",
          id: "Shape",
          fill: "#FEFEFE"
        }), /*#__PURE__*/React__default['default'].createElement("path", {
          d: "M533.159909,209.373777 C532.745974,211.150265 531.090233,218.256216 528.917074,221.182195 C527.468301,223.272181 523.949852,224.630672 521.983661,224.630672 C521.362758,224.630672 517.947793,224.630672 517.740826,219.405708 C517.740826,216.793226 518.258244,214.076245 518.879147,211.150265 C520.741855,202.894822 523.018498,195.893371 528.710106,195.893371 C533.159909,195.893371 535.126101,201.013836 533.159909,209.478277 L533.159909,209.373777 Z M550.234733,210.209772 C552.718344,199.132849 542.576933,209.269278 541.024677,205.611804 C538.541066,199.864344 540.093322,188.369423 530.158879,184.50295 C526.329979,182.935461 517.32689,184.920947 509.66909,192.026898 C504.287934,197.042863 501.597355,204.044315 500.148582,210.732268 C498.596326,217.420222 496.837101,229.751136 507.909866,234.035606 C511.428315,235.603095 514.636312,236.021092 517.844309,235.812094 C529.020558,235.185098 537.506228,218.151717 543.818739,211.463763 C548.682476,206.1343 549.510347,213.449249 550.234733,210.209772 Z M420.292089,233.622642 C413.151708,233.518142 410.668097,233.518142 402.28591,233.936139 L401.975459,233.309144 C402.699846,230.069666 403.527716,226.934688 404.252102,223.69521 L405.183456,219.306241 C406.735713,212.513788 408.28797,204.467344 408.391454,202.063861 C408.598421,200.600871 409.012356,196.943396 404.976489,196.943396 C403.217264,196.943396 401.354556,197.77939 399.595332,198.615385 C398.663978,202.272859 396.594302,212.513788 395.559465,217.111756 C393.593273,226.934688 393.386305,228.08418 392.454951,232.891147 L391.834048,233.518142 C384.4867,233.413643 381.899605,233.413643 373.413935,233.83164 L373,233.100145 C374.448773,227.248186 375.794062,221.396226 377.139351,215.544267 C380.6578,199.764877 381.48567,193.703919 382.520508,185.657475 L383.141411,185.239478 C391.420113,184.089985 393.489789,183.776488 402.389394,182 L403.113781,182.835994 L401.871975,187.851959 C403.320748,186.911466 404.873005,185.970972 406.321778,185.239478 C410.564613,183.149492 415.221383,182.522496 417.808478,182.522496 C421.740862,182.522496 425.983697,183.671988 427.846405,188.269956 C429.502145,192.345428 428.363824,197.361393 426.08718,207.288824 L424.948859,212.30479 C422.568732,223.381713 422.25828,225.367199 421.016475,232.891147 L420.188605,233.518142 L420.292089,233.622642 Z M482.293118,147.104499 L476.291059,147.208999 C460.768492,147.417997 454.559465,147.313498 452.075854,147 C451.868886,148.149492 451.454951,150.134978 451.454951,150.134978 C451.454951,150.134978 445.866827,176.050798 445.866827,176.155298 C445.866827,176.155298 432.620903,231.330914 432,233.943396 C445.556375,233.734398 451.041016,233.734398 453.421143,234.047896 C453.938562,231.435414 457.043075,216.07402 457.146559,216.07402 C457.146559,216.07402 459.837137,204.788099 459.940621,204.370102 C459.940621,204.370102 460.768492,203.22061 461.596362,202.698113 L462.838167,202.698113 C474.531835,202.698113 487.674275,202.698113 498.022653,195.069666 C505.05955,189.844702 509.819804,182.007257 511.992964,172.602322 C512.510383,170.303338 512.924318,167.586357 512.924318,164.764877 C512.924318,161.107402 512.199931,157.554427 510.130256,154.732946 C504.852583,147.313498 494.400721,147.208999 482.293118,147.104499 Z M490.054402,174.169811 C488.812597,179.917271 485.08718,184.828737 480.326926,187.127721 C476.394543,189.113208 471.634289,189.322206 466.667067,189.322206 L463.45907,189.322206 L463.666037,188.068215 C463.666037,188.068215 469.564613,162.152395 469.564613,162.256894 L469.771581,160.898403 L469.875064,159.853411 L472.255191,160.062409 C472.255191,160.062409 484.466278,161.107402 484.673245,161.107402 C489.433499,162.988389 491.503175,167.795356 490.054402,174.169811 Z M617.261369,182.835994 L616.536983,182 C607.740862,183.776488 606.085121,184.089985 598.013386,185.239478 L597.392483,185.866473 C597.392483,185.970972 597.288999,186.075472 597.288999,186.28447 L597.288999,186.179971 C591.28694,200.287373 591.390424,197.256894 586.526686,208.333817 C586.526686,207.811321 586.526686,207.497823 586.423202,206.975327 L585.181397,182.940493 L584.45701,182.104499 C575.14347,183.880987 574.936502,184.194485 566.450832,185.343977 L565.82993,185.970972 C565.726446,186.28447 565.726446,186.597968 565.726446,186.911466 L565.82993,187.015965 C566.864767,192.554427 566.6578,191.300435 567.692638,199.973875 C568.210057,204.258345 568.830959,208.542816 569.348378,212.722787 C570.176248,219.828737 570.693667,223.277213 571.728505,234.040639 C565.933413,243.654572 564.588124,247.312046 559,255.776488 L559.310451,256.612482 C567.692638,256.298984 569.555346,256.298984 575.764373,256.298984 L577.109662,254.731495 C581.766432,244.595065 617.364853,182.940493 617.364853,182.940493 L617.261369,182.835994 Z M314.543608,189.75837 C319.303862,186.414394 319.924765,181.816425 315.888897,179.412942 C311.85303,177.009459 304.712649,177.740954 299.952395,181.084931 C295.192141,184.324408 294.674722,188.922376 298.71059,191.430359 C302.642973,193.729343 309.783354,193.102347 314.543608,189.75837 Z",
          id: "Shape",
          fill: "#FEFEFE"
        }), /*#__PURE__*/React__default['default'].createElement("path", {
          d: "M575.734683,256.104499 L568.80127,268.121916 C566.628111,272.197388 562.488759,275.332366 556.072765,275.332366 L545,275.123367 L548.207997,264.255443 L550.381157,264.255443 C551.519478,264.255443 552.347349,264.150943 552.968251,263.837446 C553.589154,263.628447 553.899605,263.21045 554.417024,262.583454 L558.556375,256 L575.838167,256 L575.734683,256.104499 Z",
          id: "Shape",
          fill: "#FEFEFE"
        }))));
      });

      _defineProperty(_assertThisInitialized(_this), "renderMono", function () {
        var p = _this.props;
        var h = "".concat(p.height, "px");
        var w = "".concat(p.width, "px");
        return /*#__PURE__*/React__default['default'].createElement("svg", {
          width: w,
          height: h,
          viewBox: "0 0 750 471",
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg"
        }, /*#__PURE__*/React__default['default'].createElement("g", {
          id: "Page-1",
          stroke: "none",
          "stroke-width": "1",
          fill: "none",
          "fill-rule": "evenodd"
        }, /*#__PURE__*/React__default['default'].createElement("g", {
          id: "unionpay",
          fill: "#393939"
        }, /*#__PURE__*/React__default['default'].createElement("path", {
          d: "M0,40.0047706 C0,17.9107459 17.9143492,0 39.9919369,0 L710.008063,0 C732.095,0 750,17.9064659 750,40.0047706 L750,430.995229 C750,453.089254 732.085651,471 710.008063,471 L39.9919369,471 C17.905,471 0,453.093534 0,430.995229 L0,40.0047706 Z M496.181219,337.927431 L492.086151,337.927431 L490.947829,341.584906 L474.390424,341.584906 L475.528745,337.927431 L442,337.927431 L445.311481,326.850508 L448.726446,326.850508 L466.318689,267.912917 L469.837137,256 L486.704994,256 L484.94577,261.956459 C484.94577,261.956459 489.395572,258.716981 493.741891,257.567489 C497.174816,256.637422 513.818365,256.186237 520.047409,256.047874 L520,256 L538.006178,256 L538.213146,262.792453 C538.109662,263.941945 539.041016,264.464441 541.214175,264.464441 L544.836108,264.464441 L541.524627,275.645864 L531.797151,275.645864 C523.414965,276.272859 520.206968,272.615385 520.413935,268.539913 L520.274441,262.952353 L518.784967,267.808418 L512.989875,267.808418 L513.093359,267.912917 L495.708083,325.910015 L500.364853,325.910015 L498.850028,330.936139 L503.071735,330.936139 C504.417024,330.936139 505.65883,330.413643 506.590184,329.891147 C507.521538,329.473149 508.349408,329.055152 509.177278,327.696662 L522.216235,309.20029 L505.037927,309.20029 L507.935473,299.272859 L527.597391,299.272859 L530.391454,290.181422 L511.039986,290.181422 L514.351467,279 L568.163034,279 L564.851553,290.181422 L546.741891,290.181422 L543.947829,299.272859 L562.057491,299.272859 L559.056461,309.20029 L539.498026,309.20029 L535.979578,313.380261 L543.947829,313.380261 L545.914021,325.920174 C546.120989,327.174165 546.120989,328.01016 546.534924,328.532656 C546.948859,328.950653 549.328986,329.159652 550.674275,329.159652 L553.054402,329.159652 L549.328986,341.386067 L543.223443,341.386067 C542.292089,341.386067 540.843316,341.281567 538.877124,341.281567 C537.014416,341.072569 535.77261,340.027576 534.530805,339.400581 C533.392483,338.878084 531.736743,337.519594 531.322808,335.11611 L529.4601,322.576197 L520.560494,334.907112 C517.766432,338.773585 513.937532,341.804064 507.418054,341.804064 L495,341.804064 L496.181219,337.927431 Z M465.904754,326.014514 L479.357645,326.014514 L483.186545,312.952104 L469.837137,312.952104 L465.904754,326.014514 Z M476.667067,290.066763 L472.010297,305.532656 C472.010297,305.532656 477.081002,302.920174 479.875064,302.08418 C482.669126,301.457184 486.808478,300.934688 486.808478,300.934688 L490.016475,290.171263 L476.563583,290.171263 L476.667067,290.066763 Z M483.239185,267.912917 L478.94371,280.975327 C478.94371,280.975327 483.738658,278.951573 486.435817,278.307651 C489.132975,277.66373 493.128765,277.479752 493.128765,277.479752 L496.225502,268.004906 L483.339079,268.004906 L483.239185,267.912917 Z M334.31354,282 L379.742921,282 L376.43144,292.972424 L358.321778,292.972424 L355.527716,302.272859 L374.154797,302.272859 L370.739832,313.558781 L352.216235,313.558781 L347.662948,328.711176 C347.145529,330.383164 352.112751,330.592163 353.871975,330.592163 L363.185516,329.338171 L359.4601,341.878084 L338.556375,341.878084 C336.900635,341.878084 335.65883,341.669086 333.796122,341.251089 C332.036897,340.833091 331.209027,339.997097 330.48464,338.847605 C329.760254,337.593614 328.518449,336.65312 329.346319,333.936139 L335.348378,313.872279 L325,313.872279 L328.414965,302.377358 L338.763343,302.377358 L341.557405,293.076923 L331.209027,293.076923 L334.520508,282.104499 L334.31354,282 Z M365.700875,262.165457 L384.327956,262.165457 L380.912991,273.555878 L355.455981,273.555878 L352.661919,275.959361 C351.420113,277.108853 351.109662,276.690856 349.557405,277.526851 C348.108632,278.258345 345.107603,279.721335 341.175219,279.721335 L333,279.721335 L336.311481,268.748911 L338.795092,268.748911 C340.864767,268.748911 342.31354,268.539913 343.037927,268.121916 C343.865797,267.599419 344.797151,266.449927 345.728505,264.56894 L350.385275,256 L368.908872,256 L365.700875,262.269956 L365.700875,262.165457 Z M400.808726,280.975327 C400.808726,280.975327 405.879431,276.272859 414.572069,274.809869 C416.538261,274.391872 428.956314,274.600871 428.956314,274.600871 L430.819023,268.330914 L404.637626,268.330914 L400.808726,281.079826 L400.808726,280.975327 Z M425.437866,285.782293 L399.463436,285.782293 L397.91118,291.111756 L420.470644,291.111756 C423.161223,290.798258 423.678642,291.216255 423.885609,291.007257 L425.54135,285.782293 L425.437866,285.782293 Z M391.702153,256.104499 L407.535171,256.104499 L405.258528,264.150943 C405.258528,264.150943 410.22575,260.075472 413.744198,258.612482 C417.262647,257.358491 425.127414,256.104499 425.127414,256.104499 L450.791393,256 L441.995271,285.468795 C440.546498,290.484761 438.787274,293.724238 437.752436,295.291727 C436.821082,296.754717 435.68276,298.113208 433.406117,299.367199 C431.232958,300.516691 429.266766,301.248186 427.404058,301.352685 C425.748317,301.457184 423.057739,301.561684 419.53929,301.561684 L394.806666,301.561684 L387.873253,324.865022 C387.25235,327.164006 386.941899,328.313498 387.355834,328.940493 C387.666285,329.46299 388.597639,330.089985 389.735961,330.089985 L400.601758,329.044993 L396.876342,341.793904 L384.665256,341.793904 C380.732872,341.793904 377.93881,341.689405 375.972618,341.584906 C374.10991,341.375907 372.143718,341.584906 370.798429,340.539913 C369.660107,339.49492 367.900883,338.13643 368.004367,336.777939 C368.10785,335.523948 368.625269,333.433962 369.45314,330.507983 L391.702153,256.104499 Z M437.840227,303 L436.391454,310.105951 C435.770551,312.300435 435.253132,313.972424 433.597391,315.435414 C431.838167,316.898403 429.871975,318.465893 425.111721,318.465893 L416.3156,318.88389 L416.212116,326.825835 C416.108632,329.020319 416.729535,328.811321 417.039986,329.229318 C417.453921,329.647315 417.764373,329.751814 418.178308,329.960813 L420.97237,329.751814 L429.354556,329.333817 L425.836108,341.037736 L416.212116,341.037736 C409.48567,341.037736 404.414965,340.828737 402.862708,339.574746 C401.206968,338.529753 401,337.275762 401,334.976778 L401.620903,303.835994 L417.039986,303.835994 L416.833019,310.21045 L420.558435,310.21045 C421.80024,310.21045 422.731594,310.105951 423.249013,309.792453 C423.766432,309.478955 424.076883,308.956459 424.283851,308.224964 L425.836108,303.208999 L437.94371,303.208999 L437.840227,303 Z M218.470396,147 C217.952978,149.507983 208.018534,195.592163 208.018534,195.592163 C205.845375,204.892598 204.293118,211.580552 199.118929,215.865022 C196.117899,218.373004 192.599451,219.522496 188.563583,219.522496 C182.044105,219.522496 178.318689,216.283019 177.697786,210.117562 L177.594302,208.027576 C177.594302,208.027576 179.560494,195.592163 179.560494,195.487663 C179.560494,195.487663 189.908872,153.478955 191.771581,147.940493 C191.875064,147.626996 191.875064,147.417997 191.875064,147.313498 C171.695727,147.522496 168.073794,147.313498 167.866827,147 C167.763343,147.417997 167.245924,150.030479 167.245924,150.030479 L156.690578,197.36865 L155.759224,201.339623 L154,214.506531 C154,218.373004 154.724386,221.612482 156.276643,224.224964 C161.140381,232.793904 174.903724,234.047896 182.665008,234.047896 C192.702935,234.047896 202.119959,231.853411 208.43247,227.986938 C219.505234,221.403483 222.40278,211.058055 224.886391,201.966618 L226.128196,197.264151 C226.128196,197.264151 236.787026,153.687954 238.649734,148.044993 C238.753218,147.731495 238.753218,147.522496 238.856702,147.417997 C224.162004,147.522496 219.919169,147.417997 218.470396,147.104499 L218.470396,147 Z M277.499056,233.622642 C270.358675,233.518142 267.771581,233.518142 259.389394,233.936139 L259.078943,233.309144 C259.803329,230.069666 260.6312,226.934688 261.252102,223.69521 L262.28694,219.306241 C263.839197,212.513788 265.28797,204.467344 265.494937,202.063861 C265.701905,200.600871 266.11584,196.943396 261.976489,196.943396 C260.217264,196.943396 258.45804,197.77939 256.595332,198.615385 C255.560494,202.272859 253.594302,212.513788 252.559465,217.111756 C250.489789,226.934688 250.386305,228.08418 249.454951,232.891147 L248.834048,233.518142 C241.4867,233.413643 238.899605,233.413643 230.413935,233.83164 L230,233.100145 C231.448773,227.248186 232.794062,221.396226 234.139351,215.544267 C237.6578,199.764877 238.589154,193.703919 239.520508,185.657475 L240.244894,185.239478 C248.523597,184.089985 250.489789,183.776488 259.492878,182 L260.217264,182.835994 L258.871975,187.851959 C260.424232,186.911466 261.873005,185.970972 263.425262,185.239478 C267.668097,183.149492 272.324867,182.522496 274.911962,182.522496 C278.844345,182.522496 283.190664,183.671988 284.949888,188.269956 C286.605629,192.345428 285.570791,197.361393 283.294148,207.288824 L282.155826,212.30479 C279.879183,223.381713 279.465248,225.367199 278.223443,232.891147 L277.395572,233.518142 L277.499056,233.622642 Z M306.558435,233.650218 C302.212116,233.650218 299.418054,233.545718 296.727476,233.650218 C294.036897,233.650218 291.449803,233.859216 287.413935,233.963716 L287.206968,233.650218 L287,233.232221 C288.138322,229.05225 288.655741,227.58926 289.276643,226.12627 C289.794062,224.66328 290.311481,223.20029 291.346319,218.91582 C292.588124,213.377358 293.415995,209.510885 293.933413,206.062409 C294.554316,202.822932 294.864767,200.001451 295.278703,196.761974 L295.589154,196.552975 L295.899605,196.239478 C300.245924,195.612482 302.936502,195.194485 305.730565,194.776488 C308.524627,194.358491 311.422173,193.835994 315.871975,193 L316.078943,193.417997 L316.182427,193.835994 C315.354556,197.28447 314.526686,200.732946 313.698816,204.181422 C312.870946,207.629898 312.043075,211.078374 311.318689,214.526851 C309.766432,221.8418 309.042046,224.558781 308.731594,226.544267 C308.317659,228.425254 308.214175,229.365747 307.593273,233.127721 L307.179338,233.441219 L306.765402,233.754717 L306.558435,233.650218 Z M371.229884,208.811321 C373.713495,197.734398 371.747303,192.509434 369.367176,189.374456 C365.64176,184.567489 359.018798,183 352.188868,183 C348.049517,183 338.322041,183.417997 330.664241,190.523948 C325.179601,195.644412 322.592506,202.645864 321.143733,209.333817 C319.591476,216.12627 317.832252,228.352685 329.008501,232.950653 C332.423466,234.413643 337.390687,234.83164 340.598684,234.83164 C348.773903,234.83164 357.156089,232.532656 363.4686,225.844702 C368.332338,220.41074 370.505497,212.259797 371.333368,208.811321 L371.229884,208.811321 Z M352.499319,207.975327 C352.188868,209.856313 350.533127,216.857765 348.359968,219.783745 C346.807711,221.978229 345.048487,223.33672 342.978811,223.33672 C342.357909,223.33672 338.83946,223.33672 338.735976,218.007257 C338.735976,215.394775 339.253395,212.677794 339.874298,209.751814 C341.737006,201.287373 344.013649,194.285922 349.705257,194.285922 C354.15506,194.285922 354.465511,199.510885 352.499319,207.975327 Z M526.690452,231.950416 C526.460466,232.82725 526.230233,233.703036 526,234.577649 L526.517419,235.204644 C534.48567,234.786647 536.969281,234.786647 545.661919,234.891147 L545.661919,234.995646 L546.489789,234.36865 C547.731594,226.844702 548.869916,219.529753 552.181397,205.213353 C553.837137,198.4209 555.389394,191.628447 557.045135,184.731495 L556.838167,184 C547.835078,185.671988 545.454951,185.985486 536.865797,187.239478 L536.244894,187.761974 C536.184289,188.228627 536.124792,188.685759 536.065593,189.136527 C534.748507,187.201455 532.886722,185.564623 530.158879,184.50295 C526.329979,182.935461 517.32689,184.920947 509.66909,192.026898 C504.287934,197.042863 501.597355,204.044315 500.148582,210.732268 C498.596326,217.420222 496.837101,229.751136 507.909866,234.035606 C511.428315,235.603095 514.636312,236.021092 517.844309,235.812094 C521.004205,235.634821 523.949021,234.146055 526.690452,231.950416 Z M533.159909,209.373777 C532.745974,211.150265 531.090233,218.256216 528.917074,221.182195 C527.468301,223.272181 523.949852,224.630672 521.983661,224.630672 C521.362758,224.630672 517.947793,224.630672 517.740826,219.405708 C517.740826,216.793226 518.258244,214.076245 518.879147,211.150265 C520.741855,202.894822 523.018498,195.893371 528.710106,195.893371 C533.159909,195.893371 535.126101,201.013836 533.159909,209.478277 L533.159909,209.373777 Z M420.292089,233.622642 C413.151708,233.518142 410.668097,233.518142 402.28591,233.936139 L401.975459,233.309144 C402.699846,230.069666 403.527716,226.934688 404.252102,223.69521 L405.183456,219.306241 C406.735713,212.513788 408.28797,204.467344 408.391454,202.063861 C408.598421,200.600871 409.012356,196.943396 404.976489,196.943396 C403.217264,196.943396 401.354556,197.77939 399.595332,198.615385 C398.663978,202.272859 396.594302,212.513788 395.559465,217.111756 C393.593273,226.934688 393.386305,228.08418 392.454951,232.891147 L391.834048,233.518142 C384.4867,233.413643 381.899605,233.413643 373.413935,233.83164 L373,233.100145 C374.448773,227.248186 375.794062,221.396226 377.139351,215.544267 C380.6578,199.764877 381.48567,193.703919 382.520508,185.657475 L383.141411,185.239478 C391.420113,184.089985 393.489789,183.776488 402.389394,182 L403.113781,182.835994 L401.871975,187.851959 C403.320748,186.911466 404.873005,185.970972 406.321778,185.239478 C410.564613,183.149492 415.221383,182.522496 417.808478,182.522496 C421.740862,182.522496 425.983697,183.671988 427.846405,188.269956 C429.502145,192.345428 428.363824,197.361393 426.08718,207.288824 L424.948859,212.30479 C422.568732,223.381713 422.25828,225.367199 421.016475,232.891147 L420.188605,233.518142 L420.292089,233.622642 Z M482.293118,147.104499 L476.291059,147.208999 C460.768492,147.417997 454.559465,147.313498 452.075854,147 C451.868886,148.149492 451.454951,150.134978 451.454951,150.134978 C451.454951,150.134978 445.866827,176.050798 445.866827,176.155298 C445.866827,176.155298 432.620903,231.330914 432,233.943396 C445.556375,233.734398 451.041016,233.734398 453.421143,234.047896 C453.938562,231.435414 457.043075,216.07402 457.146559,216.07402 C457.146559,216.07402 459.837137,204.788099 459.940621,204.370102 C459.940621,204.370102 460.768492,203.22061 461.596362,202.698113 L462.838167,202.698113 C474.531835,202.698113 487.674275,202.698113 498.022653,195.069666 C505.05955,189.844702 509.819804,182.007257 511.992964,172.602322 C512.510383,170.303338 512.924318,167.586357 512.924318,164.764877 C512.924318,161.107402 512.199931,157.554427 510.130256,154.732946 C504.852583,147.313498 494.400721,147.208999 482.293118,147.104499 Z M490.054402,174.169811 C488.812597,179.917271 485.08718,184.828737 480.326926,187.127721 C476.394543,189.113208 471.634289,189.322206 466.667067,189.322206 L463.45907,189.322206 L463.666037,188.068215 C463.666037,188.068215 469.564613,162.152395 469.564613,162.256894 L469.771581,160.898403 L469.875064,159.853411 L472.255191,160.062409 C472.255191,160.062409 484.466278,161.107402 484.673245,161.107402 C489.433499,162.988389 491.503175,167.795356 490.054402,174.169811 Z M559.083003,256 L559,255.776488 C564.588124,247.312046 565.933413,243.654572 571.728505,234.040639 C570.693667,223.277213 570.176248,219.828737 569.348378,212.722787 C568.830959,208.542816 568.210057,204.258345 567.692638,199.973875 C566.6578,191.300435 566.864767,192.554427 565.82993,187.015965 L565.726446,186.911466 C565.726446,186.597968 565.726446,186.28447 565.82993,185.970972 L566.450832,185.343977 C574.936502,184.194485 575.14347,183.880987 584.45701,182.104499 L585.181397,182.940493 L586.423202,206.975327 C586.526686,207.497823 586.526686,207.811321 586.526686,208.333817 C591.390424,197.256894 591.28694,200.287373 597.288999,186.179971 L597.288999,186.28447 C597.288999,186.075472 597.392483,185.970972 597.392483,185.866473 L598.013386,185.239478 C606.085121,184.089985 607.740862,183.776488 616.536983,182 L617.261369,182.835994 L617.364853,182.940493 C617.364853,182.940493 581.766432,244.595065 577.109662,254.731495 L575.764373,256.298984 C575.71682,256.298984 575.669522,256.298984 575.622475,256.298984 L568.80127,268.121916 C566.628111,272.197388 562.488759,275.332366 556.072765,275.332366 L545,275.123367 L548.207997,264.255443 L550.381157,264.255443 C551.519478,264.255443 552.347349,264.150943 552.968251,263.837446 C553.589154,263.628447 553.899605,263.21045 554.417024,262.583454 L558.556375,256 L559.083003,256 Z M314.543608,189.75837 C319.303862,186.414394 319.924765,181.816425 315.888897,179.412942 C311.85303,177.009459 304.712649,177.740954 299.952395,181.084931 C295.192141,184.324408 294.674722,188.922376 298.71059,191.430359 C302.642973,193.729343 309.783354,193.102347 314.543608,189.75837 Z",
          id: "Shape"
        }))));
      });

      return _this;
    }

    _createClass(Cup, [{
      key: "render",
      value: function render() {
        var p = this.props;

        switch (p.type) {
          case "mono":
            return this.renderMono();

          default:
            return this.renderFlat();
        }
      }
    }]);

    return Cup;
  }(React.Component);

  _defineProperty(Cup$1, "propTypes", {
    type: PropTypes.string,
    height: PropTypes.number,
    width: PropTypes.number
  });

  _defineProperty(Cup$1, "defaultProps", {
    type: "flat",
    height: DEFAULT_HEIGHT,
    width: DEFAULT_WIDTH
  });

  var Jcb$1 = /*#__PURE__*/function (_Component) {
    _inherits(Jcb, _Component);

    var _super = _createSuper(Jcb);

    function Jcb(props, context) {
      var _this;

      _classCallCheck(this, Jcb);

      _this = _super.call(this, props, context);

      _defineProperty(_assertThisInitialized(_this), "renderFlat", function () {
        var p = _this.props;
        var h = "".concat(p.height, "px");
        var w = "".concat(p.width, "px");
        return /*#__PURE__*/React__default['default'].createElement("svg", {
          width: w,
          height: h,
          viewBox: "0 0 750 471",
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg"
        }, /*#__PURE__*/React__default['default'].createElement("defs", null, /*#__PURE__*/React__default['default'].createElement("linearGradient", {
          x1: "0.031607858%",
          y1: "49.9998574%",
          x2: "99.9743153%",
          y2: "49.9998574%",
          id: "linearGradient-1"
        }, /*#__PURE__*/React__default['default'].createElement("stop", {
          "stop-color": "#007B40",
          offset: "0%"
        }), /*#__PURE__*/React__default['default'].createElement("stop", {
          "stop-color": "#55B330",
          offset: "100%"
        })), /*#__PURE__*/React__default['default'].createElement("linearGradient", {
          x1: "0.471693172%",
          y1: "49.999826%",
          x2: "99.9860086%",
          y2: "49.999826%",
          id: "linearGradient-2"
        }, /*#__PURE__*/React__default['default'].createElement("stop", {
          "stop-color": "#1D2970",
          offset: "0%"
        }), /*#__PURE__*/React__default['default'].createElement("stop", {
          "stop-color": "#006DBA",
          offset: "100%"
        })), /*#__PURE__*/React__default['default'].createElement("linearGradient", {
          x1: "0.113880772%",
          y1: "50.0008964%",
          x2: "99.9860003%",
          y2: "50.0008964%",
          id: "linearGradient-3"
        }, /*#__PURE__*/React__default['default'].createElement("stop", {
          "stop-color": "#6E2B2F",
          offset: "0%"
        }), /*#__PURE__*/React__default['default'].createElement("stop", {
          "stop-color": "#E30138",
          offset: "100%"
        }))), /*#__PURE__*/React__default['default'].createElement("g", {
          id: "Page-1",
          stroke: "none",
          "stroke-width": "1",
          fill: "none",
          "fill-rule": "evenodd"
        }, /*#__PURE__*/React__default['default'].createElement("g", {
          id: "jcb",
          "fill-rule": "nonzero"
        }, /*#__PURE__*/React__default['default'].createElement("rect", {
          id: "Rectangle-1",
          fill: "#0E4C96",
          x: "0",
          y: "0",
          width: "750",
          height: "471",
          rx: "40"
        }), /*#__PURE__*/React__default['default'].createElement("path", {
          d: "M617.243183,346.766281 C617.243183,388.380887 583.514892,422.125974 541.88349,422.125974 L132.756823,422.125974 L132.756823,124.244916 C132.756823,82.6186826 166.489851,48.8744567 208.121683,48.8744567 L617.243183,48.874026 L617.242752,346.766281 L617.243183,346.766281 Z",
          id: "path3494",
          fill: "#FFFFFF"
        }), /*#__PURE__*/React__default['default'].createElement("path", {
          d: "M483.858874,242.044797 C495.542699,242.298285 507.296188,241.528806 518.936004,242.444883 C530.723244,244.645678 533.563915,262.487874 523.09234,268.332511 C515.950746,272.182115 507.459496,269.764696 499.713328,270.446208 L483.858874,270.446208 L483.858874,242.044797 Z M525.691826,209.900487 C528.288491,219.064679 519.453903,227.292118 510.625917,226.030566 L483.858874,226.030566 C484.043758,217.388441 483.491345,208.008973 484.131053,199.821663 C494.854942,200.123386 505.679576,199.205849 516.340394,200.301853 C520.921799,201.451558 524.753935,205.217712 525.691826,209.900487 Z M590.120412,73.9972254 C590.617872,91.498454 590.191471,109.92365 590.33359,127.780192 C590.299137,200.376358 590.405942,272.974174 590.278896,345.569303 C589.81042,372.776592 565.696524,396.413678 538.678749,396.956694 C511.63292,397.068451 484.584297,396.972628 457.537396,397.004497 L457.537396,287.253291 C487.007,287.099803 516.49604,287.561 545.953521,287.021594 C559.62072,286.162769 574.586027,277.145695 575.22328,262.107374 C576.833661,247.005483 562.592128,236.557185 549.071096,234.905684 C543.872773,234.770542 544.027132,233.390846 549.071096,232.788972 C561.96307,230.002483 572.090675,216.655787 568.296786,203.290229 C565.06052,189.232374 549.523839,183.79142 536.600366,183.817768 C510.248548,183.638612 483.891299,183.792359 457.537396,183.74111 C457.708585,163.252408 457.182916,142.740653 457.82271,122.267364 C459.910361,95.5513766 484.628603,73.5195319 511.269759,73.997656 C537.553166,73.9973692 563.837737,73.9982301 590.120412,73.9972254 Z",
          id: "path3496",
          fill: "url(#linearGradient-1)"
        }), /*#__PURE__*/React__default['default'].createElement("path", {
          d: "M159.740429,125.040498 C160.413689,97.8766592 184.628619,74.4290299 211.614797,74.0325398 C238.559493,73.9499686 265.506204,74.0209119 292.451671,73.9972254 C292.37764,164.882488 292.599905,255.773672 292.340301,346.655222 C291.302298,373.488802 267.350548,396.488661 240.661356,396.962292 C213.665015,397.060957 186.666275,396.976074 159.669012,397.004497 L159.669012,283.550875 C185.891623,289.745491 213.391138,292.382518 240.142406,288.272242 C256.134509,285.697368 273.629935,277.848026 279.044261,261.257567 C283.030122,247.066267 280.785723,232.131602 281.378027,217.566465 L281.378027,183.741541 L235.081246,183.741541 C234.873106,206.112145 235.507258,228.522447 234.746146,250.867107 C233.49785,264.601214 219.900147,273.326996 206.946428,272.861801 C190.879747,273.030535 159.04755,261.221796 159.04755,261.221796 C158.967492,219.3048 159.514314,166.814385 159.740429,125.040498 Z",
          id: "path3498",
          fill: "url(#linearGradient-2)"
        }), /*#__PURE__*/React__default['default'].createElement("path", {
          d: "M309.719995,197.390136 C307.285788,197.90738 309.229141,189.089459 308.606298,185.743964 C308.772233,164.593637 308.260045,143.420951 308.889718,122.285827 C310.972541,95.4570827 335.881262,73.3701105 362.628748,73.997656 L441.39456,73.997656 C441.320658,164.882346 441.542493,255.77294 441.283406,346.653934 C440.244412,373.488027 416.291344,396.487102 389.602087,396.962292 C362.604605,397.061991 335.604707,396.976504 308.606298,397.004928 L308.606298,272.707624 C327.04641,287.835846 352.105738,290.192248 375.077953,290.233484 C392.39501,290.227455 409.611861,287.557865 426.428143,283.562934 L426.428143,260.790297 C407.474658,270.236609 385.194808,276.235815 364.184745,270.807966 C349.529051,267.157367 338.89089,252.996683 339.128513,237.872204 C337.43001,222.143684 346.652631,205.536885 362.110237,200.860855 C381.300923,194.852545 402.217787,199.448454 420.206344,207.258795 C424.060526,209.27695 427.97066,211.780342 426.428143,205.338044 L426.428143,187.438358 C396.343581,180.280951 364.326644,177.646405 334.099438,185.433619 C325.351193,187.901774 316.82819,191.644647 309.719995,197.390136 Z",
          id: "path3500",
          fill: "url(#linearGradient-3)"
        }))));
      });

      _defineProperty(_assertThisInitialized(_this), "renderMono", function () {
        var p = _this.props;
        var h = "".concat(p.height, "px");
        var w = "".concat(p.width, "px");
        return /*#__PURE__*/React__default['default'].createElement("svg", {
          width: w,
          height: h,
          viewBox: "0 0 750 471",
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg"
        }, /*#__PURE__*/React__default['default'].createElement("g", {
          id: "Page-1",
          stroke: "none",
          "stroke-width": "1",
          fill: "none",
          "fill-rule": "evenodd"
        }, /*#__PURE__*/React__default['default'].createElement("g", {
          id: "jcb",
          fill: "#393939"
        }, /*#__PURE__*/React__default['default'].createElement("path", {
          d: "M0,40.0047706 C0,17.9107459 17.9143492,0 39.9919369,0 L710.008063,0 C732.095,0 750,17.9064659 750,40.0047706 L750,430.995229 C750,453.089254 732.085651,471 710.008063,471 L39.9919369,471 C17.905,471 0,453.093534 0,430.995229 L0,40.0047706 Z M179.180777,258.9493 C179.180777,258.9493 178.907518,169.4472 179.211117,128.235716 C183.265341,104.146715 207.924334,86.116688 232.075965,88.316766 L299.38648,88.316766 C299.30758,170.25863 299.31818,252.20319 299.18334,334.14337 C298.43699,358.38642 277.29958,379.61121 253.003425,380.21711 C228.40661,380.28921 203.807276,380.22761 179.209488,380.24811 L179.209488,277.88628 C197.474344,281.23379 215.835592,284.83865 234.522992,283.74864 C252.446297,282.81727 274.06052,280.0734 284.32472,263.30638 C291.92165,250.92113 288.51689,236.14351 289.14772,222.44568 L288.91491,187.41639 C275.06259,187.49379 261.21027,187.57128 247.357943,187.64873 C247.157579,208.02663 247.769436,228.44885 247.032044,248.79753 C245.435076,262.33083 230.953477,269.28139 218.515922,268.03135 C204.131982,267.89913 191.328619,262.52932 179.180777,258.9493 Z M314.85062,202.5565 C315.00426,179.51516 314.53417,156.450657 315.10273,133.424713 C316.78683,111.481636 335.22673,93.012434 356.90548,90.333146 C378.70585,89.615175 400.57748,90.220002 422.40575,90.020305 L435.10719,90.020305 C435.05079,172.35533 435.22004,254.696 435.02249,337.02748 C433.44919,362.60532 408.77299,384.0807 383.19918,381.6512 L314.85067,381.6512 L314.85067,269.60927 C332.67126,283.68432 356.7449,285.7996 378.70789,285.51658 C393.12924,285.1422 407.50576,282.9991 421.41096,279.15976 C421.31025,272.38985 421.20954,265.61995 421.10883,258.85005 C401.46992,268.30354 377.12648,274.98445 356.63751,264.22607 C340.36137,254.91013 338.44965,231.4562 347.1502,216.36344 C357.89665,200.70703 379.60428,200.24136 396.50374,203.55169 C404.79644,204.29021 415.93543,211.7095 421.41096,211.54217 L421.41096,192.9457 C393.0655,185.77927 362.69355,183.46031 334.29622,191.57504 C327.23573,193.98904 320.32333,197.40432 314.85067,202.5565 L314.85062,202.5565 Z M448.91013,281.1805 L448.91013,380.1351 C474.31914,380.0745 499.74248,380.25619 525.14256,380.0444 C549.29943,377.87704 570.27681,355.81216 569.02638,331.20768 L569.02638,88.307817 C543.96093,88.399997 518.88509,88.122501 493.82621,88.448229 C468.62375,89.969747 447.20069,113.504962 448.91013,138.849483 L448.91013,187.62012 C474.13749,187.73356 499.38192,187.39147 524.59844,187.79432 C537.84972,188.11963 551.98447,198.49885 549.58236,213.04189 C548.57506,224.17039 537.98799,231.47083 527.58522,232.68265 C540.58507,233.71993 555.75271,242.11147 555.49636,256.83113 C555.83744,272.70542 538.68577,281.72003 524.59909,281.18048 L448.91013,281.18048 L448.91013,281.1805 Z M472.96875,203.258883 L472.96875,227.044279 L498.941512,227.044279 C498.941512,227.044279 511.111741,227.008725 511.111741,215.133804 C511.111741,203.258883 498.941512,203.258883 498.941512,203.258883 L472.96875,203.258883 Z M500.749893,241.01374 L472.96875,241.01374 L472.96875,266.568656 L500.749893,266.568656 C500.829565,266.568656 514.445848,267.361012 514.445848,253.791199 C514.445848,240.221386 500.749893,241.01374 500.749893,241.01374 Z",
          id: "Shape"
        }))));
      });

      return _this;
    }

    _createClass(Jcb, [{
      key: "render",
      value: function render() {
        var p = this.props;

        switch (p.type) {
          case "mono":
            return this.renderMono();

          default:
            return this.renderFlat();
        }
      }
    }]);

    return Jcb;
  }(React.Component);

  _defineProperty(Jcb$1, "propTypes", {
    type: PropTypes.string,
    height: PropTypes.number,
    width: PropTypes.number
  });

  _defineProperty(Jcb$1, "defaultProps", {
    type: "flat",
    height: DEFAULT_HEIGHT,
    width: DEFAULT_WIDTH
  });

  //! library : react-payment-icons.js
  var Visa = Visa$1;
  var Discover = Discover$1;
  var Diners = Diners$1;
  var Mastercard = Mastercard$1;
  var Amex = Amex$1;
  var Cup = Cup$1;
  var Jcb = Jcb$1;

  exports.Amex = Amex;
  exports.Cup = Cup;
  exports.Diners = Diners;
  exports.Discover = Discover;
  exports.Jcb = Jcb;
  exports.Mastercard = Mastercard;
  exports.Visa = Visa;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=react-payment-icons.js.map
