// src/components/TodoItem.jsx
import React, { useState } from 'react';

const TodoItem = ({ todo, index, toggleComplete, removeTodo, updateTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleSave = () => {
    updateTodo(index, newText);
    setIsEditing(false); // Exit edit mode after saving
  };

  return (
    <div className="flex items-center justify-between bg-white p-3 mt-4 rounded shadow">
      {/* If in editing mode, show input field */}
      {isEditing ? (
        <div className="flex-1">
          <input
            type="text"
            className="w-full p-2 border-2 border-purple-400 rounded"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
        </div>
      ) : (
        // Otherwise, show the todo text
        <div
          className={`flex-1 text-left cursor-pointer ${
            todo.completed ? 'line-through text-gray-500' : 'text-gray-800'
          }`}
          onClick={() => toggleComplete(index)}
        >
          {todo.text}
        </div>
      )}

      {/* Buttons: Save (if editing) or Edit and Remove */}
      <div className="flex space-x-2">
        {isEditing ? (
          // Show Save button while editing
          <button
            onClick={handleSave}
            className="text-green-500 hover:text-green-600"
          >
            Save
          </button>
        ) : (
          // Show Edit button when not in editing mode
          <button
            onClick={() => setIsEditing(true)}
            className="text-indigo-500 hover:text-indigo-600"
          >
            Edit
          </button>
        )}

        {/* Remove button */}
        <button
          onClick={() => removeTodo(index)}
          className="text-indigo-500 hover:text-indigo-600"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
