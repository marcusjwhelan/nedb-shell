import * as chalk from 'chalk';
import * as program from 'commander';
import { PATH } from './singletons/path';
import { DATASTORES } from './singletons/datastores';
import * as fs from 'fs';
import { Load } from './Load';
import * as db from './db';
import { Store } from './db/datastore/store';
import { DataStore } from './db/interfaces';
import ErrnoException = NodeJS.ErrnoException;
import { repl } from './repl';

const database = PATH.getInstance();
const stores  = DATASTORES.getInstance();

const co    = require('co'),
  pkg       = require('../package.json');



export const LoadDatastores = () => {
  database.prop = process.cwd();
  fs.readdir(process.cwd(), (err: ErrnoException, dir:string[]) => {
    try{
      dir.forEach((coll:string)=> {
        //console.log(coll);
        const name = coll.split('.')[0];
        //const file = path.join(process.cwd(), coll);
        let q:DataStore = {};
        q.filename = coll;
        q.autoload = true;
        db[name] = new Store(q);
      });
    } catch(e){
      console.log(e);
      console.log(`No Datastores in directory: ${process.cwd()}`);
    }

  });
};

program
  .version(` NeDB: ${pkg.dependencies.nedb} \n NeDB-Shell: ${pkg.version}`)
  .parse(process.argv);


LoadDatastores();
console.log(chalk.blue(`NeDB Shell: ${new Date()}`));
Load(repl);
