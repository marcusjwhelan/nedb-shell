"use strict";
var update_1 = require("./../update");
var chalk = require("chalk");
function FindOneAndUpdate(findQuery, updateQuery, updateOptions, cb) {
    var _this = this;
    this.findOne(findQuery, {}, function (err, doc) {
        if (err) {
            console.log(chalk.red("" + err));
        }
        else {
            if (!updateOptions)
                updateOptions = {};
            updateOptions.multi = false;
            _this.update(doc, updateQuery, updateOptions, (cb ? cb : update_1.autoReply));
        }
    });
}
exports.FindOneAndUpdate = FindOneAndUpdate;
