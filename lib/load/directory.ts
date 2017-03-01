import { Function } from './function';
import * as fs from 'fs';
import ErrnoException = NodeJS.ErrnoException;

export const Directory = (pathTo:string):void => {

  if(process.platform !== 'win32'){
    try{
      fs.readdir(pathTo, (err: ErrnoException, dir:string[]) => {
        if(err) throw err;
        dir.forEach((file:string) => {
          if(file.split('.')[1] === 'js'){
            Function(`${pathTo}/${file}`);
          }
        })
      });
    } catch(e){
      console.log(e);
    }
  } else {
    // if someone would like to let me know the windows way to import a js file.
  }

};
