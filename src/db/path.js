'use strict';

class Path{
  
  constructor () {
    this._path = 'd';
  }
  
  get prop() {
    return this._path;
  }
  
  set prop(path){
    this._path = path;
  }
}
//const path = new path();


module.exports = (new Path);

