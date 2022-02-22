import React from 'react';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import Loadable from 'src/components/Loadable';

import ProjectsList from '../components/ProjectsList';
import ProjectsContainer, { ProjectDto } from '../containers/ProjectsContainer';

export default function ProjectsListPage(): React.ReactElement {
  const history = useHistory();

  // TODO: inject projectsFacade
  const isLoading = true; // TODO
  const projects: ProjectDto[] = []; // TODO

  const removeHandler = (project: ProjectDto) => {
    // TODO: remove Project
  };

  const editHandler = (project: ProjectDto) => {
    const editUrl = `/projects-task/edit/${project.id}`; // TODO
    history.push(editUrl);
  };

  return (
    <Card className="my-3 p-3">
      <Card.Title>Projects</Card.Title>
      <Card.Body>
        <Loadable isLoading={isLoading}>
          <ProjectsList
            projects={projects}
            onRemove={removeHandler}
            onEdit={editHandler}
          />
        </Loadable>
      </Card.Body>
    </Card>
  );
}
