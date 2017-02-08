import * as chalk from 'chalk';
export let repl = require('repl').start({
  prompt: chalk.green('> '),
  useGlobal: true,
  ignoreUndefined: true
});
