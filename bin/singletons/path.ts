// To import this singleton instance use
// import { path } from 'this path';

export class PATH {
  private _path: string = '';

  get prop(): string{
    return this._path;
  }

  set prop(path: string){
    this._path = path;
  }
}

export let path = new PATH();

/* AVOID */
// To create a new class PATH use
// import { PATH } from 'this path';
// let urVar = new PATH();
