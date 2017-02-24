"use strict";
var cursor_1 = require("../cursor");
function printFind(query, projection, cb) {
    var nedbCursor = this.find(query, projection, (cb ? cb : null));
    return new cursor_1.Cursor(nedbCursor);
}
exports.printFind = printFind;
