import { DS } from '../db';
import { Store } from './store';
import * as fs from 'fs'
import * as path from 'path';


export function LoadDataStores(){
  fs.readdirSync(process.cwd())
  .forEach((store:string) => {
    const name = store.split('.')[0];
    const file = path.join(process.cwd(),store);

    DS[name] = new Store(file);
  })
}
