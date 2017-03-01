import { FUNCTIONS } from '../singletons';

export const Show = () => {
  let myFunctions = FUNCTIONS.getInstance();
  let functions = myFunctions.prop;
  for(let func of functions){
    console.log(func);
  }
};
