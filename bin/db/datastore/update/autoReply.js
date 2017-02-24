"use strict";
var chalk = require("chalk");
function autoReply(err, numAffected, affectedDocuments, upsert) {
    var replyObject = {};
    if (err) {
        console.log(chalk.red("" + err));
    }
    else {
        if (upsert) {
            replyObject.changed = numAffected;
            replyObject.affectedDocument = (affectedDocuments) ? affectedDocuments : 0;
            replyObject.upsert = upsert;
        }
        else if (!upsert) {
            replyObject.changed = numAffected;
            replyObject.affectedDocument = {};
            replyObject.affectedDocuments = [];
            if (Array.isArray(affectedDocuments)) {
                affectedDocuments.forEach(function (doc) {
                    replyObject.affectedDocuments.push(doc._id);
                });
            }
            else if (affectedDocuments) {
                replyObject.affectedDocument = affectedDocuments._id;
            }
            replyObject.upsert = false;
        }
        console.log(replyObject);
    }
}
exports.autoReply = autoReply;
