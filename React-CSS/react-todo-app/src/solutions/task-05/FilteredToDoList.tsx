import React, { useState, useMemo } from 'react';
import { Todo } from '../../types';

/**
 * Task 5: FilteredToDoList Component
 * 
 * Theory: Derived State and Computed Values
 * 
 * In React, you often need to compute values based on your state. These are called "derived state"
 * or "computed values" and should be calculated during render rather than stored in state.
 * 
 * Why Use Derived State:
 * 1. Avoids state synchronization issues
 * 2. Reduces complexity by having a single source of truth
 * 3. Automatically updates when source data changes
 * 4. Prevents stale state bugs
 * 
 * Common Derived State Patterns:
 * 
 * Filtering:
 * - const activeTodos = todos.filter(todo => !todo.completed)
 * - const completedTodos = todos.filter(todo => todo.completed)
 * 
 * Searching:
 * - const filteredTodos = todos.filter(todo => 
 *     todo.title.toLowerCase().includes(searchTerm.toLowerCase())
 *   )
 * 
 * Sorting:
 * - const sortedTodos = [...todos].sort((a, b) => a.title.localeCompare(b.title))
 * 
 * Aggregations:
 * - const completedCount = todos.filter(todo => todo.completed).length
 * - const totalCount = todos.length
 * 
 * Multiple Filters:
 * - Use multiple filter conditions or combine them
 * - Consider using useMemo for expensive computations
 * 
 * Key Concepts:
 * - Calculate derived values during render
 * - Don't store computed values in state
 * - Use useMemo for expensive calculations
 * - Keep state minimal and derive the rest
 */
export const FilteredToDoList: React.FC = () => {
  // TODO: Implement the FilteredToDoList component
  // 
  // Requirements:
  // 1. Display a list of todos with add functionality
  // 2. Add filter buttons: "All", "Active", "Completed"
  // 3. Filter todos based on selected filter
  // 4. Use derived state for filtered results
  // 5. Add complete functionality for todos
  // 
  // Example implementation:
  // const [todos, setTodos] = useState<Todo[]>([]);
  // const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');
  // 
  // const filteredTodos = todos.filter(todo => {
  //   if (filter === 'active') return !todo.completed;
  //   if (filter === 'completed') return todo.completed;
  //   return true; // 'all' case
  // });
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');
  const [title, setTitle] = useState<string>('');
  const visibleTodos = useMemo(() => {
    switch (filter) {
      case 'all':
        return todos;
      case 'active':
        return todos.filter(obj => !obj.completed)
      case 'completed':
        return todos.filter(obj => obj.completed)
      default:
        return []
    }
  }, [todos, filter]);
  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();
    const t = title.trim();
    if (!t)
      return;
    const todo: Todo = { id: todos.length, title: t, completed: false }
    setTodos(prev => [...prev, todo]);
    setTitle('');
  }
  const changeStatus = (id: number) => {
    setTodos(prev => prev.map(obj => obj.id === id ? { ...obj, completed: !obj.completed } : obj));
  }
  return (
    <div>
      <form onSubmit={addTodo}>
        <input type="text" onChange={(event) => setTitle(event.target.value)} />
        <button type='submit'>Add todo</button>
      </form>
      <select value={filter} onChange={(e) => setFilter(e.target.value as 'all' | 'active' | 'completed')}>
        <option value='all'>all</option>
        <option value='completed'>completed</option>
        <option value='active'>active</option>
      </select>
      <ul>
        {visibleTodos.map(todo => <li key={todo.id} style={todo.completed ? { textDecoration: 'line-through' } : { textDecoration: 'none' }}>{todo.title} <button onClick={() => changeStatus(todo.id)}>change status</button></li>)}
      </ul>
    </div>
  );
}; 