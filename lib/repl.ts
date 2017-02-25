import * as chalk from 'chalk';
import { Cursor } from './db/datastore/cursor/cursor';
import * as util from 'util';

export let repl = require('repl').start({
  prompt: chalk.green('> '),
  useGlobal: true,
  ignoreUndefined: true,
  writer: (output: any) => {
    if(output instanceof Cursor) {
      return output.pretty();
    }
    else {
      return util.inspect(output);
    }
  }
});
