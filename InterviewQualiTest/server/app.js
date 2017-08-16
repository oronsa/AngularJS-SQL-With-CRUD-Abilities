var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var router = express.Router();

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/../client'));
app.use(express.static(__dirname + '/../'));


app.use('/api/database', require('./Routes/dbRoute'));

app.listen(1338);
console.log("listening on port 1338");

module.exports = app;
