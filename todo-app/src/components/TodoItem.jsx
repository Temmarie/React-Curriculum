// src/components/TodoItem.jsx
import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({ todo, index, toggleComplete, removeTodo }) => {
  const handleToggleComplete = () => {
    toggleComplete(index);
  };

  const handleRemoveTodo = () => {
    removeTodo(index);
  };

  return (
    <div className="flex items-center justify-between bg-white p-3 mt-4 rounded shadow">
      <div
        className={`flex-1 text-left ${
          todo.completed ? 'line-through text-indigo-500' : 'text-gray-800'
        }`}
        onClick={handleToggleComplete}
      >
        {todo.text}
      </div>
      <button
        onClick={handleRemoveTodo}
        className="text-indigo-500 hover:text-indigo-600"
      >
        Remove
      </button>
    </div>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
};

export default TodoItem;