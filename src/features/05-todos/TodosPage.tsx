import React from 'react';
import { TodoDto } from 'src/api/dto/todo-dto';

import TodoForm, { OnCreateParams } from './components/TodoForm';
import TodoList from './components/TodoList';
import useManageTodos from './hooks/useManageTodos';

// Container aka Smart Compo.
// GOOD should know: WHAT app should do
// BAD should NOT know: HOW app works under the hood

// responsibility:
//  + mediator function
//  + similiar to MVC Controllers
export default function TodosPage(): React.ReactElement {
  const {
    createTodo,
    removeTodo,
    todos
  } = useManageTodos();

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

        {/* Pure / Presentation / Dumb components */}
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
