'use strict';

import { path } from './singletons/path';
import { stores } from './singletons/datastores';

const co    = require('co'),
  fs        = require('fs'),
  chalk     = require('chalk'),
  program   = require('commander'),
  pkg       = require('../package.json');

// Start Nodejs REPL + Load nedb-shell module
const launch = () => {
  const repl = require('repl').start({
    prompt: chalk.green('> '),
    useGlobal: true,
    ignoreUndefined: true
  });

  for (let nedb_shell of ['show','db']) {
    repl.context[nedb_shell] = require(`./${nedb_shell}`);
  }
};

const loadDatastores = (dir: string) => {
  fs.readdir(dir, (err: any, directories: any) =>{
    try {
      for( dir of directories){
        console.log(dir);
        //stores.addStore(dir);
      }
    } catch(e){
      console.log(e);
    }
  });
};

program
.usage(`'Path to your NeDB database'

  Example Path: '../~/databaseName'`)
.version(` NeDB: ${pkg.dependencies.nedb} \n NeDB-Shell: ${pkg.version}`);

program
.action(function (directory: any) {
  co(function *(): Iterable<string> {

    path.prop = directory;

    loadDatastores(directory);

    console.log(chalk.blue(`NeDB Shell: ${new Date()}`));

    launch();
  })
})
.parse(process.argv);

if (!process.argv.slice(2).length) {
  program.outputHelp((txt: any) => chalk.red(txt));
}
