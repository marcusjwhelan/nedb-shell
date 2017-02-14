import { DATASTORES } from '../../singletons';

export function show():void{
  const stores = DATASTORES.getInstance();
  let storesArray = stores.prop;
  for(let store of storesArray){
    console.log(store);
  }
}
