// To import this singleton instance use
// import { path } from 'this path';

import { Editable } from '../decorators/factories/editable';
/*export class PATH {
  private _path: string = '';

  get prop(): string{
    return this._path;
  }

  set prop(path: string){
    this._path = path;
  }
}

export let path = new PATH();*/

export class PATH {
  private static instance: PATH;
  private _path: string = '';

  @Editable(false)
  static getInstance(){
    if(!PATH.instance){
      PATH.instance = new PATH();
    }
    return PATH.instance;
  }

  get prop(): string{
    return this._path;
  }

  set prop(path: string){
    this._path = path;
  }
}

/* AVOID */
// To create a new class PATH use
// import { PATH } from 'this path';
// let urVar = new PATH();
