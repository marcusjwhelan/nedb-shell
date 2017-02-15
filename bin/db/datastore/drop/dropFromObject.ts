import { requiredDatastore } from './interfaces'
import { getDB } from '../../../index';

export function dropFromObject(store:requiredDatastore){
  const file = store.filename.split('.')[0];
  const db = getDB();

  delete db[file];
}
