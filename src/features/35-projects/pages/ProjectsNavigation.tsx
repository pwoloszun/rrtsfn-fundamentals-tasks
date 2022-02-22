import React, { useEffect } from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink, Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';

import PageNotFound from 'src/components/NotFoundPage';

import CreateProjectPage from './CreateProjectPage';
import EditProjectPage from './EditProjectPage';
import ProjectsListPage from './ProjectsListPage';

export default function ProjectsNavigation() {
  const { path, url } = useRouteMatch();

  // TODO: inject projectsFacade
  // TODO: load Projects

  return (
    <React.Fragment>
      <Nav variant="tabs" defaultActiveKey={`${url}/all-projects`}>
        <Nav.Item>
          <NavLink to={`${url}/all-projects`} className="nav-link">All Projects</NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink to={`${url}/create`} className="nav-link">Create New Project</NavLink>
        </Nav.Item>
      </Nav>

      <div className="p-3">
        <Switch>
          <Route exact path={path}>
            <Redirect to={`${path}/all-projects`} />
          </Route>
          <Route path={`${path}/all-projects`} exact>
            <ProjectsListPage />
          </Route>
          <Route path={`${path}/edit/:id`}>
            <EditProjectPage />
          </Route>
          <Route path={`${path}/create`}>
            <CreateProjectPage />
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </div>
    </React.Fragment>
  );
}
