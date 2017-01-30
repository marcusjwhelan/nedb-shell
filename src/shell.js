const co      = require('co'),
      prompt  = require('co-prompt'),
      program = require('commander'),
      Promise = require('bluebird'),
      pkg     = require('../package.json'),
      chalk   = require('chalk');


program
  .usage('[options] <file ...>')
  .version(` NeDB: ${pkg.dependencies.nedb} \n NeDB-Shell: ${pkg.version}`);

program
  .arguments('<file>')
  .action(function (file) {
    co(function *() {
      let input = yield prompt(chalk.green(`> `));
      console.log('input: %s Path: %s', input, file);
    })
  })
  .parse(process.argv)


// Display red help if no arguments entered
if (!process.argv.slice(2).length) {
  program.outputHelp(txt => chalk.red(txt));
}

