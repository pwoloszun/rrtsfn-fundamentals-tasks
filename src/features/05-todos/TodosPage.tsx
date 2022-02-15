/*eslint @typescript-eslint/no-unused-vars: 'off'*/
import React, { useState } from 'react';

import TodoForm, { OnCreateParams } from './components/TodoForm';
import TodoList, { TodoItem } from './components/TodoList';
import { TODOS_DATA } from './data/todos-data';

// Container aka Smart Compo.
// GOOD should know: WHAT app should do
// BAD should NOT know: HOW app works under the hood

// responsibility:
//  + mediator function
//  + similiar to MVC Controllers
export default function TodosPage(): React.ReactElement {
  const [todos, setTodos] = useState(TODOS_DATA);

  const handleRemoveClick = (todo: TodoItem) => {
    setTodos((currTodos) => {
      const nextTodos = currTodos.filter((td) => td.id !== todo.id);
      return nextTodos;
    });
  };

  const handleCreateClick = ({ title, description }: OnCreateParams) => {
    setTodos((currTodos) => {
      const id = Math.random();
      const newTodo = { id, title, description };
      const nextTodos = [...currTodos, newTodo];
      return nextTodos;
    });
  };

  return (
    <div style={{ width: '75%', margin: '0 auto' }}>
      <h3>Todos Feature</h3>
      <div>

        {/* Pure / Presentation / Dumb components */}
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
