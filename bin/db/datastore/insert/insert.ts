import * as chalk from 'chalk';

const insertCB = function (err:Error, doc:any) {
  if(err){
    console.log(chalk.red("An error occurred while trying to insert new document"));
  }
  console.log(JSON.stringify(doc, null, 2));
};

export function printInsert(newDoc:{}):void{
  this.insert(newDoc, insertCB);
}
