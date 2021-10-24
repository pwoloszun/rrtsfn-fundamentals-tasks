import React from 'react';

import DataTable from 'src/components/DataTable';

import MyCounter from './components/MyCounter';
import MyTaskListContainer from './components/MyTaskListContainer';
import MyAjaxCounter from './components/MyAjaxCounter';
import AsyncTimerExample from './components/AsyncTimerExample';
import { IN_MEMORY_TASKS } from './data/in-memory-tasks';

const META_DATA = [
  { value: 'id', text: 'Task ID' },
  { value: 'title', text: 'Current Title' },
];

export default function ComponentsTestingPage(): React.ReactElement {
  return (
    <div>
      <h3>Component Basics</h3>
      <MyCounter />
      <hr />

      <MyAjaxCounter />
      <hr />

      <MyTaskListContainer />
      <hr />

      <DataTable
        items={IN_MEMORY_TASKS}
        metaData={META_DATA}
      />
      <hr />

      <AsyncTimerExample />
      <hr />

    </div>
  );
}
