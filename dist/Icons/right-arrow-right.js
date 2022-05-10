"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var RightArrowx =
/*#__PURE__*/
function (_React$Component) {
  _inherits(RightArrowx, _React$Component);

  function RightArrowx() {
    _classCallCheck(this, RightArrowx);

    return _possibleConstructorReturn(this, _getPrototypeOf(RightArrowx).apply(this, arguments));
  }

  _createClass(RightArrowx, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement("svg", {
        width: "16",
        height: "16",
        viewBox: "0 0 16 16",
        fill: "none"
      }, _react["default"].createElement("path", {
        d: "M13.257 7.627L9.864 4.234a.818.818 0 00-1.146 0 .818.818 0 000 1.147l2.003 2.015h-7.41a.806.806 0 00-.811.81c0 .452.359.81.81.81h7.411L8.718 11.02a.818.818 0 00.579 1.39.816.816 0 00.579-.244l3.38-3.381a.824.824 0 00.244-.579.778.778 0 00-.243-.579z",
        fill: "#777A80",
        opacity: "0.5"
      }));
    }
  }]);

  return RightArrowx;
}(_react["default"].Component);

RightArrowx.propTypes = {
  onClick: _propTypes["default"].func.isRequired
};
var _default = RightArrowx;
exports["default"] = _default;