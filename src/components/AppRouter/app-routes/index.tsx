import React from 'react';

import reactRoutes from './sections/react-routes';
import reactAdvRoutes from './sections/react-adv-routes';

import reduxRoutes from './sections/redux-routes';
import sagasRoutes from './sections/sagas-routes';
import otherRoutes from './sections/other-routes';
import gqlRoutes from './sections/gql-routes';

export interface RouteInfo {
  path: string;
  label: string;
  main: React.FC;
  exact?: boolean;
}

export interface AppRoutesMap {
  [title: string]: RouteInfo[];
}

const appRoutes: AppRoutesMap = {
  'React tasks': reactRoutes,
  'React Adv. tasks': reactAdvRoutes,
  'Redux tasks': reduxRoutes,
  'Sagas tasks': sagasRoutes,
  'Other tasks': otherRoutes,
  'GQL tasks': gqlRoutes,
};

export default appRoutes;
