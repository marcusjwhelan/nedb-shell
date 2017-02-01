'use strict';
const db = require('./db'),
      Datastore = require('nedb');

const find = (query) => {
  console.log(query);
};

module.exports = find;
