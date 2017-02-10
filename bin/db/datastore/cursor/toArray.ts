import * as chalk from 'chalk';

export function _toArray():{}[]{
  let returnArray: {}[] = [];
  if(this._sort) this.cursor.sort(this._sort);

  this.cursor
      .skip(this._skip)
      .limit(this._limit)
      .exec(function ( err:Error, docs:{}[] ) {
        if(err){
          console.log(chalk.red(`${err}, \nAn error occurred while trying to use the toArray cursor function`));
        } else {
          docs.forEach(function ( doc ) {
            returnArray.push(doc);
          })
        }
      });
  return returnArray
}
