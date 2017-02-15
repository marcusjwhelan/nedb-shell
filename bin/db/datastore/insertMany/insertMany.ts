import * as chalk from 'chalk';

const insertManyCB = function ( err:Error, docs:{}[] ) {
  if(err){
    console.log(chalk.red(`${err}`));
    console.log(JSON.stringify(docs,null,2));
  }
};

export function InsertMany(newDocs:{}[], cb?:any):void{
  for(let item of newDocs ){
    this.insert(item, (cb?cb:insertManyCB));
  }
}
