const co      = require('co'),
      prompt  = require('co-prompt'),
      program = require('commander'),
      pkg     = require('../package.json'),
      chalk   = require('chalk'),
      mod     = require('./shell3'),
      repl    = require('repl');


program
  .usage('[options] <file ...>')
  .version(` NeDB: ${pkg.dependencies.nedb} \n NeDB-Shell: ${pkg.version}`);

program
  .arguments('<file>')
  .action(function (file) {
    co(function *() {
      /*let input = yield prompt(chalk.green(`> `));
      console.log('input: %s Path: %s', input, file);*/
      
      console.log(('here I will output the databases?'));
      console.log("which datastore would you like to use?");
      let input = yield prompt(chalk.green('> '));
      console.log(chalk.blue(`Datastore chosen: ${chalk.white(input)}, in ${chalk.white(file)}.`));
      
      function myEval(cmd, context, filename, callback) {
        callback(null, mod(cmd));
      }
  
      repl.start({prompt: chalk.green('> '), eval: myEval});
    })
  })
  .parse(process.argv)

// Display red help if no arguments entered
if (!process.argv.slice(2).length) {
  program.outputHelp(txt => chalk.red(txt));
}


/*#!/usr/bin/env node --harmony
 require('./src/shell2');*/
