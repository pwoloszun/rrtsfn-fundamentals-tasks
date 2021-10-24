import React from 'react';

import IterablesGeneratorsYield from 'src/features/41-iterables-generators-yield';
import SagaForkModel from 'src/features/43-saga-fork-model';
import BetterMailPage from 'src/features/27-better-mail/BetterMailPage';

const sagasRoutes = [
  {
    path: '/iterables-generators-yield',
    label: 'Iterables, Generators, yield',
    main: () => <IterablesGeneratorsYield />
  },

  {
    path: '/better-mail',
    label: 'Better mail',
    main: () => <BetterMailPage />
  },

  {
    path: '/saga-fork-model',
    label: 'Saga Fork Model',
    main: () => <SagaForkModel />
  },

];

export default sagasRoutes;
