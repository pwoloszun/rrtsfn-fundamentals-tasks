/*eslint @typescript-eslint/no-unused-vars: 'off'*/
import React from 'react';
import { useState } from 'react';
import { TodoDto, TodoDtoParams } from 'src/api/dto/todo-dto';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import { TODOS_DATA } from './data/todos-data';

// Smart component aka Container
// WHAT should happen in app
// bad - knows HOW app works under the hood  
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
    const todo = { id, title, description };
    setTodos((currTodos) => {
      const nexTodos = [...currTodos, todo];
      return nexTodos;
    });
  };

  // TODO
  return (
    <div style={{ width: '75%', margin: '0 auto' }}>
      <h3>Todos Feature</h3>
      <div>

        {/* Pure aka Presentation aka Dumb components */}
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
