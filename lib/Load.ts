//const repl = require('repl');
const moment = require('moment')

export function Load(repl:any){
  for(let nedb_shell of ['db','show']){
    repl.context[nedb_shell] = require(`./${nedb_shell}`);
  }
}
