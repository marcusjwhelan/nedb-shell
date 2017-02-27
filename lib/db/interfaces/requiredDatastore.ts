export interface requiredDatastore{
  inMemory: boolean;
  autoload: boolean;
  filename: string;

  // functions
  Insert?: any;
  InsertMany?: any;
  Find?: any;
  FindOneAndUpdate?: any;
  FindOneAndRemove?: any;
  FindOne?: any;
  Update?: any;
  UpdateMany?: any;
  Remove?: any;
  EnsureIndex?: any;
  RemoveIndex?: any;
  Count?: any;
  Drop?: any;
}
