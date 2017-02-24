"use strict";
var chalk = require("chalk");
function _Pretty() {
    if (this._sort)
        this.cursor.sort(this._sort);
    this.cursor
        .skip(this._skip)
        .limit(this._limit)
        .exec(function (err, docs) {
        if (err) {
            console.log(chalk.red(err + ", \nAn error occurred while trying to use the pretty cursor function"));
        }
        else {
            console.log(JSON.stringify(docs, null, 2));
        }
    });
}
exports._Pretty = _Pretty;
