'use strict';
const co      = require('co'),
  program = require('commander'),
  pkg     = require('../package.json'),
  fs      = require('fs'),
  chalk   = require('chalk');


// Start Nodejs REPL + Load nedb-shell module
const done = () => {
  const repl = require('repl').start({
    prompt: chalk.green('> '),
    useGlobal: true,
    ignoreUndefined: true
  });

  for (let nedb_shell of ['yep']) {
    repl.context[nedb_shell] = require(`./${nedb_shell}`);
  }
};


program
.usage('<Datastore directory path...>')
.version(` NeDB: ${pkg.dependencies.nedb} \n NeDB-Shell: ${pkg.version}`);

program
.action(function (directory: any) {
  co(function *(): Iterable<string> {

    console.log(directory);

    console.log(chalk.blue(`NeDB Shell: ${new Date()}`));

    done();
  })
})
.parse(process.argv);

if (!process.argv.slice(2).length) {
  program.outputHelp((txt: any) => chalk.red(txt));
}
