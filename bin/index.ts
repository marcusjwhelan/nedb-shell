'use strict';

const co      = require('co'),
  chalk = require('chalk'),
  program = require('commander'),
  pkg     = require('../package.json');

// Start Nodejs REPL + Load nedb-shell module
const launch = () => {
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

    launch();
  })
})
.parse(process.argv);

if (!process.argv.slice(2).length) {
  program.outputHelp((txt: any) => chalk.red(txt));
}
