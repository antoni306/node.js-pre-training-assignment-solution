// NestJS Service for ToDos
import { Injectable, NotFoundException } from '@nestjs/common';

export type Todo = { id: number; title: string; completed: boolean };
@Injectable()
export class TodosService {
  // TODO: implement todos storage and methods (getTodos, addTodo, markCompleted)
  private todos: Todo[] = [
    { id: 1, title: 'title 1', completed: false },
    { id: 2, title: 'title 2', completed: true },
    { id: 3, title: 'title 3', completed: false },
    { id: 4, title: 'title 4', completed: true },
  ];

  private nextId = this.todos.length + 1;

  getTodos(): Todo[] {
    return this.todos;
  }

  addTodo(title: string): Todo {
    const t = title?.trim();
    if (!t) throw new Error('Title is required');

    const todo: Todo = { id: this.nextId++, title: t, completed: false };
    this.todos.push(todo);
    return todo;
  }

  markCompleted(id: number): Todo {
    const todo = this.todos.find(t => t.id === id);
    if (!todo) throw new NotFoundException(`Todo ${id} not found`);
    todo.completed = true;
    return todo;
  }
} 