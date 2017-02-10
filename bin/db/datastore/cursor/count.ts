import * as chalk from 'chalk';

export function _Count(){

  this.cursor.exec(function ( err:Error, docs:{}[] ) {
    if(err){
      console.log(chalk.red(`${err}, \n An error occurred during the count cursor function`));
    } else {
      console.log(chalk.yellow(docs.length+''));
    }
  });
}
