'use strict';
const co      = require('co'),
      prompt  = require('co-prompt'),
      program = require('commander'),
      pkg     = require('../package.json'),
      chalk   = require('chalk');



const done = () => {
  const repl = require('repl').start({prompt: chalk.green('> '), useGlobal: true});
  
  // Import all necassary modules into node shell
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

program
  .usage('[options] <file ...>')
  .version(` NeDB: ${pkg.dependencies.nedb} \n NeDB-Shell: ${pkg.version}`);

program
  .arguments('<file>')
  .action(function (file) {
    co(function *() {
      
      // Anything that needs to be done before node process starts
      console.log(('here I will output the databases?'));
      
      console.log("which datastore would you like to use?");
      
      let input = yield prompt(chalk.green('> '));
      
      console.log(chalk.blue(`Datastore chosen: ${chalk.white(input)}, in ${chalk.white(file)}.`));
  
      console.log(`NeDB Shell: ${new Date()}
Hello Travis`)
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

