var express = require('express');
var app = express();
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var util = require('util');

var Index_Page = require('.//../views/index.jsx');

app.use(express.static('public'));

app.get('/',function(request,response){
    var props = {"title":'Ahsan|React To Do'};
    var html = ReactDOMServer.renderToString(
        React.createElement(Index_Page,props)
    );
    response.send(html);
});

module.exports = app;