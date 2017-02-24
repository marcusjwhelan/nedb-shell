import * as chalk from 'chalk';
import { removeCB } from '../remove';
export function FindOneAndRemove(findQuery:{},show?:boolean):void{
  this.findOne(findQuery,(err:Error, doc:{}) => {
    if(err){
      console.log(chalk.red(`${err}`));
    } else {
      if(show){
        console.log(`Document being removed
${JSON.stringify(doc,null,2)}`);
      }
      this.remove(doc,removeCB);
    }
  });
}
