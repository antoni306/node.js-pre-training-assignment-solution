#!/usr/bin/env ts-node

import { InMemoryRepository } from "./repository";
import { TodoApi } from "./todo-api";
import { TodoService } from "./todo-service";
import { Todo } from "./types";

// CLI entry for Task 10 – placeholder only
console.log('CLI not implemented yet');
const repo = new InMemoryRepository<Todo>();
const api = new TodoApi(repo);
const service = new TodoService(api);


async function asyncFunction() {
    const created = await service.create('A');
    const pToggle1 = service.toggleStatus(created.id);
    const toggled1 = await pToggle1;
    console.log(toggled1.status + ' should be PENDING');


    const pToggle2 = service.toggleStatus(created.id);
    const toggled2 = await pToggle2;
    console.log(toggled2.status + ' should be COMPLETED');
}
asyncFunction();