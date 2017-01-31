#!/us/bin/env node --harmony
'use strict';

/*
const repl = require('repl'),
      cli = repl.start({ replMode: repl.REPL_MODE_STRICT}),
      nedbShell = require('./shell3');

cli.context.nedbShell = nedbShell;
*/

const repl = require('repl'),
      mod = require('./shell3'),
      chalk   = require('chalk');


function myEval(cmd, context, filename, callback) {
  callback(null, mod(cmd));
}

repl.start({prompt: chalk.green('> '), eval: myEval});
