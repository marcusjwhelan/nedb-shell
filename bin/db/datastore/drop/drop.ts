import { dropFromObject } from './dropFromObject';
import { dropFile } from './dropFile';

export function drop(){
  dropFile(this);
  dropFromObject(this);
}
