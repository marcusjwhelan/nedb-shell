// db.createDatastore(name, query) = mongo db.createCollection(name, query)

const nedb = require('nedb');
import * as chalk from 'chalk';
import { DataStore } from '../interfaces';
import { getDB } from '../../index';
import { Store } from '../datastore/store';
import { DATASTORES } from '../../singletons';
import db = require('../../db');

const localObj = {
  name: '',
  query: {}
};

const createCB = function (err: any) {
  if(err){
    console.log(err);
  } else {
    let db = getDB();
    let stores = DATASTORES.getInstance();

    stores.addStore(localObj.name);
    db[localObj.name] = new Store(localObj.query);
    console.log(chalk.blue("created new datastore"));
  }
};

export function createDatastore(name:string, query?:DataStore, cb?:any){
  localObj.name = '';
  localObj.query = {};
  let q:DataStore = query;
  q.filename = `${name}.db`;
  q.autoload = true;
  let datastore = new nedb(q);
  localObj.name = name;
  localObj.query = q;
  datastore.loadDatabase((cb?cb:createCB));
}

