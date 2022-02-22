import { createContainer } from 'unstated-next';

import useManageProjects, { ProjectDto } from '../hooks/useManageProjects';

export type { ProjectDto }

const ProjectsContainer = createContainer(useManageProjects);

export default ProjectsContainer;
