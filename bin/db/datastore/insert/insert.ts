import * as chalk from 'chalk';

export function printInsert(newDoc:{}):void{
  this.insert(newDoc, function (err:Error, doc:any) {
    if(err){
      console.log(chalk.red("An error occurred while trying to insert new document"));
    }
    console.log(chalk.green(JSON.stringify(doc, null, 2)));
  });
}
