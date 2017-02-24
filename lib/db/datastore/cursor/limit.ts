
import { Cursor } from './index';

export function _Limit(obj: {}):Cursor{
  this._limit = obj;
  return this;
}
