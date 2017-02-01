'use strict';
const db = require('./db'),
      Datastore = require('nedb');

const _new = (query) => {
  let db = new Datastore(query);
  db.loadDatabase(function (err) {
    if(err) {
      console.log(err, 'hmm');
    } else {
      console.log("created new datastore");
    }
  })
};

module.exports = _new;
