//const repl = require('repl');
const moment = require('moment'),
  lodash     = require('lodash');

export function Load(repl:any){
  for(let nedb_shell of ['db','show']){
    repl.context[nedb_shell] = require(`./${nedb_shell}`);
  }

  //Include helper modules
  repl.context['_'] = lodash;
  repl.context.moment = moment;

  //Clear REPL function
  repl.context.clear = function () {
    process.stdout.write('\x1B[2J\x1B[0f\u001b[0;0H');
  }
}
