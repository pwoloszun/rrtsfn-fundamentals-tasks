/*eslint @typescript-eslint/no-unused-vars: 'off'*/
import React, { useState } from 'react';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import { TODOS_DATA } from './data/todos-data';

import { TodoDtoParams, TodoDto } from 'src/api/dto/todo-dto';

export default function TodosPage(): React.ReactElement {
  const [todos, setTodos] = useState(TODOS_DATA);

  const handleRemoveClick = (todo: TodoDto) => {
    setTodos((currTodos) => {
      const nextTodos = currTodos.filter((td) => td.id !== todo.id);
      return nextTodos;
    });
  };

  const handleCreateClick = ({ title, description }: TodoDtoParams) => {
    // TODO
    const id = Math.random();
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
