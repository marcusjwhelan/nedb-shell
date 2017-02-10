// A constructor for a Store = mongodb collection.

import { DataStore } from '../interfaces';
import NeDB = NeDBDataStore;
import * as NeDBDataStore from "nedb";

import {
  printInsert, noPrintInsert,
  printFindOne, printFind, printCount,
  updateDocs, updateManyDocs, removeDocs
} from '../datastore';

export class Store extends NeDBDataStore{
  constructor(query: DataStore){
    super({
      filename: query.filename,
      inMemoryOnly: query.inMemoryOnly,
      autoload: query.autoload,
      onload: query.onload,

      afterSerialization: query.afterSerialization,
      beforeDeserialization: query.beforeDeserialization,
      corruptAlertThreshold: query.corruptAlertThreshold
    });
  }

  Insert = printInsert;
  __insert = noPrintInsert; // Use internally

  FindOne = printFindOne;

  Find = printFind;

  Update = updateDocs;
  UpdateMany = updateManyDocs;

  Remove = removeDocs;

  Count = printCount;
}

