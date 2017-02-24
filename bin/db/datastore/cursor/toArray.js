"use strict";
var chalk = require("chalk");
function _toArray() {
    var returnArray = [];
    if (this._sort)
        this.cursor.sort(this._sort);
    this.cursor
        .skip(this._skip)
        .limit(this._limit)
        .exec(function (err, docs) {
        if (err) {
            console.log(chalk.red(err + ", \nAn error occurred while trying to use the toArray cursor function"));
        }
        else {
            docs.forEach(function (doc) {
                returnArray.push(doc);
            });
        }
    });
    return returnArray;
}
exports._toArray = _toArray;
