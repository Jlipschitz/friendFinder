var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var apiRoute = require('./app/routing/api-routes');
var htmlRoute = require('./app/routing/html-routes');

var app = express();
var PORT = process.env.PORT || 3000;

app.use('/', htmlRoute);
app.use('/survey', htmlRoute);
app.get('/api/friends', apiRoute);
app.post('/api/friends', apiRoute);

app.listen(PORT, function () { });