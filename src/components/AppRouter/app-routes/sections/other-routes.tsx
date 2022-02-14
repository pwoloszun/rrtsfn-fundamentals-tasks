import React from 'react';

import TestingTasksPage from 'src/features/13-testing-tasks/TestingTasksPage';
import MemoExamplePage from 'src/features/16-simple-optimizations/MemoExamplePage';
import SimpleOptimizationsPage from 'src/features/16-simple-optimizations/SimpleOptimizationsPage';

const otherRoutes = [
  {
    path: "/simple-optimizations",
    label: 'Simple optimizations',
    main: () => <SimpleOptimizationsPage />
  },
  {
    path: "/memo-example",
    label: 'Memo example',
    main: () => <MemoExamplePage />
  },
  {
    path: "/testing-tasks",
    label: 'Testing Tasks',
    main: () => <TestingTasksPage />
  },
];

export default otherRoutes;
