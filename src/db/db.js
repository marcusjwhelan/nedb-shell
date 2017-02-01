'use strict';
const datastore = require('nedb'),
      _insert    = require('./insert');


const db = () => {
  console.log("hello");
  return { insert: _insert };
};

module.exports.db = db;
