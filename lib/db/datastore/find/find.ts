
import { Cursor } from '../cursor';

export function printFind(query: {}, projection?: {}, cb?:any):Cursor{
  const nedbCursor: any = this.find(query, projection, (cb?cb:null));
  return new Cursor(nedbCursor);
}
