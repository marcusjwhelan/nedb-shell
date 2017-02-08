// db.createDatastore(name, query) = mongo db.createCollection(name, query)

// Create a Datastore db.createDatastore('name',{});
// or db.createDatastore('name',{query params});

import ErrnoException = NodeJS.ErrnoException;
const nedb = require('nedb');
import * as fs from 'fs';
import * as chalk from 'chalk';
import { DataStore } from '../interfaces';
import { Store } from '../datastore/store';
import * as db from '../../db';
import { Load } from '../../Load';


export function createDatastore(name:string, query?:DataStore){
  let q:DataStore = query;
  q.filename = `${name}.db`;
  q.autoload = true;
  /*let datastore = new nedb(q);
  datastore.loadDatabase(function (err: any) {
    if(err){
      console.log("what");
      console.log(err);
    } else {
      console.log(chalk.blue("created new datastore"));
    }
  });*/
  /*fs.readFile(`${name}.db`, (err: ErrnoException, data:Buffer) => {
    console.log(data);
    }
  );*/
  db[name] = new Store(`${process.cwd()}/${name}.db`);
  Load();
}
