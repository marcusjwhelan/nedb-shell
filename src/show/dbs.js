'use strict';
const path = require('./../db/path'),
      chalk = require('chalk');


/*class Databases {
  
  constructor (){
    this._props = [];
  }
  
  push(db) {
    console.log(db);
    this._props.push(db);
  }
  
  static dbs(){
    console.log(this._props);
    let hmm = this._props;
    console.log(hmm);
    this._props.forEach(data => {
      let store = data;
      //store = store.replace(`${path.prop}/`, '');
      console.log(store);
    })
    
  }
}

module.exports = (new Databases);*/

const Databases = {};

Databases._props = [];

Databases.add = (db) => {
  Databases._props.push(db);
};

Databases.dbs = () => {
  let store = Databases._props;
  store = store.slice(1,store.length);
  store.forEach(data => {
    console.log(data);
  })
  
};


module.exports = Databases;
