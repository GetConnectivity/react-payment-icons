(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('prop-types')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react', 'prop-types'], factory) :
	(factory((global['react-payment-icons'] = {}),global.React,global.PropTypes));
}(this, (function (exports,React,PropTypes) { 'use strict';

var React__default = 'default' in React ? React['default'] : React;
PropTypes = PropTypes && PropTypes.hasOwnProperty('default') ? PropTypes['default'] : PropTypes;

var asyncGenerator = function () {
  function AwaitValue(value) {
    this.value = value;
  }

  function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg);
        var value = result.value;

        if (value instanceof AwaitValue) {
          Promise.resolve(value.value).then(function (arg) {
            resume("next", arg);
          }, function (arg) {
            resume("throw", arg);
          });
        } else {
          settle(result.done ? "return" : "normal", result.value);
        }
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({
            value: value,
            done: true
          });
          break;

        case "throw":
          front.reject(value);
          break;

        default:
          front.resolve({
            value: value,
            done: false
          });
          break;
      }

      front = front.next;

      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
      return this;
    };
  }

  AsyncGenerator.prototype.next = function (arg) {
    return this._invoke("next", arg);
  };

  AsyncGenerator.prototype.throw = function (arg) {
    return this._invoke("throw", arg);
  };

  AsyncGenerator.prototype.return = function (arg) {
    return this._invoke("return", arg);
  };

  return {
    wrap: function (fn) {
      return function () {
        return new AsyncGenerator(fn.apply(this, arguments));
      };
    },
    await: function (value) {
      return new AwaitValue(value);
    }
  };
}();





var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();









