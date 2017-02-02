'use strict';
const path = require('./../db/path');

/*class Stores {
  
  constructor (){
    this._props = [];
  }
  
  add(store) {
    this._props.push(store);
  }
  
  tables() {
    let database = this._props.slice(1,this._props.length);
    database.forEach(data => {
      let store = data.filename;
      store = store.replace(`${path.prop}/`, '');
      console.log(store);
    })
  }
}

module.exports = (new Stores);*/

const Stores = {};

Stores._props = [];

Stores.add = (db) => {
  Stores._props.push(db);
};

Stores.tables = () => {
  let _props = Stores._props;
  let database = _props.slice(1,_props.length);
  database.forEach(data => {
    let store = data.filename;
    store = store.replace(`${path.prop}/`, '');
    console.log(store);
  })
  
};


module.exports = Stores;
