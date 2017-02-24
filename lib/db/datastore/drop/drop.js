"use strict";
var dropFromObject_1 = require("./dropFromObject");
var dropFile_1 = require("./dropFile");
function Drop() {
    dropFile_1.dropFile(this);
    dropFromObject_1.dropFromObject(this);
}
exports.Drop = Drop;
