import { path } from '../path';


export function show(){
  console.log(path.prop)
}

export function change(d: string){
  path.prop = d;
}
