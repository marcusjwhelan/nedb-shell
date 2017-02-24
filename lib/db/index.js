"use strict";
var createDatastore_1 = require("./createDatastore");
var show_1 = require("./show");
var help_1 = require("./help");
var db = {
    createDatastore: createDatastore_1.createDatastore,
    show: show_1.show,
    Help: help_1.Help
};
module.exports = db;
