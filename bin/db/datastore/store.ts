// A constructor for a Store = mongodb collection.

import { DataStore } from '../interfaces';
import NeDB = NeDBDataStore;
import * as NeDBDataStore from "nedb";

import {
  printInsert, noPrintInsert,
  printFindOne, printFind, printCount,
  updateDocs, updateManyDocs, removeDocs,
  ensureDocIndex, removeDocIndex, Drop,
  InsertMany
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
  __insert = noPrintInsert; // Use internally

  // Lowercase values exist with different functionality
  Insert = printInsert;
  FindOne = printFindOne;
  Find = printFind;
  Update = updateDocs;
  UpdateMany = updateManyDocs;
  Remove = removeDocs;
  EnsureIndex = ensureDocIndex;
  RemoveIndex = removeDocIndex;
  Count = printCount;
  // ----------------------------------------------------

  // Non-existing functionality from NeDB ---------------
  Drop = Drop;
  InsertMany = InsertMany;
  // ----------------------------------------------------
}

