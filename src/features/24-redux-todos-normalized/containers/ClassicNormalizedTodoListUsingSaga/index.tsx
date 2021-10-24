import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TodoDto, TodoDtoParams } from 'src/api/dto/todo-dto';

import MyList from 'src/components/MyList';
import { statusesMapFor } from 'src/components/MyList/item-status';
import MyTodoForm from 'src/components/MyTodoForm';

import { selectors, actions } from 'src/store/24d-classicTodosWithSaga';

import styles from './index.module.css';

export default function ClassicNormalizedTodoDtoListUsingSaga() {
  const dispatch = useDispatch();

  const removeTodoDto = (TodoDto: TodoDto) => {
    // TodoDto
  };
  const editTodoDto = (TodoDto: TodoDto) => {
    // TodoDto
  };
  const saveEditTodoDto = (TodoDto: TodoDto, params: TodoDtoParams) => {
    // TodoDto
  };
  const cancelEditTodoDto = (TodoDto: TodoDto) => {
    // TodoDto
  };
  const createTodoDto = (params: TodoDtoParams) => {
    // TodoDto
  };

  const TodoDtos = [ // TodoDto
    { id: 100, title: 'first', description: 'some desc' },
    { id: 200, title: 'sec' },
    { id: 300, title: 'third', description: 'other desc' },
    { id: 400, title: 'fourth', description: 'imba!' },
  ];
  const isFetching = false; // TodoDto

  // feature specific state
  // TodoDto
  const statuses = statusesMapFor(TodoDtos, {
    removing: { 200: true },
    saving: { 400: true },
    editing: { 300: true },
  });

  useEffect(() => {
    dispatch(actions.fetchTodosRequest());
  }, [dispatch]);

  return (
    <div className={styles.TodoDtoNormalizedListCont}>
      <MyList
        isLoading={isFetching}
        items={TodoDtos}
        statuses={statuses}
        onRemove={removeTodoDto}
        onEdit={editTodoDto}
        onCancelEdit={cancelEditTodoDto}
        onSaveEdit={saveEditTodoDto}
      />
      <hr />
      <MyTodoForm
        onCreate={createTodoDto}
      />
    </div>
  );
};
