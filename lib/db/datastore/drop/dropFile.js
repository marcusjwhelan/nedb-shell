"use strict";
var singletons_1 = require("../../../singletons");
var fs = require("fs");
var chalk = require("chalk");
function dropFile(store) {
    var stores = singletons_1.DATASTORES.getInstance();
    var file = store.filename.split('.')[0];
    var currentStores = stores.prop;
    var newStores = currentStores.filter(function (value) { return file !== value; });
    stores.resetStore();
    stores.addStores(newStores);
    fs.exists("./" + store.filename, function (exists) {
        if (exists) {
            fs.unlinkSync("./" + store.filename);
        }
        else {
            console.log(chalk.red("File: " + store.filename + " was not found."));
        }
    });
}
exports.dropFile = dropFile;
