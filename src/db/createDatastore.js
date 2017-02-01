'use strict';
const db = require('./db'),
      chalk = require('chalk'),
      path = require('./path'),
      Datastore = require('nedb');

const _new = (query) => {
  let db = new Datastore(query);
  console.log(query.filename);
  db.loadDatabase(function (err) {
    if(err) {
      console.log(err);
      console.log(chalk.red("Try prefixing with '~/' "));
    } else {
      console.log(chalk.blue("created new datastore"));
    }
  })
};

module.exports = _new;
