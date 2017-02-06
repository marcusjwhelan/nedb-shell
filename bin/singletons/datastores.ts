import { Editable } from '../decorators/factories/editable';

// To import this singleton instance use
// import { stores } from 'this path';

export class DATASTORES {
  private _stores: Array<string>;

  constructor(){
    this._stores = [];
  }

  get prop(): Array<string>{
    return this._stores;
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

export let stores = new DATASTORES();

/* AVOID */
// To create a new class DATASTORES use
// import { DATASTORES  } from 'this path';
// let urVar = new DATASTORES();
