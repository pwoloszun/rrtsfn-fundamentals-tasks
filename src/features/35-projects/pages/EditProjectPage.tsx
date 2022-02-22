import React from 'react';
import { Card } from 'react-bootstrap';

import Loadable from 'src/components/Loadable';
import PrettyPrintJson from 'src/components/PrettyPrintJson';

import useParamId from '../hooks/useParamId';
import ProjectForm, { ProjectParams } from '../components/ProjectForm';
import NextPrevNavigation from '../components/NextPrevNavigation';

export default function EditProjectPage(): React.ReactElement {
  const id = useParamId();

  // TODO: inject projectsFacade
  const project = undefined; // TODO: get Project by id
  const isLoading = project === undefined;

  const saveHandler = (params: ProjectParams) => {
    // TODO: update Project
  };

  return (
    <Card className="my-3 p-3">
      <Card.Title>Edit Project</Card.Title>
      <Card.Body>

        <Loadable isLoading={isLoading}>
          <NextPrevNavigation />
          <ProjectForm
            project={project}
            onSave={saveHandler}
          />
        </Loadable>

        <hr className='my-5' />
        <PrettyPrintJson data={project} />
      </Card.Body>
    </Card>
  );
}
