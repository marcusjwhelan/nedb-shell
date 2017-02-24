"use strict";
var db = require("../../bin/db/index");
var chai_1 = require("chai");
require("mocha");
describe('Load DB object', function () {
    it('should return an Object with certain properties', function () {
        chai_1.expect(db).to.have.all.keys('createDatastore', 'show', 'Help');
    });
});
