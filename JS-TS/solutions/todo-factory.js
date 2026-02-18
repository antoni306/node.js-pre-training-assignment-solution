"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTodo = createTodo;
var types_1 = require("./types");
var nextId = 1;
function createTodo(input) {
    if (input == null || input == undefined) {
        throw TypeError();
    }
    return {
        id: nextId++,
        title: input.title,
        description: input.description,
        status: input.status != undefined ? input.status : types_1.TodoStatus.PENDING,
        createdAt: new Date()
    };
}
// var myTo = createTodo({ title: 'ads', status: TodoStatus.PENDING });
// var myTo3 = createTodo({ title: 'ads', status: TodoStatus.PENDING });
// var myTo2 = createTodo({ title: 'ads' });
// console.log(myTo2.id)
