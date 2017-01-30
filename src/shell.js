const co      = require('co'),
      prompt  = require('co-prompt'),
      program = require('commander'),
      chalk   = require('chalk');

program
  .arguments('<file>')
  .action(function (file) {
    co(function *() {
      let input = yield prompt(chalk.green('> '));
      console.log('input: %s file: %s', input, file);
    })
  })
  .parse(process.argv);
