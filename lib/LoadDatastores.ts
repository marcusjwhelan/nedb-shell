import { PATH, DATASTORES } from './singletons';
import { DataStore } from './db/interfaces';
import { Store } from './db/datastore/store';
import ErrnoException = NodeJS.ErrnoException;
import * as db from './db';
import * as fs from 'fs';

const database = PATH.getInstance();
const stores = DATASTORES.getInstance();

export const LoadDatastores = ():void => {
  database.prop = process.cwd();
  fs.readdir(process.cwd(), (err: ErrnoException, dir:string[]) => {
    try{
      dir.forEach((coll:string) => {
        let name;
        let q:DataStore = {};
        let file = coll.split('.');
        if(file[1] === 'db'){
          name = file[0];
          q.filename = coll;
          q.autoload = true;

          stores.addStore(name);
          db[name] = new Store(q);
        }
      });
    } catch(e){
      console.log(e);
      console.log(`No Datastores in directory: ${process.cwd()}`);
    }
  });
};
