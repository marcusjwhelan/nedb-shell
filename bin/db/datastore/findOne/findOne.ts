//import { Cursor } from '../cursor';
import * as chalk from 'chalk';

const findOneCB = function (err:Error, doc:string):void {
  if(err) {
    console.log(chalk.red(`${err}`));
  } else {
    console.log(JSON.stringify(doc, null, 2));
  }
};

export function printFindOne(query:{}, projection?: {}, cb?: any):void{
  this.findOne(query, projection, (cb?cb:findOneCB));
}

/*export function printFindOne(query:{}, projection?:{}, cb?:any):Cursor{
  const nedbCursor: any = this.findOne(query,projection,(cb?cb:findOneCB));
  return new Cursor(nedbCursor);
}*/
