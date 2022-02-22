import React from 'react';
import { Button, ButtonGroup, Col, Row } from 'react-bootstrap';

import RenderDataTable from 'src/components/RenderDataTable';

interface ProjectEntity {
  id: number;
  name: string;
}

export interface IProjectsListProps<T extends ProjectEntity> {
  projects: T[];
  onRemove: (project: T) => void;
  onEdit: (project: T) => void;
}

export default function ProjectsList<T extends ProjectEntity>(
  props: IProjectsListProps<T>
): React.ReactElement {
  const { projects, onEdit, onRemove } = props;

  const renderProjectEntity = (project: T) => {
    const { name } = project;
    const removeClickHandler = () => onRemove(project);
    const editClickHandler = () => onEdit(project);
    return (
      <Row>
        <Col sm="8">{name}</Col>
        <Col sm="4">
          <ButtonGroup>
            <Button onClick={editClickHandler} variant="info">Edit</Button>
            <Button onClick={removeClickHandler} variant="danger">Remove</Button>
          </ButtonGroup>
        </Col>
      </Row>
    );
  };

  return (
    <RenderDataTable
      items={projects}
      renderItem={renderProjectEntity}
    />
  );
}
