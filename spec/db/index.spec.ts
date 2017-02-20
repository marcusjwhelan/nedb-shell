import * as db from '../../bin/db/index';

import { expect } from 'chai';
import 'mocha';


describe('Load DB object', () => {
  it('should return an Object with certain properties', () => {
    expect(db).to.have.all.keys('createDatastore','show','Help');
  })
});
