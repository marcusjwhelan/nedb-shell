import { getDB } from '../../index';
import { dropFile, dropFromObject } from '../datastore/drop';
import { requiredDatastore } from '../interfaces';
import { DATASTORES } from '../../singletons';
import * as chalk from 'chalk';
import { getMatchingArrayItems,
 getNonMatchingArrayItems} from '../../helpers';

export function Drop(set?:string[]):void{
  const db = getDB();
  const stores = DATASTORES.getInstance();
  let currentStores = stores.prop;

  if(set instanceof Array){
    let matchingItems:string[] = [];
    let nonMatchignItems:any = [];

    getMatchingArrayItems(currentStores, set,(matched:string[]):void => {
      matchingItems = [...matched];
    });
    getNonMatchingArrayItems(currentStores, set,(noMatch:string[]):void => {
      nonMatchignItems = [...noMatch];
    });

    if(nonMatchignItems.length > 0 ){
      console.log(chalk.yellow(`Warning: [${nonMatchignItems}] are not datastores in this directory.\nIf others in list, they will be removed.`));
    }

    for(let item of matchingItems){
      let dataStore:requiredDatastore = {
        inMemory: false,
        autoload: true,
        filename: `${item}.db`
      };
      dropFile(dataStore);
      dropFromObject(dataStore);
    }
    console.log(`Removed datastores [${matchingItems}]`);
  } else {
    if(set){
      console.log(chalk.red(`Error: Input must be of type Array to drop a select list or none to drop all.`))
    } else {
      // drop all .db files
      for(let item of currentStores){
        let dataStore:requiredDatastore = {
          inMemory: false,
          autoload: true,
          filename: `${item}.db`
        };
        dropFile(dataStore);
        dropFromObject(dataStore);
      }
      console.log(`Removed datastores [${currentStores}]`);
    }
  }
}
