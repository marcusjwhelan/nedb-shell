import { Editable } from '../decorators';

export class DATASTORES {
  private static instance: DATASTORES;
  private _stores: Array<string> = [];

  get prop(): Array<string>{
    return this._stores;
  }

  @Editable(false)
  static getInstance(){
    if(!DATASTORES.instance){
      DATASTORES.instance = new DATASTORES();
    }
    return DATASTORES.instance;
  }

  @Editable(false)
  addStore(store: string){
    this._stores.push(store);
  }

  @Editable(false)
  addStores(stores: Array<string>){
    this._stores.push(...stores);
  }
}

