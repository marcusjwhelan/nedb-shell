// A constructor for a Store = mongodb collection.
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var NeDBDataStore = require("nedb");
var datastore_1 = require("../datastore");
var Store = (function (_super) {
    __extends(Store, _super);
    function Store(query) {
        var _this = _super.call(this, {
            filename: query.filename,
            inMemoryOnly: query.inMemoryOnly,
            autoload: query.autoload,
            onload: query.onload,
            afterSerialization: query.afterSerialization,
            beforeDeserialization: query.beforeDeserialization,
            corruptAlertThreshold: query.corruptAlertThreshold
        }) || this;
        _this.__insert = datastore_1.noPrintInsert; // Use internally
        // Lowercase values exist with different functionality
        _this.Insert = datastore_1.printInsert;
        _this.FindOne = datastore_1.printFindOne;
        _this.Find = datastore_1.printFind;
        _this.Update = datastore_1.updateDocs;
        _this.UpdateMany = datastore_1.updateManyDocs;
        _this.Remove = datastore_1.removeDocs;
        _this.EnsureIndex = datastore_1.ensureDocIndex;
        _this.RemoveIndex = datastore_1.removeDocIndex;
        _this.Count = datastore_1.printCount;
        // ----------------------------------------------------
        // Non-existing functionality from NeDB ---------------
        _this.Drop = datastore_1.Drop;
        _this.InsertMany = datastore_1.InsertMany;
        _this.FindOneAndUpdate = datastore_1.FindOneAndUpdate;
        _this.FindOneAndRemove = datastore_1.FindOneAndRemove;
        _this.Help = datastore_1.Help;
        return _this;
    }
    return Store;
}(NeDBDataStore));
exports.Store = Store;
