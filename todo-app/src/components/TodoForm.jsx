// src/components/TodoForm.jsx
import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [todo, setTodo] = useState('');

  // event handler function for form submisssion
  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.trim()) {
      addTodo(todo);
      setTodo('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex mt-6">
      <input
        type="text"
        className="flex-1 p-2 rounded-l border-2 border-indigo-400 focus:outline-none"
        placeholder="Add a new task"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="bg-indigo-500 text-white p-2 rounded-r hover:bg-indigo-600"
      >
        Add
      </button>
    </form>
  );
};

export default TodoForm;
