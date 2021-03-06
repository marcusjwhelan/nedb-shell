import * as chalk from 'chalk';

const insertCB = function (err:Error, doc:any) {
  if(err){
    console.log(chalk.red(`${err}`));
  } else {
    console.log(JSON.stringify(doc, null, 2));
  }
};

export function printInsert(newDoc:{}, cb?:any):void{
  this.insert(newDoc, (cb?cb:insertCB));
}
