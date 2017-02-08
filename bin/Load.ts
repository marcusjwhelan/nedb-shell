const repl = require('repl');
import * as db from './db';
export function Load():void {
  for(let nedb_shell of ['db','help','show']){
    repl.context[nedb_shell] = require(`./${nedb_shell}`);
  }
}
