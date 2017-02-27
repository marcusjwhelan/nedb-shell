
// a_1 is the array to be compared against
// a_2 is the array to compare and receive an output

export function getMatchingArrayItems(a_1:any[],a_2:any[],cb?:any):void{
  let returnArray:any[] = [];
  for(let item_1 of a_1){
    for(let item_2 of a_2){
      if(item_1 === item_2){
        returnArray.push(item_2);
      }
    }
  }
  cb(returnArray)
}
