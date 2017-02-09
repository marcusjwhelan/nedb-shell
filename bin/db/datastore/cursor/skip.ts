
import { Cursor } from './index';

export function _Skip(obj: {}):Cursor{
  this._skip = obj;
  return this;
}
