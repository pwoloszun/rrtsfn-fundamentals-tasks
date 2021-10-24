import React from 'react';

import ReduxFundamentals from 'src/features/21-redux-fundamentals';
import ReduxAsync from 'src/features/22-redux-async';
import TodosNormalized from 'src/features/24-redux-todos-normalized';
import ReduxMiddleware from 'src/features/25-redux-middleware';
import MyMailPage from 'src/features/26-mymail/MyMailPage';

const reduxRoutes = [
  {
    path: '/redux-fundamentals',
    label: 'Redux Fundamentals',
    main: () => <ReduxFundamentals />
  },
  {
    path: '/redux-async',
    label: 'Redux Async',
    main: () => <ReduxAsync />
  },
  {
    path: '/redux-todos-normalized',
    label: 'Redux Todos Normalized',
    main: () => <TodosNormalized />
  },
  {
    path: '/redux-middleware',
    label: 'Redux Middleware',
    main: () => <ReduxMiddleware />
  },
  {
    path: '/mymail',
    label: 'MyMail',
    main: () => <MyMailPage />
  },
];

export default reduxRoutes;
