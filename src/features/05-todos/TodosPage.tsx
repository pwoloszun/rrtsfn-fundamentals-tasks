/*eslint @typescript-eslint/no-unused-vars: 'off'*/
import React from 'react';

import TodoList from './components/TodoList';
// import TodoForm from './components/TodoForm';
import { TODOS_DATA } from './data/todos-data';

import { TodoDtoParams, TodoDto } from 'src/api/dto/todo-dto';

export default function TodosPage(): React.ReactElement {
  // TODO: init local state
  const handleRemoveClick = (todo: TodoDto) => {
    
  };
  const handleCreateClick = ({ title, description }: TodoDtoParams) => {
    // TODO
  };

  // TODO
  return (
    <div style={{ width: '75%', margin: '0 auto' }}>
      <h3>Todos Feature</h3>
      <div>

        <TodoList
          todos={TODOS_DATA}
          onRemoveClick={handleRemoveClick}
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
