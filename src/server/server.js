var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var functions = require('./functions');

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.get('/', function(req, res) {
    res.json({success: true, data:"server Up!"});
});
app.post('/authorize', functions.authorize);
app.post('/search', functions.search);
app.post('/user', functions.user);
console.log("app running and listening")
app.listen(3000);