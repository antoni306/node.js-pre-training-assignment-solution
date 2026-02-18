"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoService = void 0;
var types_1 = require("./types");
var TodoService = /** @class */ (function () {
    function TodoService(api) {
        this.api = api;
    }
    TodoService.prototype.create = function (title_1) {
        return __awaiter(this, arguments, void 0, function (title, description) {
            if (description === void 0) { description = ''; }
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (title == null || title.trim().length === 0)
                            throw new Error("title cannot be empty");
                        return [4 /*yield*/, this.api.add({ title: title.trim(), description: description })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    TodoService.prototype.toggleStatus = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var all, todo, newStatus;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api.getAll()];
                    case 1:
                        all = _a.sent();
                        todo = all.find(function (obj) { return obj.id === id; });
                        if (!todo) {
                            throw new Error("no such element with id: ".concat(id));
                        }
                        newStatus = (todo === null || todo === void 0 ? void 0 : todo.status) == types_1.TodoStatus.COMPLETED ? types_1.TodoStatus.PENDING : types_1.TodoStatus.COMPLETED;
                        return [4 /*yield*/, this.api.update(id, { status: newStatus })];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    TodoService.prototype.search = function (keyword) {
        return __awaiter(this, void 0, void 0, function () {
            var all, filtered;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (keyword == null)
                            throw new Error('keyword cannot be null');
                        return [4 /*yield*/, this.api.getAll()];
                    case 1:
                        all = _a.sent();
                        filtered = all.filter(function (obj) { return obj.title.includes(keyword) || obj.description && obj.description.includes(keyword); });
                        return [2 /*return*/, filtered];
                }
            });
        });
    };
    return TodoService;
}());
exports.TodoService = TodoService;
