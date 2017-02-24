"use strict";
function noPrintInsert(args) {
    this.insert(args.newDoc, args.cb);
}
exports.noPrintInsert = noPrintInsert;
