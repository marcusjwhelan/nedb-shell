'use strict';
const db = require('./db'),
      chalk = require('chalk'),
      path = require('./path'),
      Stores = require('./Stores'),
      Datastore = require('nedb');

const loadDatastore = (query) => {
  let q = query;
  q.filename = `${path.prop}/${query.filename}`;
  q.autoload = true;
  let db = new Datastore(q);
  Stores.add(db);
};

module.exports = loadDatastore;
