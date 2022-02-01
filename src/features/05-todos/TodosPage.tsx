import React, { useEffect } from 'react';

import TodoForm, { OnCreateParams } from './components/TodoForm';
import TodoList from './components/TodoList';
import { TodoItem } from './components/TodoList';
import useManageTodos from './hooks/useManageTodos';

// Smart Comp aka Containers
//    GOOD: know WHAT app/functionality should do 
//    BAD: should NOT know HOW app/functionality works
export default function TodosPage(): React.ReactElement {
  const { todos, createTodo, removeTodo, load } = useManageTodos();

  useEffect(() => {
    load();
  }, []);

  const handleRemoveClick = (todo: TodoItem) => {
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
