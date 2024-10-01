// src/components/TodoList.jsx
import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, toggleComplete, removeTodo, updateTodo  }) => {
  return (
    <div className="mt-6">
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          index={index}
          toggleComplete={toggleComplete}
          removeTodo={removeTodo}
          updateTodo={updateTodo} // Pass down updateTodo prop
        />
      ))}
    </div>
  );
};

export default TodoList;