var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var Visa$1 = function (_Component) {
    inherits(Visa, _Component);

    function Visa(props, context) {
        classCallCheck(this, Visa);

        var _this = possibleConstructorReturn(this, (Visa.__proto__ || Object.getPrototypeOf(Visa)).call(this, props, context));

        _this.renderFlat = function () {
            var p = _this.props;
            var h = p.height + 'px';
            var w = p.width + 'px';

            return React__default.createElement(
                'svg',
                { width: w, height: h, viewBox: '0 0 750 471', version: '1.1', xmlns: 'http://www.w3.org/2000/svg' },
                React__default.createElement(
                    'g',
                    { id: 'Page-1', stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
                    React__default.createElement(
                        'g',
                        { id: 'visa' },
                        React__default.createElement('rect', { id: 'Rectangle-1', fill: '#0E4595', x: '0', y: '0', width: '750', height: '471', rx: '40' }),
                        React__default.createElement('path', { d: 'M278.1975,334.2275 L311.5585,138.4655 L364.9175,138.4655 L331.5335,334.2275 L278.1975,334.2275 L278.1975,334.2275 Z', id: 'Shape', fill: '#FFFFFF' }),
                        React__default.createElement('path', { d: 'M524.3075,142.6875 C513.7355,138.7215 497.1715,134.4655 476.4845,134.4655 C423.7605,134.4655 386.6205,161.0165 386.3045,199.0695 C386.0075,227.1985 412.8185,242.8905 433.0585,252.2545 C453.8275,261.8495 460.8105,267.9695 460.7115,276.5375 C460.5795,289.6595 444.1255,295.6545 428.7885,295.6545 C407.4315,295.6545 396.0855,292.6875 378.5625,285.3785 L371.6865,282.2665 L364.1975,326.0905 C376.6605,331.5545 399.7065,336.2895 423.6355,336.5345 C479.7245,336.5345 516.1365,310.2875 516.5505,269.6525 C516.7515,247.3835 502.5355,230.4355 471.7515,216.4645 C453.1005,207.4085 441.6785,201.3655 441.7995,192.1955 C441.7995,184.0585 451.4675,175.3575 472.3565,175.3575 C489.8055,175.0865 502.4445,178.8915 512.2925,182.8575 L517.0745,185.1165 L524.3075,142.6875', id: 'path13', fill: '#FFFFFF' }),
                        React__default.createElement('path', { d: 'M661.6145,138.4655 L620.3835,138.4655 C607.6105,138.4655 598.0525,141.9515 592.4425,154.6995 L513.1975,334.1025 L569.2285,334.1025 C569.2285,334.1025 578.3905,309.9805 580.4625,304.6845 C586.5855,304.6845 641.0165,304.7685 648.7985,304.7685 C650.3945,311.6215 655.2905,334.1025 655.2905,334.1025 L704.8025,334.1025 L661.6145,138.4655 L661.6145,138.4655 Z M596.1975,264.8725 C600.6105,253.5935 617.4565,210.1495 617.4565,210.1495 C617.1415,210.6705 621.8365,198.8155 624.5315,191.4655 L628.1385,208.3435 C628.1385,208.3435 638.3555,255.0725 640.4905,264.8715 L596.1975,264.8715 L596.1975,264.8725 L596.1975,264.8725 Z', id: 'Path', fill: '#FFFFFF' }),
                        React__default.createElement('path', { d: 'M232.9025,138.4655 L180.6625,271.9605 L175.0965,244.8315 C165.3715,213.5575 135.0715,179.6755 101.1975,162.7125 L148.9645,333.9155 L205.4195,333.8505 L289.4235,138.4655 L232.9025,138.4655', id: 'path16', fill: '#FFFFFF' }),
                        React__default.createElement('path', { d: 'M131.9195,138.4655 L45.8785,138.4655 L45.1975,142.5385 C112.1365,158.7425 156.4295,197.9015 174.8155,244.9525 L156.1065,154.9925 C152.8765,142.5965 143.5085,138.8975 131.9195,138.4655', id: 'path18', fill: '#F2AE14' })
                    )
                )
            );
        };

        _this.renderMono = function () {
            var p = _this.props;
            var h = p.height + 'px';
            var w = p.width + 'px';

            return React__default.createElement(
                'svg',
                { width: w, height: h, viewBox: '0 0 750 471', version: '1.1', xmlns: 'http://www.w3.org/2000/svg' },
                React__default.createElement(
                    'g',
                    { id: 'Page-1', stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
                    React__default.createElement(
                        'g',
                        { id: 'Visa', fill: '#393939' },
                        React__default.createElement('path', { d: 'M0,40.0047706 C0,17.9107459 17.9143492,0 39.9919369,0 L710.008063,0 C732.095,0 750,17.9064659 750,40.0047706 L750,430.995229 C750,453.089254 732.085651,471 710.008063,471 L39.9919369,471 C17.905,471 0,453.093534 0,430.995229 L0,40.0047706 Z M277.6505,333.6295 L311.0115,137.8675 L364.3705,137.8675 L330.9865,333.6295 L277.6505,333.6295 Z M524.5125,142.6875 C513.9405,138.7215 497.3765,134.4655 476.6895,134.4655 C423.9655,134.4655 386.8255,161.0165 386.5095,199.0695 C386.2125,227.1985 413.0235,242.8905 433.2635,252.2545 C454.0325,261.8495 461.0155,267.9695 460.9165,276.5375 C460.7845,289.6595 444.3305,295.6545 428.9935,295.6545 C407.6365,295.6545 396.2905,292.6875 378.7675,285.3785 L371.8915,282.2665 L364.4025,326.0905 C376.8655,331.5545 399.9115,336.2895 423.8405,336.5345 C479.9295,336.5345 516.3415,310.2875 516.7555,269.6525 C516.9565,247.3835 502.7405,230.4355 471.9565,216.4645 C453.3055,207.4085 441.8835,201.3655 442.0045,192.1955 C442.0045,184.0585 451.6725,175.3575 472.5615,175.3575 C490.0105,175.0865 502.6495,178.8915 512.4975,182.8575 L517.2795,185.1165 L524.5125,142.6875 Z M661.3395,138.0545 L620.1085,138.0545 C607.3355,138.0545 597.7775,141.5405 592.1675,154.2885 L512.9225,333.6915 L568.9535,333.6915 C568.9535,333.6915 578.1155,309.5695 580.1875,304.2735 C586.3105,304.2735 640.7415,304.3575 648.5235,304.3575 C650.1195,311.2105 655.0155,333.6915 655.0155,333.6915 L704.5275,333.6915 L661.3395,138.0545 Z M175.088482,244.366797 C175.089488,244.370031 175.090494,244.373266 175.0915,244.3765 L180.6575,271.5055 L232.8975,138.0105 L289.4185,138.0105 L205.4145,333.3955 L148.9595,333.4605 L101.520801,163.434171 C85.1184477,154.339743 66.4024534,147.029038 45.4725,141.9625 L46.1535,137.8895 L132.1945,137.8895 C143.7835,138.3215 153.1515,142.0205 156.3815,154.4165 L175.088482,244.366796 Z M595.5425,264.2325 C599.9555,252.9535 616.8015,209.5095 616.8015,209.5095 C616.4865,210.0305 621.1815,198.1755 623.8765,190.8255 L627.4835,207.7035 C627.4835,207.7035 637.7005,254.4325 639.8355,264.2315 L595.5425,264.2315 L595.5425,264.2325 Z', id: 'Rectangle-1' })
                    )
                )
            );
        };

        return _this;
    }

    createClass(Visa, [{
        key: 'render',
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

Visa$1.propTypes = {
    type: PropTypes.string,
    height: PropTypes.number,
    width: PropTypes.number
};
Visa$1.defaultProps = {
    type: "flat",
    height: 37,
    width: 45
};

var Visa = Visa$1;

exports.Visa = Visa;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=react-payment-icons.js.map
