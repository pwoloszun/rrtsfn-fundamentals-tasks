/*eslint @typescript-eslint/no-unused-vars: 'off'*/
import React, { useState } from 'react';

import { TodoDto } from 'src/api/dto/todo-dto';

import TodoForm, { OnCreateParams } from './components/TodoForm';
import TodoList from './components/TodoList';
import { TODOS_DATA } from './data/todos-data';
import { TodoItem } from './components/TodoList';
import useManageTodos from './hooks/useManageTodos';

// Smart Comp aka Containers
//    GOOD: know WHAT app/functionality should do 
//    BAD: should NOT know HOW app/functionality works
export default function TodosPage(): React.ReactElement {
  const { todos, createTodo, removeTodo } = useManageTodos();
  // const [todos, setTodos] = useState([...TODOS_DATA]);

  const handleRemoveClick = (todo: TodoItem) => {
    removeTodo(todo);
    // setTodos((currTodos) => {
    //   const nextTodos = currTodos.filter((t) => t.id !== todo.id);
    //   return nextTodos;
    // });
  };
  const handleCreateClick = (params: OnCreateParams) => {
    const { title, description } = params;
    createTodo(title, description);

    // setTodos((currTodos) => {
    //   const id = Math.random();
    //   const todo: TodoDto = { id, title, description };
    //   const nextTodos = [...currTodos, todo];
    //   return nextTodos;
    // });
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
