/*eslint @typescript-eslint/no-unused-vars: 'off'*/
import React, { useState } from 'react';

import TodoForm, { OnCreateParams } from './components/TodoForm';
import TodoList from './components/TodoList';
import { TODOS_DATA } from './data/todos-data';
import { TodoItem } from './components/TodoList';

export default function TodosPage(): React.ReactElement {
  const [todos, setTodos] = useState([...TODOS_DATA]);

  const handleRemoveClick = (todo: TodoItem) => {
    setTodos((currTodos) => {
      const nextTodos = currTodos.filter((t) => t.id !== todo.id);
      return nextTodos;
    });
  };
  const handleCreateClick = (params: OnCreateParams) => {
    const { title, description } = params;

    setTodos((currTodos) => {
      const id = Math.random();
      const todo: TodoDto = { id, title, description };
      const nextTodos = [...currTodos, todo];
      return nextTodos;
    });
  };

  return (
    <div style={{ width: '75%', margin: '0 auto' }}>
      <h3>Todos Feature</h3>
      <div>

        {/* Pure / Presentation / Dumb comp */}
        <TodoList
          todos={todos}
          onRemoveClick={handleRemoveClick}
        />

      </div>
      <hr />
      <div>

        <TodoForm
          onCreateClick={handleCreateClick}
        />

      </div>
    </div>
  );
}
