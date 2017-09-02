var React = require('react');
var ReactDOM = require('react-dom');
var appIndex = require('./index.jsx');

var props = window.PROPS;

ReactDOM.render(React.createElement(appIndex,props),document);
