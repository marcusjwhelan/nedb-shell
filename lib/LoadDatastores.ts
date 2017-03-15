import { PATH, DATASTORES } from './singletons';
import { DataStore } from './db/interfaces';
import { Store } from './db/datastore/store';
import { watch_this } from './autoReload';
import ErrnoException = NodeJS.ErrnoException;
import * as db from './db';
import * as fs from 'fs';

const database = PATH.getInstance();
const stores = DATASTORES.getInstance();

export const LoadDatastores = ():void => {
  database.prop = process.cwd();
  let directory;
  try{
    directory = fs.readdirSync(process.cwd());
  } catch (e){
    console.log(e);
    console.log(`No contents in: ${process.cwd()}`);
  }

  directory.forEach((coll:string) => {
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

  watch_this(process.cwd());
  /*fs.readdir(process.cwd(), (err: ErrnoException, dir:string[]) => {
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
  });*/
};
