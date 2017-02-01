'use strict';

class Path{
  
  constructor () {
    this._path = '';
  }
  
  get prop() {
    return this._path;
  }
  
  set prop(path){
    this._path = path;
  }
}


module.exports = (new Path);

