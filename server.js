var express = require('express');

var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended : true}));