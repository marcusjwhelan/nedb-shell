"use strict";
var autoReply_1 = require("./autoReply");
function updateDocs(query, updateQuery, updateOptions, cb) {
    if (!updateOptions)
        updateOptions = {};
    this.update(query, updateQuery, updateOptions, (cb ? cb : autoReply_1.autoReply));
}
exports.updateDocs = updateDocs;
