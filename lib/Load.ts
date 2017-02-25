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
}
