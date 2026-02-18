import { Todo } from './types';

export function addTodo(state: Todo[], todo: Todo): Todo[] {
  if (state == null || todo == null)
    throw new TypeError()

  return [...state, todo];

}

export function updateTodo(state: Todo[], id: number, update: Partial<Omit<Todo, 'id' | 'createdAt'>>): Todo[] {
  if (state == null || update == null)
    throw new TypeError()

  var index = state.findIndex(task => task.id === id)

  if (index === -1)
    throw new Error(`no such element with id ${id}`)

  const result = [...state]
  result[index] = { ...state[index], ...update } as Todo

  return result
}

export function removeTodo(state: Todo[], id: number): Todo[] {
  const result = state.filter(obj => obj.id !== id);

  if (result.length == state.length)
    throw new Error(`no such element with id ${id}`)

  return result;
}

export function getTodo(state: Todo[], id: number): Todo | undefined {
  if (state == null)
    throw new TypeError()
  return state.find(obj => obj.id === id)
}
