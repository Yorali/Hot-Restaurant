var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();

var PORT = 400;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

var reservations = [
    {
        name: "Nakamura",
        mobile: 81-243-5263-5234,
        email: "mushimushi@ww.com",
        resID: 700
    }, {
        name: "Kasuga",
        mobile: 81-343-5263-5234,
        email: "mushimushi@ww.com",
        resID: 701
    }, {
        name: "Mai",
        mobile: 81-643-5263-5234,
        email: "mushimushi@ww.com",
        resID: 702
    }, {
        name: "Emi",
        mobile: 81-443-5263-5234,
        email: "mushimushi@ww.com",
        resID: 703
    }
]