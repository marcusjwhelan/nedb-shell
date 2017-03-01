import { getRepl } from '../index';
import { FUNCTIONS } from '../singletons';

export const Function = (pathTo:string):void => {
  let myFuncitons = FUNCTIONS.getInstance();

  if(process.platform !== 'win32'){
    let n = pathTo.lastIndexOf('/');
    let jsName = pathTo.substring(n + 1);
    let file = jsName.split('.');
    let ext = file[1];
    let name = file[0];
    if(ext === 'js'){
      myFuncitons.addFunction(name);
      let repl = getRepl();
      repl.context[name] = require(pathTo);
    }
  } else {
    // if someone would like to let me know the windows way to import a js file.
  }

};
