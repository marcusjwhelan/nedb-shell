import { dropFromObject } from './dropFromObject';
import { dropFile } from './dropFile';

export function Drop(){
  dropFile(this);
  dropFromObject(this);
}
