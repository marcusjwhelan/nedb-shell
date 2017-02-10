
import * as chalk from 'chalk';
import { replyInterface, updateOptionsInterface, upsertedDocument } from './interfaces';

const autoReply = function ( err:Error, numAffected:number, affectedDocuments?:upsertedDocument, upsert?:boolean ) {
  let replyObject:replyInterface = {};
  if(err) console.log(chalk.red(`${err}: \n An error occurred during Update`));

  if(upsert){
    replyObject.changed = numAffected;
    replyObject.affectedDocument = (affectedDocuments)? affectedDocuments : 0;
    replyObject.upsert = upsert;
  } else if(!upsert){
    replyObject.changed = numAffected;
    if(affectedDocuments){
      replyObject.affectedDocument = affectedDocuments._id;
    }
    replyObject.upsert = false;
  }

  console.log(replyObject);
};

export function updateDocs(query: {}, updateQuery:{}, updateOptions?:updateOptionsInterface,cb?:any ){
  if(!updateOptions) updateOptions = {};
  this.update(query,updateQuery,updateOptions,(cb?cb:autoReply));
}
