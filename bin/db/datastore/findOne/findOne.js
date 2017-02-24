"use strict";
//import { Cursor } from '../cursor';
var chalk = require("chalk");
var findOneCB = function (err, doc) {
    if (err) {
        console.log(chalk.red("" + err));
    }
    else {
        console.log(JSON.stringify(doc, null, 2));
    }
};
function printFindOne(query, projection, cb) {
    this.findOne(query, projection, (cb ? cb : findOneCB));
}
exports.printFindOne = printFindOne;
