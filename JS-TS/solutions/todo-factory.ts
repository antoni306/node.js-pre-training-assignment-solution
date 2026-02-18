import { Todo, NewTodo, TodoStatus } from './types';

let nextId = 1;

export function createTodo(input: NewTodo): Todo {
  if (input == null || input == undefined) {
    throw TypeError()
  }

  return {
    id: nextId++,
    title: input.title,
    description: input.description,
    status: input.status != undefined ? input.status : TodoStatus.PENDING,
    createdAt: new Date()
  } as Todo
}


// var myTo = createTodo({ title: 'ads', status: TodoStatus.PENDING });
// var myTo3 = createTodo({ title: 'ads', status: TodoStatus.PENDING });
// var myTo2 = createTodo({ title: 'ads' });

// console.log(myTo2.id)