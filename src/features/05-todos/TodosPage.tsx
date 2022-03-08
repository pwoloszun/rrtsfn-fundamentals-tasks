/*eslint @typescript-eslint/no-unused-vars: 'off'*/
import React, { useState } from 'react';

import TodoForm, { OnCreateParams } from './components/TodoForm';
import TodoList, { TodoItem } from './components/TodoList';
import { TODOS_DATA } from './data/todos-data';

// Smart Component aka Container
// GOOD: WHAT app should do
// BAD: HOW app works under the hood
export default function TodosPage(): React.ReactElement {
  const [todos, setTodos] = useState(TODOS_DATA);

  const handleRemoveClick = (todo: TodoItem) => {
    setTodos((currTodos) => {
      const nextTodos = currTodos.filter((td) => td.id !== todo.id);
      return nextTodos;
    });
  };

  const handleCreateClick = (params: OnCreateParams) => {
    const { title, description } = params;
    setTodos((currTodos) => {
      const id = Math.random();
      const todo = { id, title, description };
      const nextTodos = [...currTodos, todo];
      return nextTodos;
    });
  };

  return (
    <div style={{ width: '75%', margin: '0 auto' }}>
      <h3>Todos Feature</h3>
      <div>

        {/* Pure/Presentation/Dumb component */}
        <TodoList
          todos={todos}
          onRemoveClick={handleRemoveClick}
        />

      </div>
      <hr />
      <div>

        {/* Pure/Presentation/Dumb component */}
        <TodoForm
          onCreateClick={handleCreateClick}
        />

      </div>
    </div>
  );
}
