'use strict';
 const db = require('./db'),
       nedb = require('nedb');

class insert extends db{
  
};
 
 module.exports.insert = insert;
   
// or would it be

/*
* const db = require('./db'),
*       nedb = require('nedb');
*
*
* const insert = () => {
*
* }
*
* module.exports.insert = insert;
* */
