"use strict";
var chalk = require("chalk");
var insertCB = function (err, doc) {
    if (err) {
        console.log(chalk.red("" + err));
    }
    else {
        console.log(JSON.stringify(doc, null, 2));
    }
};
function printInsert(newDoc, cb) {
    this.insert(newDoc, (cb ? cb : insertCB));
}
exports.printInsert = printInsert;
