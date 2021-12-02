import React from 'react';

import { TodoDto } from 'src/api/dto/todo-dto';

import TodoForm, { OnCreateParams } from './components/TodoForm';
import TodoList from './components/TodoList';
import useManageTodos from './hooks/useManageTodos';

// Smart Component aka Container
// GOOD: WHAT app should do
// BAD: HOW app does business logic
export default function TodosPage(): React.ReactElement {
  const { todos, createTodo, removeTodo } = useManageTodos();

  const handleRemoveClick = (todo: TodoDto) => {
    removeTodo(todo);
  };

  const handleCreateClick = ({ title, description }: OnCreateParams) => {
    createTodo(title, description);
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


