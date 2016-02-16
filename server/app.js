var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');
var request = require('request');
var cheerio = require('cheerio');

// clist api
var clist = require('./CLIST.js');

var app = express();
var appPort = 3000;

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// to allow access from client
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://test.local");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', function(req, res){
   res.send('api is working');
});

app.get('/posts/:section', function(req, res){
    clist.GetPostsBySection(req.params.section, res);
});

app.post('/post/', function(req, res) {
    clist.GetPostDetails(req.body, res);
});

app.listen(appPort, '192.168.33.10');
console.log('listening on port ' + appPort);

module.exports = app;
