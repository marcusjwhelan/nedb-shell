// help()  =  mongo help

// help output  > [Function]
/*export = ():void => {
  console.log("hello");
}*/  // output > help() == "hello"


// help output > { help: [Function: help]}
/*export function help() {
  console.log("hello")
}*/ // output > help.help() == "hello"

const hi = ():void => {
  console.log("hllo")
};



export const db = {
  hi
};


class collection {
  private static instance: collection;
  private _prop: number = 0;

  constructor(){
    console.log("hello");
    if(!collection.instance){
      collection.instance = new collection();
    }
    return collection.instance;
  }

  /*static getInstance(){
   if(!collection.instance){
   collection.instance = new collection();
   }
   return collection.instance;
   }*/

  static add(a:number,b:number):number{
    console.log(this.instance._prop);
    return a+b;
  }
}


//export default new hmm();
