'use strict';
const co      = require('co'),
      prompt  = require('co-prompt'),
      program = require('commander'),
      pkg     = require('../package.json'),
      fs      = require('fs'),
      chalk   = require('chalk'),
      path    = require('./db/path'),
      LoadDataBases = require('./show/loadDatabases');


// Start Nodejs REPL + Load nedb-shell module
const done = () => {
  const repl = require('repl').start({
    prompt: chalk.green('> '),
    useGlobal: true,
    ignoreUndefined: true
  });

  for (let nedb_shell of ['db','show']) {
    repl.context[nedb_shell] = require(`./${nedb_shell}`);
  }
};

const loadDatabases = (dir) => {
  fs.readdir(dir, (err, directories) => {
    try{
      directories.forEach(dir => {
        LoadDataBases(dir);
      })
    } catch(e){
      
    }
    
  })
};


program
  .usage('<Datastore directory path...>')
  .version(` NeDB: ${pkg.dependencies.nedb} \n NeDB-Shell: ${pkg.version}`);

program
  .action(function (directory) {
    co(function *() {
      
      path.prop = directory;
      
      loadDatabases(directory);
  
      console.log(chalk.blue(`NeDB Shell: ${new Date()}`));

       done();
    })
  })
  .parse(process.argv);

if (!process.argv.slice(2).length) {
  program.outputHelp(txt => chalk.red(txt));
}

