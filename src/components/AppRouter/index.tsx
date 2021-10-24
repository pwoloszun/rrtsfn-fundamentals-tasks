import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

import appRoutes from './app-routes';
import PageNotFound from '../NotFoundPage';
import { AppRoutesMap, RouteInfo } from './app-routes/index';

const routesForModule = (moduleRoutes: RouteInfo[]): JSX.Element[] => {
  return moduleRoutes.map(function (route) {
    return (
      <Route
        key={route.path}
        exact={route.exact}
        path={route.path}
        component={route.main}
      />
    );
  });
};

const flattenRoutes = (appRoutes: AppRoutesMap) => {
  const moduleTitles = Object.keys(appRoutes);
  return moduleTitles.reduce(function (memo: any, title) {
    const routes = routesForModule(appRoutes[title]);
    return memo.concat(routes);
  }, []);
};


const renderDropDown = (title: string, routes: RouteInfo[]) => {
  const links = routes.map(function (route) {
    return (
      <Link to={route.path}
        className="nav-link"
        key={route.path}
      >
        {route.label}
      </Link>
    );
  });

  return (
    <NavDropdown key={title} title={title} id={title}>
      {links}
    </NavDropdown>
  );
};

const renderDropDownsFor = (appRoutes: AppRoutesMap) => {
  const moduleTitles = Object.keys(appRoutes);
  return moduleTitles.map(function (title) {
    const routes = appRoutes[title];
    return renderDropDown(title, routes);
  });
};


const AppRouter = function () {
  const dropDowns = renderDropDownsFor(appRoutes);
  const routes = flattenRoutes(appRoutes);

  return (
    <Router>
      <div>
        <Navbar bg="light" expand="lg" variant="light">
          <Navbar.Brand>RR-Fundamentals</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              {
                dropDowns
              }
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <hr />

        <Switch>
          {
            routes
          }
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
