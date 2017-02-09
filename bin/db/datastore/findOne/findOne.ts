// db.datastore.findOne(query)  =  mongo db.collection.findOne(query)
import * as chalk from 'chalk';
import { Cursor } from '../cursor';

const findOneCB = function (err:Error, doc:{}) {
  if(err) console.log(chalk.red(`${err}: \n An error occurred during FindOne`));
  console.log(JSON.stringify(doc, null, 2));
};

export function printFindOne(query:{}, projection?: {}, cb?: any):Cursor{
  if(arguments.length < 2){
    projection = {};
  }
  const nedbCursor: any = this.findOne(query, projection, findOneCB);
  return new Cursor(nedbCursor);
}
