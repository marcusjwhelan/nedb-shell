import { requiredDatastore } from './interfaces';
import { DATASTORES } from '../../../singletons';
import * as fs from 'fs';
import * as chalk from 'chalk';

export function dropFile(store:requiredDatastore){
  let stores = DATASTORES.getInstance();
  const file = store.filename.split('.')[0];

  let currentStores = stores.prop;
  let newStores = currentStores.filter((value) => file !== value);

  stores.resetStore();
  stores.addStores(newStores);

  fs.exists(`./${store.filename}`, function ( exists ) {
    if(exists){
      fs.unlinkSync(`./${store.filename}`);
    } else {
      console.log(chalk.red(`File: ${store.filename} was not found.`));
    }
  })
}
