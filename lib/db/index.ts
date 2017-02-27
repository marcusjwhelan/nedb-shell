import { createDatastore } from './createDatastore';
import { Show } from './show';
import { Help } from './help';
import { Drop } from './drop';

const db:any = {
  createDatastore,
  Show,
  Drop,
  Help
};

export = db;
