import { updateOptionsInterface, autoReply } from './../update';
import * as chalk from 'chalk';

export function FindOneAndUpdate(findQuery:{},updateQuery:{}, updateOptions?:updateOptionsInterface, cb?:any){

  this.findOne(findQuery,{},(err:Error,doc:{})=> {
    if(err){
      console.log(chalk.red(`${err}`));
    } else {
      if(!updateOptions) updateOptions = {};
      updateOptions.multi = false;
      this.update(doc,updateQuery,updateOptions,(cb?cb:autoReply));
    }
  });
}
