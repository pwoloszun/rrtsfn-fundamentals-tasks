import React from 'react';

import todoApi from 'src/api/todos-api';
import { TodoDto } from 'src/api/dto/todo-dto';

import useFetch, { RequestStatus } from '../../hooks/useFetch';

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

export default function SimpleApiTask(): React.ReactElement {
  const {
    data = [],
    fetchData,
    status,
  } = useFetch(todoApi.getAll);

  const fetchTodoHandler = () => fetchData();
  let content = renderContent(data, status === RequestStatus.Pending);

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
