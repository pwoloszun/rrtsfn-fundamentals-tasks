import React from 'react';
import { Card } from 'react-bootstrap';

import ProjectForm, { ProjectParams } from '../components/ProjectForm';

export default function CreateProjectPage(): React.ReactElement {
  // TODO: inject projectsFacade

  const saveHandler = (params: ProjectParams) => {
    // TODO: create new Project
  };

  return (
    <Card className="my-3 p-3">
      <Card.Title>Create Project</Card.Title>
      <Card.Body>

        <ProjectForm onSave={saveHandler} />

      </Card.Body>
    </Card>
  );
}
