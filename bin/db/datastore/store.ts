// A constructor for a Store = mongodb collection.

import { DataStore } from '../interfaces';
import NeDB = NeDBDataStore;
import * as NeDBDataStore from "nedb";

import { insert, GenericInsert } from './insert';

export class Store extends NeDBDataStore{
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
    });

    this.insert = insert;
    /*this.find = find;
    this.findOne = findOne;
    this.update = update;
    this.count = count;
    this.remove = remove;*/


  };
}

