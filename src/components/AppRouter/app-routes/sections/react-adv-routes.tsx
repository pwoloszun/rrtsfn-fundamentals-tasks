import React from 'react';

import HeroesNextPage from 'src/features/06b-heroes-next/HeroesNextPage';
import Cities from 'src/features/07-cities';
import RealEstatesWithRenderPage from 'src/features/09-real-estates-with-render/RealEstatesWithRenderPage';
import AdvPropsChildren from 'src/features/10-adv-props-children';
import ProjectsPage from 'src/features/35-projects/ProjectsPage';

const reactAdvRoutes = [
  {
    path: "/hereos-next",
    label: 'Heroes Next',
    main: () => <HeroesNextPage />
  },
  {
    path: "/cities",
    label: 'Cities',
    main: () => <Cities />
  },

  {
    path: "/real-estates-with-render",
    label: 'Real estates (with render)',
    main: () => <RealEstatesWithRenderPage />
  },

  {
    path: "/adv-props-children-examples",
    label: 'Adv. Props, Children',
    main: () => <AdvPropsChildren />
  },

  {
    path: "/projects-task",
    label: 'Projects task',
    main: () => <ProjectsPage />
  },

];

export default reactAdvRoutes;
