
import { Editable } from '../decorators';

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
