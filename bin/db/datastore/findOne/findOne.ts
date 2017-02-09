// db.datastore.findOne(query)  =  mongo db.collection.findOne(query)
import * as chalk from 'chalk';

const findOneCB = function (err:Error, doc:string):void {
  if(err) console.log(chalk.red(`${err}: \n An error occurred during FindOne`));
  console.log(JSON.stringify(doc, null, 2));
};

export function printFindOne(query:{}, projection?: {}, cb?: any):void{
  if(arguments.length < 2){
    projection = {};
  }
  this.findOne(query, projection, (cb?cb:findOneCB));
}
