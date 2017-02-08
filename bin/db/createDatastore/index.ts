// db.createDatastore(name, query) = mongo db.createCollection(name, query)

import ErrnoException = NodeJS.ErrnoException;
const nedb = require('nedb');
import * as chalk from 'chalk';
import { DataStore } from '../interfaces';
import { LoadDatastores } from '../../index';

export function createDatastore(name:string, query?:DataStore){
  let q:DataStore = query;
  q.filename = `${name}.db`;
  q.autoload = true;
  let datastore = new nedb(q);
  datastore.loadDatabase(function (err: any) {
    if(err){
      console.log("what");
      console.log(err);
    } else {
      LoadDatastores();
      console.log(chalk.blue("created new datastore"));
    }
  });
}
