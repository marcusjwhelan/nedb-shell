import * as fs from 'fs';
import { Stats } from 'fs';

export function watch_this(_dir:string):void {

  //console.log(process.cwd());
  fs.watch(_dir,  { persistent: true }, (event:string, filename:string) => {
    if(filename){
      console.log(event,filename);
      console.log("change occurred");
    } else {
      console.log('filename not provided');
    }
  });

 /* watcher.on('change', (event:string,filename:string)=>{
    if(filename){
      console.log(event,filename);
    }
  })*/
}
