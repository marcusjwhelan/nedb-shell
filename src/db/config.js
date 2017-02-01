'use strict';

class config{
  
  constructor (path){
    this._path = path;
  }
  
  get path() {
    return this._path;
  }
  
  set path(path){
    this._path = path;
  }
}

module.exports.config = config;

