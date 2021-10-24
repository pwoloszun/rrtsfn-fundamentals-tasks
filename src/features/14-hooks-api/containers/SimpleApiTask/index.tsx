import React from 'react';

import api from 'src/api/todos-api';
import { TodoDto } from 'src/api/dto/todo-dto';

import useFetch from '../../hooks/useFetch';

function renderContent(data: TodoDto[], isLoading: boolean) {
  if (isLoading) {
    return (<span>Loading...</span>);
  } else {
    return (<ul>
      {
        data.map(({ title, id }) => <li key={id}>{title}</li>)
      }
    </ul>);
  }
}

export default function SimpleApiTask() {
  const {
    data,
    fetchData,
    isLoading,
  } = useFetch(api.getAll);

  const fetchTodoHandler = () => fetchData();
  let content = renderContent(data, isLoading);

  return (
    <div>
      <h3>SimpleApiTask</h3>
      <div>{content}</div>
      <div>
        <button onClick={fetchTodoHandler}>Get Todos</button>
      </div>
    </div>
  );
}
