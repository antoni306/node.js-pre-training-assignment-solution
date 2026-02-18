import { TodoService } from './todo-service';
import { TodoApi } from './todo-api';
import { Todo, TodoStatus } from './types';
import { InMemoryRepository } from './repository';

export class ToDoManager {
  private api: TodoApi = null as unknown as TodoApi
  private service: TodoService = null as unknown as TodoService
  private repo: InMemoryRepository<Todo> = null as unknown as InMemoryRepository<Todo>
  async init(): Promise<void> {
    this.repo = new InMemoryRepository<Todo>();
    this.api = new TodoApi(this.repo);
    this.service = new TodoService(this.api);
    await this.service.create('title1', 'desc1');
    await this.service.create('title2', 'desc2');
    await this.service.create('title3', 'desc3');
    await this.service.create('title4', 'desc4');
    await this.service.create('title5', 'desc5');
    await this.service.create('title6', 'desc6');

  }

  async add(title: string, description = ''): Promise<void> {
    try {
      await this.service.create(title, description);

    } catch (error) {
      throw error
    }
  }

  async complete(id: number): Promise<void> {
    const todo = (await this.api.getAll()).find(obj => obj.id === id);
    if (todo?.status !== TodoStatus.COMPLETED)
      this.api.update(id, { status: TodoStatus.COMPLETED });
  }
  async list(): Promise<Todo[]> {
    return await this.api.getAll();
  }
}
