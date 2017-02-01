'use strict';

class Path{
  
  constructor () {
    this._path = 'd';
  }
  
  get prop() {
    console.log('getter');
    return this._path;
  }
  
  set prop(path){
    console.log('setter');
    this._path = path;
  }
}
//const path = new path();


module.exports = (new Path);

