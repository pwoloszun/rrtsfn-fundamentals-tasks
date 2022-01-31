/*eslint @typescript-eslint/no-unused-vars: 'off'*/
import React from 'react';

import { TodoDto } from 'src/api/dto/todo-dto';

import TodoForm, { OnCreateParams } from './components/TodoForm';
import TodoList from './components/TodoList';
import { TODOS_DATA } from './data/todos-data';

export default function TodosPage(): React.ReactElement {
  // TODO: init local state
  const handleRemoveClick = (todo: TodoDto) => {
    // TODO
  };
  const handleCreateClick = ({ title, description }: OnCreateParams) => {
    // TODO
  };

  // TODO
  return (
    <div style={{ width: '75%', margin: '0 auto' }}>
      <h3>Todos Feature</h3>
      <div>
        {/* 
        <TodoList
          todos={TODOS_DATA}
          onRemoveClick={handleRemoveClick}
        />
         */}
        <TodoList
          todos={TODOS_DATA}
        />
      </div>
      <hr />
      <div>
        {/* 
        <TodoForm
          onCreateClick={handleCreateClick}
        />
 */}
      </div>
    </div>
  );
}
