// db.createDatastore(name, query) = mongo db.createCollection(name, query)
"use strict";
var nedb = require('nedb');
var chalk = require("chalk");
var index_1 = require("../../index");
var store_1 = require("../datastore/store");
var singletons_1 = require("../../singletons");
var localObj = {
    name: '',
    query: {}
};
var createCB = function (err) {
    if (err) {
        console.log(err);
    }
    else {
        var db_1 = index_1.getDB();
        var stores = singletons_1.DATASTORES.getInstance();
        stores.addStore(localObj.name);
        db_1[localObj.name] = new store_1.Store(localObj.query);
        console.log(chalk.blue("created new datastore"));
    }
};
function createDatastore(name, query, cb) {
    localObj.name = '';
    localObj.query = {};
    var q = query;
    q.filename = name + ".db";
    q.autoload = true;
    var datastore = new nedb(q);
    localObj.name = name;
    localObj.query = q;
    datastore.loadDatabase((cb ? cb : createCB));
}
exports.createDatastore = createDatastore;
