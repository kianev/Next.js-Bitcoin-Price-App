"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _link = require("next\\dist\\lib\\link.js");

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Navbar = function Navbar() {
  return _react2.default.createElement("nav", { className: "navbar navbar-expand navbar-dark bg-dark mb-4" }, _react2.default.createElement("div", { className: "container" }, _react2.default.createElement("a", { className: "navbar-brand", href: "#" }, "Bitcoin Prices"), _react2.default.createElement("div", { className: "collapse navbar-collapse" }, _react2.default.createElement("ul", { className: "navbar-nav ml-auto" }, _react2.default.createElement("li", { className: "nav-item" }, _react2.default.createElement(_link2.default, { href: "/" }, _react2.default.createElement("a", { className: "nav-link" }, "Home"))), _react2.default.createElement("li", { className: "nav-item" }, _react2.default.createElement(_link2.default, { href: "/about" }, _react2.default.createElement("a", { className: "nav-link" }, "About")))))));
};

exports.default = Navbar;