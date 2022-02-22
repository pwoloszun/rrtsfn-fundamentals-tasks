import React from 'react';
import OperationsLogToast from './components/OperationsLogToast';

import ProjectsNavigation from './pages/ProjectsNavigation';

export default function ProjectsPage(): React.ReactElement {
  return (
    <div>
      <h5>Projects</h5>

      {/* TODO: provide singleton projectsFacade for app subtree */}
      <div>
        <OperationsLogToast />
        <ProjectsNavigation />
      </div>

    </div>
  );
}

