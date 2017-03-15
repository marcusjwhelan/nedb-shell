import * as fs from 'fs';
import { Stats } from 'fs';

export function watch_this(_dir:string):void {

  //console.log(process.cwd());
  let watcher = fs.watch(_dir,  { persistent: true });

  watcher.on('change',(event:string,filename:string) => {
    if(event === 'change'){
      console.log("THIS ONE")
    }
    console.log(event);
  })
}
