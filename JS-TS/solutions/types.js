"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoStatus = void 0;
var TodoStatus;
(function (TodoStatus) {
    TodoStatus[TodoStatus["PENDING"] = 0] = "PENDING";
    TodoStatus[TodoStatus["IN_PROGRESS"] = 1] = "IN_PROGRESS";
    TodoStatus[TodoStatus["COMPLETED"] = 2] = "COMPLETED";
})(TodoStatus || (exports.TodoStatus = TodoStatus = {}));
