"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryRepository = void 0;
var InMemoryRepository = /** @class */ (function () {
    function InMemoryRepository() {
        // private storage
        this.items = [];
    }
    InMemoryRepository.prototype.add = function (entity) {
        if (entity == null) {
            throw new Error("can't throw in null");
        }
        this.items.push(entity);
        return entity;
    };
    InMemoryRepository.prototype.update = function (id, patch) {
        var index = this.items.findIndex(function (obj) { return obj.id === id; });
        if (index === -1) {
            throw new Error("no such element with id : ".concat(id));
        }
        this.items[index] = __assign(__assign({}, this.items[index]), patch);
        return this.items[index];
    };
    InMemoryRepository.prototype.remove = function (id) {
        var index = this.items.findIndex(function (obj) { return obj.id === id; });
        if (index === -1)
            throw new Error("no such element with id ".concat(id));
        this.items.splice(index, 1);
    };
    InMemoryRepository.prototype.findById = function (id) {
        return this.items.find(function (o) { return o.id === id; });
    };
    InMemoryRepository.prototype.findAll = function () {
        return __spreadArray([], this.items, true);
    };
    return InMemoryRepository;
}());
exports.InMemoryRepository = InMemoryRepository;
