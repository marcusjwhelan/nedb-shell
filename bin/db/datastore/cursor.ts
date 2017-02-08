export class Cursor{
  private cursor: any;
  private _sort: {} = null;
  private _skip: number = 0;
  private _limit: number = 20;

  constructor(cursor: any){
    this.cursor = cursor;
  }

  sort(obj: {}): Cursor{
    this._sort = obj;
    return this;
  }

  skip(n: number): Cursor {
    this._skip = n;
    return this;
  }

  limit(n: number): Cursor {
    this._limit = n;
    return this;
  }

  exec(cb: {}) {
    this.cursor
    .skip(this._skip)
    .limit(this._limit);

    if(this._sort) this.cursor.sort(this._sort);

    cb ? this.cursor.exec(cb) :
      this.cursor.exec(function (results: any) {
        console.log(JSON.stringify(results, null, 2));
      });
  }
}
