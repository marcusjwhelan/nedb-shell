import { noPrintInsert_Interface } from './noPrintInsert.Interface';

export function noPrintInsert(args: noPrintInsert_Interface):void{
  this.insert(args.newDoc, args.cb);
}
