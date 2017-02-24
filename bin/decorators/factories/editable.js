"use strict";
/*
* Add @Editable(false) to a class method to make the contents of
* that function un-editable.
* */
function Editable(value) {
    return function (target, propName, descriptor) {
        descriptor.writable = value;
    };
}
exports.Editable = Editable;
