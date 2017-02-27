
// a_1 is the array to be compared against
// a_2 is the array to compare and receive an output

export function getNonMatchingArrayItems(a_1:any[],a_2:any[],cb?:any):void{
  let returnArray:any[] = [];
  for(let item of a_2){
    if(a_1.indexOf(item) === -1){
      returnArray.push(item);
    }
  }
  cb(returnArray)
}
