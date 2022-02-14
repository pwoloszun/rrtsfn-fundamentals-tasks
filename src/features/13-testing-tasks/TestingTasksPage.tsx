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
import HooksPage from './pages/HooksPage';
import ExamplesPage from './pages/ExamplesPage';

export default function TestingTasksPage(): React.ReactElement {
  const { path, url } = useRouteMatch();
  const links = getLinksFor(path, url);
  const defaultLink = links[0];

  return (
    <div>
      <h5>Testing Tasks</h5>

      <Nav variant="tabs" defaultActiveKey={defaultLink.fullUrl}>
        {
          links.map((link) => {
            const { fullUrl, text } = link;
            return (
              <Nav.Item key={fullUrl}>
                <NavLink to={fullUrl} className="nav-link">
                  {text}
                </NavLink>
              </Nav.Item>
            );
          })
        }
      </Nav>

      <Switch>
        <Route exact path={path}>
          <Redirect to={defaultLink.fullPath} />
        </Route>

        {
          links.map((link) => {
            const { fullPath, render } = link;
            return (
              <Route key={fullPath} path={fullPath}>
                {render()}
              </Route>
            );
          })
        }

        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </div>
  );
}

const LINKS = [
  { path: 'pure-cmp', text: 'Pure Cmp.', render: () => <PureCmpPage /> },
  { path: 'smart-cmp', text: 'Smart Cmp.', render: () => <SmartCmpPage /> },
  { path: 'hooks', text: 'Hooks', render: () => <HooksPage /> },
  { path: 'examples', text: 'Examples', render: () => <ExamplesPage /> },
];

function getLinksFor(currPath: string, url: string) {
  return LINKS.map((link) => {
    const { path, text, render } = link;
    const fullPath = `${currPath}/${path}`;
    const fullUrl = `${url}/${path}`;
    return { text, fullPath, fullUrl, render };
  });
}
