import * as chalk from 'chalk';
import { replyInterface, upsertedDocument } from './interfaces';

export function autoReply( err:Error, numAffected:number, affectedDocuments?:upsertedDocument, upsert?:boolean ) {
  let replyObject:replyInterface = {};
  if(err) {
    console.log(chalk.red(`${err}`));
  } else {
    if(upsert){
      replyObject.changed = numAffected;
      replyObject.affectedDocument = (affectedDocuments)? affectedDocuments : 0;
      replyObject.upsert = upsert;
    } else if(!upsert){
      replyObject.changed = numAffected;
      replyObject.affectedDocument = {};
      replyObject.affectedDocuments = [];
      if(Array.isArray(affectedDocuments)){
        affectedDocuments.forEach(function(doc:upsertedDocument){
          replyObject.affectedDocuments.push(doc._id);
        });
      } else if(affectedDocuments){
        replyObject.affectedDocument = affectedDocuments._id;
      }
      replyObject.upsert = false;
    }
    console.log(replyObject);
  }
}
