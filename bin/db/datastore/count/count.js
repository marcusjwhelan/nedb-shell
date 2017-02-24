"use strict";
var chalk = require("chalk");
var countCB = function (err, count) {
    if (err) {
        console.log(chalk.red("" + err));
    }
    else {
        console.log(chalk.yellow(count));
    }
};
function printCount(query) {
    this.count(query, countCB);
}
exports.printCount = printCount;
