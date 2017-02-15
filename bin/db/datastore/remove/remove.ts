
import * as chalk from 'chalk';
import { queryOptionsInterface, returnObj} from './interfaces';

export const removeCB = function ( err:Error, numRemoved:number) {
  const returnObj:returnObj = {removed: 0};
  if(err) {
    console.log(chalk.red(`${err}`));
  } else {
    returnObj.removed = numRemoved;
    console.log(returnObj);
  }
};

export function removeDocs(query: {}, queryOptions: queryOptionsInterface,cb?:any ):void{
  if(!queryOptions) queryOptions = {};
  this.remove(query, queryOptions, (cb?cb:removeCB));
}
