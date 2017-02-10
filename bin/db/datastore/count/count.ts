
import * as chalk from 'chalk';

const countCB = function ( err:Error, count:string ):void {
  if(err) {
    console.log(chalk.red(`${err}`));
  } else {
    console.log(chalk.yellow(count));
  }
};

export function printCount(){
  this.count({},countCB);
}
