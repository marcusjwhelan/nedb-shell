import * as chalk from 'chalk';

const findOneCB = function (err:Error, doc:{}):void {
  if(err) {
    console.log(chalk.red(`${err}`));
  } else {
    console.log(JSON.stringify(doc, null, 2));
  }
};

export function printFindOne(query:{}, projection?: {}, cb?: any):void{
  this.findOne(query, projection, (cb?cb:findOneCB));
}
