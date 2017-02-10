export interface replyInterface{
  changed?:number;
  affectedDocument?:upsertedDocument;
  affectedDocuments?:upsertedDocument[];
  upsert?:boolean;
}

export interface updateOptionsInterface{
  multi?:boolean;
  upsert?:boolean;
  returnUpdateDocs?:boolean;
}

export interface upsertedDocument{
  _id?:string;
}
