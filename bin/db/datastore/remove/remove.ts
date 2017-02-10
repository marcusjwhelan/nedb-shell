
import * as chalk from 'chalk';
import { queryOptionsInterface, returnObj} from './interfaces';

const removeCB = function ( err:Error, numRemoved:number) {
  if(err) console.log(chalk.red(`${err}: \n An error occurred during Update`));
  const returnObj:returnObj = {removed: 0};
  returnObj.removed = numRemoved;
  console.log(returnObj);
};

export function removeDocs(query: {}, queryOptions: queryOptionsInterface,cb?:any ){
  if(!queryOptions) queryOptions = {};
  this.remove(query, queryOptions, (cb?cb:removeCB));
}
