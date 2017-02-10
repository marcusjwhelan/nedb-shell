
import * as chalk from 'chalk';

interface replyInterface{
  changed?:number;
  affectedDocument?:{}|{}[];
  upsert?:boolean;
}

const autoReply = function ( err:Error, numAffected:number, affectedDocuments?:{}|{}[], upsert?:boolean ) {
  let replyObject:replyInterface = {};
  if(err) console.log(chalk.red(`${err}: \n An error occurred during Update`));

  if(upsert){
    replyObject.changed = numAffected;
    replyObject.affectedDocument = (affectedDocuments)? affectedDocuments : 0;
    replyObject.upsert = upsert;
  } else if(!upsert){
    replyObject.changed = numAffected;
    replyObject.affectedDocument = [];
    replyObject.upsert = false;
  }

  console.log(replyObject);
};

export function updateDocs(query: {}, updateQuery:{}, updateOptions?:{},cb?:any ){
  if(!updateOptions) updateOptions = {};
  this.update(query,updateQuery,updateOptions,(cb?cb:autoReply));
}
