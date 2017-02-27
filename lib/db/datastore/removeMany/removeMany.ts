import { queryOptionsInterface, removeCB } from '../remove';

export function RemoveMany(query: {}, cb?:any):void {
  let queryOptions:queryOptionsInterface = { multi: true };
  this.remove(query,queryOptions,(cb?cb:removeCB))
}
