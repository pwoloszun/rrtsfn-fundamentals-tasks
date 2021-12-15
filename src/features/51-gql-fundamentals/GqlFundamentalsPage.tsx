import React from 'react';
import { Col, Nav, Row } from 'react-bootstrap';
import {
  Switch,
  Route,
  NavLink,
  Redirect,
  useRouteMatch
} from 'react-router-dom';

import PageNotFound from 'src/components/NotFoundPage';

import QueryExamplesPage from './pages/QueryExamplesPage';
import MutationExamplesPage from './pages/MutationExamplesPage';
import BatchQueryExamplePage from './pages/BatchQueryExamplePage';

export default function GqlFundamentalsPage(): React.ReactElement {
  const { path, url } = useRouteMatch();

  return (
    <React.Fragment>
      <Row>
        <Col>
          <h3>GQL fundamentals</h3>

          <Nav variant="tabs" defaultActiveKey={`${url}/pure-cmp`}>
            <Nav.Item>
              <NavLink to={`${url}/query-exmp`} className="nav-link">Query Examples</NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to={`${url}/mutation-exmp`} className="nav-link">Mutation Examples</NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to={`${url}/batch-query-exmp`} className="nav-link">Batch Query Examples</NavLink>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col sm="8" >
          <Switch>
            <Route exact path={path}>
              <Redirect to={`${path}/query-exmp`} />
            </Route>

            <Route path={`${path}/query-exmp`}>
              <QueryExamplesPage />
            </Route>
            <Route path={`${path}/mutation-exmp`}>
              <MutationExamplesPage />
            </Route>
            <Route path={`${path}/batch-query-exmp`}>
              <BatchQueryExamplePage />
            </Route>

            <Route path="*">
              <PageNotFound />
            </Route>
          </Switch>
        </Col>
      </Row>
    </React.Fragment>
  );
}

