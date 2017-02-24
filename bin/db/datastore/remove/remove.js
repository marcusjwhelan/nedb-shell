"use strict";
var chalk = require("chalk");
exports.removeCB = function (err, numRemoved) {
    var returnObj = { removed: 0 };
    if (err) {
        console.log(chalk.red("" + err));
    }
    else {
        returnObj.removed = numRemoved;
        console.log(returnObj);
    }
};
function removeDocs(query, queryOptions, cb) {
    if (!queryOptions)
        queryOptions = {};
    this.remove(query, queryOptions, (cb ? cb : exports.removeCB));
}
exports.removeDocs = removeDocs;
