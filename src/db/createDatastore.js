'use strict';
const chalk = require('chalk'),
      path = require('./path'),
      Datastore = require('nedb');

const _new = (query) => {
  let q = query;
  q.filename = `${path.prop}/${query.filename}`;
  let db = new Datastore(q);
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
