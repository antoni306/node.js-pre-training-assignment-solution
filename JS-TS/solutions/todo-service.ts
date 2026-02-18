import { TodoApi } from './todo-api';
import { Todo, TodoStatus } from './types';
import { createTodo } from './todo-factory';
import { ToDoManager } from './todo-manager';
export class TodoService {
  constructor(private readonly api: TodoApi) {

  }

  async create(title: string, description = ''): Promise<Todo> {
    if (title == null || title.trim().length === 0)
      throw new Error(`title cannot be empty`);
    return await this.api.add({ title: title.trim(), description })
  }

  async toggleStatus(id: number): Promise<Todo> {
    const all = await this.api.getAll();
    const todo = all.find(obj => obj.id === id);
    if (!todo) {
      throw new Error(`no such element with id: ${id}`);
    }

    const newStatus = todo?.status == TodoStatus.COMPLETED ? TodoStatus.PENDING : TodoStatus.COMPLETED;
    return await this.api.update(id, { status: newStatus });
  }

  async search(keyword: string): Promise<Todo[]> {
    if (keyword == null)
      throw new Error('keyword cannot be null')
    const all = await this.api.getAll();
    const filtered = all.filter(obj => obj.title.includes(keyword) || obj.description && obj.description.includes(keyword))
    return filtered;
  }
}
