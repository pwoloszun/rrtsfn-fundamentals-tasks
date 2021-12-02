import React, { useState } from 'react';

import { TodoDto } from 'src/api/dto/todo-dto';

import TodoForm, { OnCreateParams } from './components/TodoForm';
import TodoList from './components/TodoList';
import { TODOS_DATA } from './data/todos-data';
import { produce } from 'immer';

// Smart Component aka Container
// GOOD: WHAT app should do
// BAD: HOW app does business logic
export default function TodosPage(): React.ReactElement {
  const [todos, setTodos] = useState(TODOS_DATA);

  const handleRemoveClick = (todo: TodoDto) => {
    setTodos((currTodos) => {
      const nextTodos = currTodos.filter((td) => td.id !== todo.id);
      return nextTodos;
    });
  };

  const handleCreateClick = ({ title, description }: OnCreateParams) => {
    const id = Math.random();
    const todo = { id, title, description };
    setTodos((currTodos) => {
      const nextTodos = produce(currTodos, (draft) => {
        draft.push(todo);
      });
      return nextTodos;
    });

  };

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



// function fn(a) {
//   //
// }

// const data = { name: 'bob' };

// const result = fn(data);

// const jsx = MyComponent(props); // 


