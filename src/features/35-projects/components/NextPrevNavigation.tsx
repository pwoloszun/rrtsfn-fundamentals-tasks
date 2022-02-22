import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import useParamId from '../hooks/useParamId';

export default function NextPrevNavigation(): React.ReactElement {
  const id = useParamId();
  const { hasNext, nextUrl, hasPrev, prevUrl } = useProjectNavigation(id);

  return (
    <Row>
      <Col sm="6">
        <NavLink to={prevUrl}>Previous Project</NavLink>
      </Col>
      <Col sm="6" style={{ 'textAlign': 'right' }}>
        <NavLink to={nextUrl}>Next Project</NavLink>
      </Col>
    </Row>
  );
}

function useProjectNavigation(id: number) {
  // TODO: inject projectsFacade
  const hasNext = false; // TODO
  const nextProject = { id: 123 }; // TODO
  const nextUrl = hasNext ? `/projects-task/edit/${nextProject!.id}` : '#';
  const hasPrev = false; // TODO
  const prevProject = { id: 123 }; // TODO
  const prevUrl = hasPrev ? `/projects-task/edit/${prevProject!.id}` : '#';

  return {
    hasNext,
    nextUrl,
    hasPrev,
    prevUrl,
  };
}
