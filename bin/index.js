"use strict";
var chalk = require("chalk");
var program = require("commander");
var singletons_1 = require("./singletons");
var singletons_2 = require("./singletons");
var fs = require("fs");
var Load_1 = require("./Load");
var db = require("./db");
var store_1 = require("./db/datastore/store");
var repl_1 = require("./repl");
var pkg = require('../package.json');
var database = singletons_1.PATH.getInstance();
var stores = singletons_2.DATASTORES.getInstance();
exports.getDB = function () {
    return db;
};
exports.LoadDatastores = function () {
    database.prop = process.cwd();
    fs.readdir(process.cwd(), function (err, dir) {
        try {
            dir.forEach(function (coll) {
                var name;
                var q = {};
                var file = coll.split('.');
                if (file[1] === 'db') {
                    name = file[0];
                    q.filename = coll;
                    q.autoload = true;
                    stores.addStore(name);
                    db[name] = new store_1.Store(q);
                }
            });
        }
        catch (e) {
            console.log(e);
            console.log("No Datastores in directory: " + process.cwd());
        }
    });
};
program
    .version(" NeDB: " + pkg.dependencies.nedb + " \n NeDB-Shell: " + pkg.version)
    .parse(process.argv);
exports.LoadDatastores();
console.log(chalk.blue("NeDB-Shell: " + new Date()));
Load_1.Load(repl_1.repl);
