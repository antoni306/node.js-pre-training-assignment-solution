import { Todo, TodoStatus } from './types';
export function toggleAll(state: Todo[], completed: boolean): Todo[] {
  const newStatus = completed === true ? TodoStatus.COMPLETED : TodoStatus.IN_PROGRESS;
  return state.map(todo => ({ ...todo, status: newStatus }))
}

export function clearCompleted(state: Todo[]): Todo[] {
  return state.filter(obj => obj.status !== TodoStatus.COMPLETED)
}

export function countByStatus(state: Todo[], status: TodoStatus): number {
  return state.reduce((count, curr) => count + (curr.status === status ? 1 : 0), 0);
}
