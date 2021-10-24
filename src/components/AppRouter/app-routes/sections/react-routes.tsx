import React from 'react';

import Dashboard from 'src/features/00-dashboard';
import ComponentBasics from 'src/features/01-component-basics';
import PropsEvents from 'src/features/02-props-events';
import ComponentState from 'src/features/03-component-state';
import Forms from 'src/features/04-forms';
import HooksApi from 'src/features/14-hooks-api/index';
import ContextApiExamplePage from 'src/features/15-context-api-example/ContextApiExamplePage';
import TodosPage from 'src/features/05-todos/TodosPage';

const reactRoutes = [
  {
    path: "/",
    exact: true,
    label: 'Dashboard',
    main: () => <Dashboard />
  },
  {
    path: "/component-basics",
    label: 'Comp. basics',
    main: () => <ComponentBasics />
  },
  {
    path: "/props-events",
    label: 'Props & Events',
    main: () => <PropsEvents />
  },
  {
    path: "/component-state",
    label: 'Comp. state',
    main: () => <ComponentState />
  },
  {
    path: "/forms-examples",
    label: 'Forms',
    main: () => <Forms />
  },
  {
    path: "/todos",
    label: 'Todos Page',
    main: () => <TodosPage />
  },
  {
    path: "/hooks",
    label: 'Hooks API',
    main: () => <HooksApi />
  },
  {
    path: "/context-api",
    label: 'Context api',
    main: () => <ContextApiExamplePage />
  },
];

export default reactRoutes;
