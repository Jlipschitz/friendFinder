var express = require('express');
var path = require('path');
var router = express.Router();
var apiRoutes = require('./../routing/api-routes.js');

var app = express();

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/../public/home.html'));
});

router.get('/survey', function (req, res) {
    res.sendFile(path.join(__dirname + '/../public/survey.html'));
});

app.use(function (req, res) {
    res.sendFile(path.join(__dirname + '/../public/home.html'));
});

module.exports = router;