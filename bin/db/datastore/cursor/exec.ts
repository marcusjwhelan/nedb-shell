import * as chalk from 'chalk';

export function _Exec(cb?:any){
  if(this._sort) this.cursor.sort(this._sort);

  if(cb){
    this.cursor
        .skip(this._skip)
        .limit(this._limit)
        .exec(cb);
  } else {
    this.cursor
        .skip(this._skip)
        .limit(this._limit)
        .exec(function ( err:Error, docs:{}[] ) {
          if(err){
            console.log(chalk.red(`${err}, \n An error occurred while trying to use the exec cursor function`));
          } else {
            console.log(JSON.stringify(docs,null,2));
          }
        })
  }
}
