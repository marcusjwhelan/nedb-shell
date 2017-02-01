'use strict';
 const db = require('./db'),
       Datastore = require('nedb');

 const insert = (query) => {
   console.log(typeof query);
 };
 
 module.exports = insert;
 
/*class insert extends db{
  
};
 
 module.exports.insert = insert;*/
   
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
