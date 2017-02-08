// A constructor for a Store = mongodb collection.

import * as Nedb from 'nedb';
import { DataStore } from '../interfaces';

export class Store extends Nedb{
  constructor(query: DataStore){
    super({
      filename: query.filename,
      inMemoryOnly: query.inMemoryOnly,
      autoload: query.autoload,
      onload: query.onload,
     // nodeWebkitAppName: query.nodeWebkitAppName, jack wagon can make a types file
      afterSerialization: query.afterSerialization,
      beforeDeserialization: query.beforeDeserialization,
      corruptAlertThreshold: query.corruptAlertThreshold
    })
  }
}

