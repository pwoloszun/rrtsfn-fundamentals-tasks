import React from 'react';
import { TodoDto } from 'src/api/dto/todo-dto';

import TodoForm, { OnCreateParams } from './components/TodoForm';
import TodoList from './components/TodoList';
import useManageTodos from './hooks/useManageTodos';

// Smart Component aka Container
// + GOOD: WHAT app should do
// - BAD: HOW app works under the hood
export default function TodosPage(): React.ReactElement {
  const { createTodo, removeTodo, todos } = useManageTodos();

  const handleRemoveClick = (todo: TodoDto) => {
    removeTodo(todo);
  };

  const handleCreateClick = (params: OnCreateParams) => {
    const { title, description } = params;
    createTodo(title, description);
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
