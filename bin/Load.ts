//const repl = require('repl');

export function Load(repl:any){
  for(let nedb_shell of ['db','help','show']){
    repl.context[nedb_shell] = require(`./${nedb_shell}`);
  }
}
