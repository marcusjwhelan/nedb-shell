import { Editable } from '../decorators';

export class FUNCTIONS {
  private static instance: FUNCTIONS;
  private _functions: Array<string> = [];

  get prop(): Array<string>{
    return this._functions;
  }

  @Editable(false)
  resetFunctions(){
    this._functions = [];
  }

  @Editable(false)
  static getInstance(){
    if(!FUNCTIONS.instance){
      FUNCTIONS.instance = new FUNCTIONS();
    }
    return FUNCTIONS.instance;
  }
  @Editable(false)
  addFunction(func:string){
    this._functions.push(func);
  }

  @Editable(false)
  dropFunction(func:string){
    let index:number = this._functions.indexOf(func);
    this._functions.splice(index,1);
  }
}
