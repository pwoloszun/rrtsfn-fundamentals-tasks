import React from 'react';

import ComponentsTestingPage from 'src/features/12-components-testing/ComponentsTestingPage';
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
    path: "/components-testing",
    label: 'Components Testing',
    main: () => <ComponentsTestingPage />
  },
];

export default otherRoutes;
