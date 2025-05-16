'use client'

import { useSession } from '@/lib/auth-client';
import { useState, useEffect } from 'react';

export default function TodosPage() {
  const { data: session, status } = useSession();
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (session?.user?.id) {
      fetchTodos();
    } else if (status !== 'loading') {
      setIsLoading(false);
    }
  }, [session, status]);

  const fetchTodos = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await fetch(`/api/todos?userId=${session.user.id}`);

      if (!response.ok) {
        throw new Error('Failed to fetch todos');
      }

      const data = await response.json();
      setTodos(data);
    } catch (err) {
      console.error('Error fetching todos:', err);
      setError('Failed to load todos. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const addTodo = async () => {
    if (!newTodo.trim() || !session?.user?.id) return;

    try {
      setError(null);
      const response = await fetch('/api/todos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: newTodo,
          userId: session.user.id
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to add todo');
      }

      setNewTodo('');
      fetchTodos();
    } catch (err) {
      console.error('Error adding todo:', err);
      setError('Failed to add todo. Please try again.');
    }
  };

  const updateTodo = async (id, completed) => {
    try {
      setError(null);
      const response = await fetch(`/api/todos/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ completed }),
      });

      if (!response.ok) {
        throw new Error('Failed to update todo');
      }

      fetchTodos();
    } catch (err) {
      console.error('Error updating todo:', err);
      setError('Failed to update todo. Please try again.');
    }
  };

  const deleteTodo = async (id) => {
    try {
      setError(null);
      const response = await fetch(`/api/todos/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete todo');
      }

      fetchTodos();
    } catch (err) {
      console.error('Error deleting todo:', err);
      setError('Failed to delete todo. Please try again.');
    }
  };

  if (status === 'loading' || isLoading) {
    return (
      <div className="container mx-auto p-4 flex justify-center items-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  if (!session) {
    return (
      <div className="container mx-auto p-4 flex justify-center items-center min-h-screen">
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-4">Please log in to view your todos</h2>
          <a href="/login" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
            Go to Login
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <h1 className="text-2xl font-bold mb-6">Your Todos</h1>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      <div className="mb-6">
        <div className="flex">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && addTodo()}
            placeholder="Add a new todo"
            className="border border-gray-300 rounded-l p-2 flex-grow focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={addTodo}
            className="bg-blue-500 text-white p-2 rounded-r hover:bg-blue-600 transition-colors"
          >
            Add
          </button>
        </div>
      </div>

      {todos.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          No todos yet. Add one to get started!
        </div>
      ) : (
        <ul className="bg-white rounded-lg shadow divide-y">
          {todos.map((todo) => (
            <li key={todo.id} className="flex items-center p-4 hover:bg-gray-50">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => updateTodo(todo.id, !todo.completed)}
                className="h-5 w-5 text-blue-500 rounded mr-3 focus:ring-blue-500"
              />
              <span className={`flex-grow ${todo.completed ? 'line-through text-gray-400' : ''}`}>
                {todo.title}
              </span>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="ml-2 text-red-500 hover:text-red-700 focus:outline-none"
                aria-label="Delete todo"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}