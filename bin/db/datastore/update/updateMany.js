"use strict";
var chalk = require("chalk");
var autoReply_1 = require("./autoReply");
function updateManyDocs(query, updateQuery, updateOptions, cb) {
    if (!updateOptions)
        updateOptions = { multi: true };
    if ((updateOptions.hasOwnProperty('returnUpdatedDocs') ||
        updateOptions.hasOwnProperty('upsert')) &&
        !updateOptions.hasOwnProperty('multi')) {
        updateOptions.multi = true;
    }
    if (updateOptions.multi === false &&
        (updateOptions.hasOwnProperty('returnUpdatedDocs') ||
            updateOptions.hasOwnProperty('upsert') ||
            updateOptions.hasOwnProperty('multi'))) {
        console.log(chalk.red("You cannot set multi = false with UpdateMany(), please use Update() if you wish to only update one document"));
    }
    else {
        this.update(query, updateQuery, updateOptions, (cb ? cb : autoReply_1.autoReply));
    }
}
exports.updateManyDocs = updateManyDocs;
