// A constructor for a datastore = mongodb collection.
/*
 *  Should require this into a db class and for each
 *  store in the STORES singleton load it into the db
 *  class. Each Store should also require each function
 *  that can operate on the store/collection like so.
 *  db.users.find(query).
 * */

import * as Nedb from 'nedb';


export class Store extends Nedb{
  constructor(file: string){
    super({
      filename: file,
      autoload: true
    })
  }
}

