
import * as chalk from 'chalk';

const autoLog = function ( err:Error ) {
  if(err){
    console.log(chalk.red(`${err}`));
  } else {
    console.log("Success")
  }
};

export function removeDocIndex(field:string,cb?:any){
  this.removeIndex(field,(cb?cb:autoLog));
}
