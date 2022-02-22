import createEntityApi, { EntityParams } from './createEntityApi';

export interface ProjectDto {
  id: number;
  name: string;
  description: string;
  version: string;
  url: string;
}

export type ProjectDtoParams = EntityParams<ProjectDto>;

const projectsApi = createEntityApi<ProjectDto>(`/api/projects`);

export default projectsApi;
