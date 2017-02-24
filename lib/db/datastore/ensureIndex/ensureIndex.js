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
function ensureDocIndex(options, cb) {
    this.ensureIndex(options, (cb ? cb : autoLog));
}
exports.ensureDocIndex = ensureDocIndex;
