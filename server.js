var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var morgan = require('morgan');
var fs = require('fs');
var path = require('path');

app.use(express.static(__dirname + '/client'));
app.get('/',function(req,res){
    res.sendfile(__dirname+'/client/index.html');
});
app.listen(7000,function(){
    console.log("Welcome to MySite")
});
exports = module.exports = app;
