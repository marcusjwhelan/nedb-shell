"use strict";
var chalk = require("chalk");
var remove_1 = require("../remove");
function FindOneAndRemove(findQuery, show) {
    var _this = this;
    this.findOne(findQuery, function (err, doc) {
        if (err) {
            console.log(chalk.red("" + err));
        }
        else {
            if (show) {
                console.log("Document being removed\n" + JSON.stringify(doc, null, 2));
            }
            _this.remove(doc, remove_1.removeCB);
        }
    });
}
exports.FindOneAndRemove = FindOneAndRemove;
