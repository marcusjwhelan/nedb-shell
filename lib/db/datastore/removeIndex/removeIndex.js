"use strict";
var chalk = require("chalk");
var autoLog = function (err) {
    if (err) {
        console.log(chalk.red("" + err));
    }
    else {
        console.log("Success");
    }
};
function removeDocIndex(field, cb) {
    this.removeIndex(field, (cb ? cb : autoLog));
}
exports.removeDocIndex = removeDocIndex;
