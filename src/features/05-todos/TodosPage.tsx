import React, { useEffect } from 'react';

import TodoForm, { OnCreateParams } from './components/TodoForm';
import TodoList from './components/TodoList';
import { TodoItem } from './components/TodoList';
import useManageTodos from './hooks/useManageTodos';

// Smart Comp aka Containers
//    GOOD: know WHAT app/functionality should do 
//    BAD: should NOT know HOW app/functionality works
// Smart Comp/Container === as thin as possible
export default function TodosPage(): React.ReactElement {
  // useManageTodos === application hook
  const todosFacade = useManageTodos(); // feature facade

  useEffect(() => {
    todosFacade.load();
  }, []);

  const handleRemoveClick = (todo: TodoItem) => {
    todosFacade.removeTodo(todo);
  };

  const handleCreateClick = (params: OnCreateParams) => {
    const { title, description } = params;
    todosFacade.createTodo(title, description);
  };

  return (
    <div style={{ width: '75%', margin: '0 auto' }}>
      <h3>Todos Feature</h3>
      <div>

        {/* Pure / Presentation / Dumb comp */}
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
