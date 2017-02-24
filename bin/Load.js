//const repl = require('repl');
"use strict";
function Load(repl) {
    for (var _i = 0, _a = ['db', 'show']; _i < _a.length; _i++) {
        var nedb_shell = _a[_i];
        repl.context[nedb_shell] = require("./" + nedb_shell);
    }
}
exports.Load = Load;
