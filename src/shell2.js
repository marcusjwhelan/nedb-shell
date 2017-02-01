
// dont delete. reference to how I got the repl to import custom modules.
'use strict';
const repl = require('repl').start({useGlobal: true});

for (let myModule of ['moduleA', 'moduleB']) {
  repl.context[myModule] = require(`./${myModule}`);
}

