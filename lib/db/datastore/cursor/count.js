"use strict";
var chalk = require("chalk");
function _Count() {
    this.cursor.exec(function (err, docs) {
        if (err) {
            console.log(chalk.red("" + err));
        }
        else {
            console.log(chalk.yellow(docs.length + ''));
        }
    });
}
exports._Count = _Count;
