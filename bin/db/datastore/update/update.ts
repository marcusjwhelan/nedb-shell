
import { updateOptionsInterface} from './interfaces';
import { autoReply } from './autoReply';

export function updateDocs(query: {}, updateQuery:{}, updateOptions?:updateOptionsInterface,cb?:any ){
  if(!updateOptions) updateOptions = {};
  this.update(query,updateQuery,updateOptions,(cb?cb:autoReply));
}
