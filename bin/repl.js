"use strict";
var chalk = require("chalk");
exports.repl = require('repl').start({
    prompt: chalk.green('> '),
    useGlobal: true,
    ignoreUndefined: true
});
