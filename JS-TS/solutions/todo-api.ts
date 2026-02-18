import { InMemoryRepository } from './repository';
import { Todo, NewTodo } from './types';
import { createTodo } from './todo-factory';

export class TodoNotFoundError extends Error {
  constructor(public readonly id: number) {
    super(`Todo with id=${id} not found`);
    this.name = 'TodoNotFoundError';
  }
}

function delayRandom(minMs = 300, maxMs = 600): Promise<void> {
  const ms = Math.floor(Math.random() * (maxMs - minMs + 1)) + minMs;
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export class TodoApi {
  constructor(private readonly repo: InMemoryRepository<Todo>) { }
  async getAll(): Promise<Todo[]> {
    await delayRandom();
    console.log('fetching data');
    return this.repo.findAll();
  }

  async add(newTodo: NewTodo): Promise<Todo> {
    await delayRandom();
    console.log('adding data to repo');
    return this.repo.add(createTodo(newTodo));
  }

  async update(
    id: number,
    update: Partial<Omit<Todo, 'id' | 'createdAt'>>
  ): Promise<Todo> {
    await delayRandom();

    const exists = this.repo.findAll().some(t => t.id === id);
    if (!exists) throw new TodoNotFoundError(id);

    return this.repo.update(id, update);
  }

  async remove(id: number): Promise<void> {
    await delayRandom();

    const exists = this.repo.findAll().some(t => t.id === id);
    if (!exists) throw new TodoNotFoundError(id);

    this.repo.remove(id);
  }
}
