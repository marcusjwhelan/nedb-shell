"use strict";
var index_1 = require("./index");
var Cursor = (function () {
    function Cursor(cursor) {
        this._sort = {};
        this._skip = 0;
        this._limit = 20;
        this.sort = index_1._Sort;
        this.skip = index_1._Skip;
        this.limit = index_1._Limit;
        this.count = index_1._Count;
        this.exec = index_1._Exec;
        this.pretty = index_1._Pretty;
        this.toArray = index_1._toArray;
        this.cursor = cursor;
    }
    return Cursor;
}());
exports.Cursor = Cursor;
