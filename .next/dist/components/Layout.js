'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('next\\dist\\lib\\head.js');

var _head2 = _interopRequireDefault(_head);

var _Navbar = require('./Navbar');

var _Navbar2 = _interopRequireDefault(_Navbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Layout = function Layout(props) {
  return _react2.default.createElement('div', null, _react2.default.createElement(_head2.default, null, _react2.default.createElement('title', null, 'Bitcoin Prices'), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://bootswatch.com/4/cerulean/bootstrap.min.css' })), _react2.default.createElement(_Navbar2.default, null), _react2.default.createElement('div', { className: 'container' }, props.children));
};

exports.default = Layout;