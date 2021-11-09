/*eslint @typescript-eslint/no-unused-vars: 'off'*/
import React, { useState } from 'react';

import TodoList from './components/TodoList';
import TodoForm, { OnCreateParams } from './components/TodoForm';
import { TODOS_DATA } from './data/todos-data';

import { TodoDtoParams, TodoDto } from 'src/api/dto/todo-dto';

// Containers / Smart comp
// GOOD: know WHAT app should do
export default function TodosPage(): React.ReactElement {
  const [todos, setTodos] = useState(TODOS_DATA);

  const handleRemoveClick = (todo: TodoDto) => {
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

  // TODO
  return (
    <div style={{ width: '75%', margin: '0 auto' }}>
      <h3>Todos Feature</h3>
      <div>

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
