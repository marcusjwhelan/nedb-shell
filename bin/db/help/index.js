"use strict";
var chalk = require("chalk");
function Help() {
    console.log("\n" + chalk.green("db.createDatastore(<name>,{<create Options>})") + " - Create a new datastore with the <name> and input options.\n\n" + chalk.green("db.show()") + " - List all the datastore names in this directory that you can access with this shell.");
}
exports.Help = Help;
