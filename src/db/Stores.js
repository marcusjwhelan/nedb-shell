'use strict';
const path = require('./path');

class Stores {
  
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



module.exports = (new Stores);
