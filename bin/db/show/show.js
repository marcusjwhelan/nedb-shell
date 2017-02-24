"use strict";
var singletons_1 = require("../../singletons");
function show() {
    var stores = singletons_1.DATASTORES.getInstance();
    var storesArray = stores.prop;
    for (var _i = 0, storesArray_1 = storesArray; _i < storesArray_1.length; _i++) {
        var store = storesArray_1[_i];
        console.log(store);
    }
}
exports.show = show;
