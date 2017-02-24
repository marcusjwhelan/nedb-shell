"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var decorators_1 = require("../decorators");
var DATASTORES = (function () {
    function DATASTORES() {
        this._stores = [];
    }
    Object.defineProperty(DATASTORES.prototype, "prop", {
        get: function () {
            return this._stores;
        },
        enumerable: true,
        configurable: true
    });
    DATASTORES.getInstance = function () {
        if (!DATASTORES.instance) {
            DATASTORES.instance = new DATASTORES();
        }
        return DATASTORES.instance;
    };
    DATASTORES.prototype.resetStore = function () {
        this._stores = [];
    };
    DATASTORES.prototype.addStore = function (store) {
        this._stores.push(store);
    };
    DATASTORES.prototype.addStores = function (stores) {
        (_a = this._stores).push.apply(_a, stores);
        var _a;
    };
    DATASTORES.prototype.dropStore = function (store) {
        var index = this._stores.indexOf(store);
        this._stores.splice(index, 1);
    };
    return DATASTORES;
}());
__decorate([
    decorators_1.Editable(false)
], DATASTORES.prototype, "resetStore", null);
__decorate([
    decorators_1.Editable(false)
], DATASTORES.prototype, "addStore", null);
__decorate([
    decorators_1.Editable(false)
], DATASTORES.prototype, "addStores", null);
__decorate([
    decorators_1.Editable(false)
], DATASTORES.prototype, "dropStore", null);
__decorate([
    decorators_1.Editable(false)
], DATASTORES, "getInstance", null);
exports.DATASTORES = DATASTORES;
