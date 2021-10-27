import React from 'react';
import { Nav } from 'react-bootstrap';
import {
  Switch,
  Route,
  NavLink,
  Redirect,
  useRouteMatch
} from 'react-router-dom';

import PageNotFound from 'src/components/NotFoundPage';

import PureCmpPage from './pages/PureCmpPage';
import SmartCmpPage from './pages/SmartCmpPage';

export default function TestingTasksPage(): React.ReactElement {
  const { path, url } = useRouteMatch();

  return (
    <div>
      <h5>Testing Tasks</h5>

      <Nav variant="tabs" defaultActiveKey={`${url}/pure-cmp`}>
        <Nav.Item>
          <NavLink to={`${url}/pure-cmp`} className="nav-link">Pure Cmp.</NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink to={`${url}/smart-cmp`} className="nav-link">Smart Cmp.</NavLink>
        </Nav.Item>
      </Nav>

      <Switch>
        <Route exact path={path}>
          <Redirect to={`${path}/pure-cmp`} />
        </Route>
        <Route path={`${path}/pure-cmp`}>
          <PureCmpPage />
        </Route>
        <Route path={`${path}/smart-cmp`}>
          <SmartCmpPage />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </div>
  );
}
