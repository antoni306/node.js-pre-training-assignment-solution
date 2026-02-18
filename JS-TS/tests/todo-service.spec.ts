import { InMemoryRepository } from '../solutions/repository';
import { TodoApi } from '../solutions/todo-api';
import { TodoService } from '../solutions/todo-service';
import { TodoStatus } from '../solutions/types';

describe('TodoService', () => {
    beforeEach(() => {
        jest.useFakeTimers();
    });

    afterEach(() => {
        jest.runOnlyPendingTimers();
        jest.useRealTimers();
    });

    test('successful creation of a todo', async () => {
        const api = new TodoApi(new InMemoryRepository);
        const service = new TodoService(api);

        const p = service.create('Test title', 'desc');

        // przepychamy timeouty z TodoApi
        jest.runAllTimers();

        const todo = await p;

        expect(todo.id).toBeGreaterThan(0);
        expect(todo.title).toBe('Test title');
        expect(todo.description).toBe('desc');

        const p2 = api.getAll();
        jest.runAllTimers();
        const all = await p2;

        expect(all).toHaveLength(1);
    });

    test('toggling status', async () => {
        const api = new TodoApi(new InMemoryRepository);
        const service = new TodoService(api);

        const pCreate = service.create('A');
        jest.runAllTimers();
        const created = await pCreate;



        const pToggle1 = service.toggleStatus(created.id);
        jest.runAllTimers();
        const toggled1 = await pToggle1;

        expect(toggled1.status).toBe(TodoStatus.COMPLETED);

        const pToggle2 = service.toggleStatus(created.id);
        jest.runAllTimers();
        const toggled2 = await pToggle2;

        expect(toggled2.status).toBe(TodoStatus.PENDING);
    });

    test('search returns matching items (case-insensitive)', async () => {
        const api = new TodoApi(new InMemoryRepository);
        const service = new TodoService(api);

        const p1 = service.create('Buy Milk', 'From shop');
        const p2 = service.create('Call mom', 'Sunday');
        const p3 = service.create('milkshake', 'Recipe');

        jest.runAllTimers();
        await Promise.all([p1, p2, p3]);

        const pSearch = service.search('MILK');
        jest.runAllTimers();
        const results = await pSearch;

        const titles = results.map(t => t.title).sort();
        expect(titles).toEqual(['Buy Milk', 'milkshake'].sort());
    });

    test('error is thrown when updating non-existing id', async () => {
        const api = new TodoApi(new InMemoryRepository);
        const service = new TodoService(api);

        const p = service.toggleStatus(999);

        jest.runAllTimers();

        await expect(p).rejects.toThrow();
    });
});
