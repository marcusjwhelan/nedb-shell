import * as chalk from 'chalk';
import { indexOptions } from './interfaces';

const autoLog = function ( err:Error ) {
  if(err){
    console.log(chalk.red(`${err}`));
  } else {
    console.log("Success")
  }
};

export function ensureDocIndex(options:indexOptions,cb?:any){
  this.ensureIndex(options,(cb?cb:autoLog));
}
