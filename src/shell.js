'use strict';
const co      = require('co'),
      prompt  = require('co-prompt'),
      program = require('commander'),
      pkg     = require('../package.json'),
      fs      = require('fs'),
      chalk   = require('chalk'),
      path    = require('./db/path'),
      
      LoadDataStore = require('./db/loadDatastore');



const done = () => {
  const repl = require('repl').start({
    prompt: chalk.green('> '),
    useGlobal: true,
    ignoreUndefined: true
  });
  
  // Import all necessary modules into node shell
  /*
  *    Example of moduleA and moduleB
  *
  *    > moduleA.echo('test')
  *    echo from A test
  *
  *    > moduleB.add(2,3)
  *    5
  *
  * */
  for (let myModule of ['moduleA', 'moduleB', 'db']) {
    repl.context[myModule] = require(`./${myModule}`);
  }
};

// load all datastores
const loadDatastores = (dir) => {
  fs.readdir(dir, (err, files) => {
    files.forEach(file => {
      let q = {};
      q.filename = file;
      LoadDataStore(q)
    })
  })
};


program
  .usage('<Datastore directory path...>')
  .version(` NeDB: ${pkg.dependencies.nedb} \n NeDB-Shell: ${pkg.version}`);

program
  .action(function (directory) {
    co(function *() {
      path.prop = directory;
      
      // need to call a method to load all databases in that directory if they exist;
      loadDatastores(directory);
      
      // Anything that needs to be done before node process starts
     /* console.log(('ls all datastores in directory'));
      
      console.log("which datastore would you like to use?");
      
      let input = yield prompt(chalk.green('> '));
      
      console.log(chalk.blue(`Datastore chosen: ${chalk.white(input)} in ${chalk.white(directory)}`));*/
  
      console.log(chalk.blue(`NeDB Shell: ${new Date()}`));
      // -----------------------------------------------------
      
      // Once all necessary data has been gathered launch node
       done();
      // -----------------------------------------------------
    })
  })
  .parse(process.argv);

// Display red help if no arguments entered
if (!process.argv.slice(2).length) {
  program.outputHelp(txt => chalk.red(txt));
}

