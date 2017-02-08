import * as chalk from 'chalk';
import * as program from 'commander';
import { PATH } from './singletons/path';
import { DATASTORES } from './singletons/datastores';
import * as fs from 'fs';
import * as path from 'path';
import { Load } from './Load';

import * as db from './db';
import { Store } from './db/datastore/store';
import ErrnoException = NodeJS.ErrnoException;

const database = PATH.getInstance();
const stores  = DATASTORES.getInstance();

const co    = require('co'),
  pkg       = require('../package.json');


// Start Nodejs REPL + Load nedb-shell module
const launch = () => {
  const repl = require('repl').start({
    prompt: chalk.green('> '),
    useGlobal: true,
    ignoreUndefined: true
  });
  Load();
  /*for (let nedb_shell of ['db', 'help', 'show']) {
    repl.context[nedb_shell] = require(`./${nedb_shell}`);
  }*/
};

const loadDatastores = () => {
  database.prop = process.cwd();
  fs.readdir(process.cwd(), (err: ErrnoException, dir:string[]) => {
  //fs.readdir(direcotry, (err: ErrnoException, dir:string[]) =>{
    try{
      dir.forEach((coll:string)=> {
        console.log(coll);
        const name = coll.split('.')[0];
        const file = path.join(process.cwd(), coll);

        db[name] = new Store(file);
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
/*
program
  .action(function () {

  co(function *(): Iterable<string> {
    loadDatastores(directory);
    console.log(chalk.blue(`NeDB Shell: ${new Date()}`));

    launch();
  })
})*/


loadDatastores();
console.log(chalk.blue(`NeDB Shell: ${new Date()}`));

launch();
