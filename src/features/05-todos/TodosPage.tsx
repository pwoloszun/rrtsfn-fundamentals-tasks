import React from 'react';
import { TodoDto, TodoDtoParams } from 'src/api/dto/todo-dto';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import useManageTodos from './hooks/useManageTodos';

// Smart component aka Container
// WHAT should happen in app
// ---------bad - knows HOW app works under the hood  
export default function TodosPage(): React.ReactElement {
  const { createTodo, removeTodo, todos } = useManageTodos();

  const handleRemoveClick = (todo: TodoDto) => {
    removeTodo(todo);
  };
  const handleCreateClick = ({ title, description }: TodoDtoParams) => {
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
