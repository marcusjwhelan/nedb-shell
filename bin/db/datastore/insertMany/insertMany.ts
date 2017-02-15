export function InsertMany(newDocs:{}[], cb?:any):void{
  for(let item of newDocs ){
    this.insert(item);
  }
}
