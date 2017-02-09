
import * as NeDBDataStore from "nedb";
import NeDB = NeDBDataStore;

export class Cursor extends NeDB{
  private cursor: Cursor;
  private _sort: {} = null;
  private _skip: number = 0;
  private _limit: number = 20;

  constructor(cursor: any){
    super();
    this.cursor = cursor;
  }

  Sort(obj: {}): Cursor{
    this._sort = obj;
    return this;
  }

  Skip(n: number): Cursor{
    this._skip = n;
    return this;
  };

  Limit(n: number): Cursor {
    this._limit = n;
    return this;
  }

  Exec(cb: any) {
    this.cursor
    .Skip(this._skip)
    .Limit(this._limit);

    if(this._sort) this.cursor.Sort(this._sort);

    cb ? this.cursor.Exec(cb) :
      this.cursor.Exec(function (results: any) {
        console.log(JSON.stringify(results, null, 2));
      });
  }
}
