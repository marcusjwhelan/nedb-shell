"use strict";
var index_1 = require("../../../index");
function dropFromObject(store) {
    var file = store.filename.split('.')[0];
    var db = index_1.getDB();
    delete db[file];
}
exports.dropFromObject = dropFromObject;
