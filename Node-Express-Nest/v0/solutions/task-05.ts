// NestJS Controller for /todos
import { Controller, Get } from '@nestjs/common';
const todos = [
  { id: 1, title: 'title 1', completed: false },
  { id: 2, title: 'title 2', completed: true },
  { id: 3, title: 'title 3', completed: false },
  { id: 4, title: 'title 4', completed: true },
];

@Controller('todos')
export class TodosController {
  @Get()
  getTodos() {
    return todos
  }
} 