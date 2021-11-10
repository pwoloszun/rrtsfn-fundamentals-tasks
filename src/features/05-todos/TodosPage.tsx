/*eslint @typescript-eslint/no-unused-vars: 'off'*/
import React, { useState } from 'react';

import TodoList from './components/TodoList';
import TodoForm, { OnCreateParams } from './components/TodoForm';
import { TODOS_DATA } from './data/todos-data';

import { TodoDtoParams, TodoDto } from 'src/api/dto/todo-dto';
import useManageTodos from './hooks/useManageTodos';
import { useSelector, useDispatch } from 'react-redux';

// Containers / Smart comp
// GOOD: know WHAT app should do
// BAD: smart comp should NOT know HOW app works
export default function TodosPage(): React.ReactElement {
  // const { createTodo, removeTodo, todos } = useManageTodos();
  const todosFacade = useManageTodos();

  const handleRemoveClick = (todo: TodoDto) => {
    todosFacade.removeTodo(todo);
  };

  const handleCreateClick = ({ title, description }: OnCreateParams) => {
    todosFacade.createTodo(title, description);
  };

  return (
    <div style={{ width: '75%', margin: '0 auto' }}>
      <h3>Todos Feature</h3>
      <div>

        <TodoList
          todos={todosFacade.todos}
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

// oher TS file
// function DefaultTodoList() {
//   const todosFacade = useManageTodos();
//   const handleRemoveClick = (todo: TodoDto) => {
//     todosFacade.removeTodo(todo);
//   };

//   return (
//     <TodoList
//       todos={todosFacade.todos}
//       onRemoveClick={handleRemoveClick}
//     />
//   );
// }
