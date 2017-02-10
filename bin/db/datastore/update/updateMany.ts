import * as chalk from 'chalk';
import { replyInterface, updateOptionsInterface, upsertedDocument } from './interfaces';

const autoReply = function ( err:Error, numAffected:number, affectedDocuments?:any, upsert?:boolean ) {
  let replyObject:replyInterface = {};
  if(err) console.log(chalk.red(`${err}: \n An error occurred during Update`));

  if(upsert){
    replyObject.changed = numAffected;
    replyObject.affectedDocument = (affectedDocuments)? affectedDocuments : 0;
    replyObject.upsert = upsert;
  } else if(!upsert){
    replyObject.changed = numAffected;
    replyObject.affectedDocument = {};
    replyObject.affectedDocuments = [];
    if(affectedDocuments.length > 1){
      affectedDocuments.forEach(function(doc:upsertedDocument){
        replyObject.affectedDocuments.push(doc._id);
      });
    } else if(affectedDocuments){
      replyObject.affectedDocument = affectedDocuments._id;
    }
    replyObject.upsert = false;
  }

  console.log(replyObject);
};

export function updateManyDocs(query: {}, updateQuery:{}, updateOptions?:updateOptionsInterface,cb?:any ){
  if(!updateOptions) updateOptions = {multi: true};

  if((updateOptions.hasOwnProperty('returnUpdatedDocs') ||
    updateOptions.hasOwnProperty('upsert')) &&
    !updateOptions.hasOwnProperty('multi')) {
    updateOptions.multi = true;
  }

  if(updateOptions.multi === false &&
    (updateOptions.hasOwnProperty('returnUpdatedDocs') ||
    updateOptions.hasOwnProperty('upsert') ||
    updateOptions.hasOwnProperty('multi'))){
    console.log(chalk.red(`You cannot set multi = false with UpdateMany(), please use Update() if you wish to only update one document`));
  } else {
    this.update(query,updateQuery,updateOptions,(cb?cb:autoReply));
  }
}
