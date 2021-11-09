/*eslint @typescript-eslint/no-unused-vars: 'off'*/
import React, { useState } from 'react';

import TodoList from './components/TodoList';
import TodoForm, { OnCreateParams } from './components/TodoForm';
import { TODOS_DATA } from './data/todos-data';

import { TodoDtoParams, TodoDto } from 'src/api/dto/todo-dto';
import useManageTodos from './hooks/useManageTodos';

// Containers / Smart comp
// GOOD: know WHAT app should do
// BAD: smart comp should NOT know HOW app works
export default function TodosPage(): React.ReactElement {
  const { createTodo, removeTodo, todos } = useManageTodos();

  // const [todos, setTodos] = useState(TODOS_DATA);

  const handleRemoveClick = (todo: TodoDto) => {
    removeTodo(todo);
    // setTodos((currTodos) => {
    //   const nextTodos = currTodos.filter((td) => td.id !== todo.id);
    //   return nextTodos;
    // });
  };

  const handleCreateClick = ({ title, description }: OnCreateParams) => {
    createTodo(title, description);
    // setTodos((currTodos) => {
    //   const id = Math.random();
    //   const newTodo = { id, title, description };
    //   const nextTodos = [...currTodos, newTodo];
    //   return nextTodos;
    // });
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
