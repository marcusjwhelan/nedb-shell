"use strict";
var chalk = require("chalk");
var insertManyCB = function (err, doc) {
    if (err) {
        console.log(chalk.red("" + err));
        console.log(JSON.stringify(doc, null, 2));
    }
};
function InsertMany(newDocs, cb) {
    for (var _i = 0, newDocs_1 = newDocs; _i < newDocs_1.length; _i++) {
        var item = newDocs_1[_i];
        this.insert(item, (cb ? cb : insertManyCB));
    }
}
exports.InsertMany = InsertMany;
