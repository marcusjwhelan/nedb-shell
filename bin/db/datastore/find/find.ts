
import * as chalk from 'chalk';
import { Cursor } from '../cursor/cursor';

export function printFind(query: {}, projection?: {}, cb?:any):Cursor{
  if(arguments.length < 2){
    projection = {};
  }
  const nedbCursor: any = this.find(query, projection, (cb?cb:null));
  return new Cursor(nedbCursor);
}
