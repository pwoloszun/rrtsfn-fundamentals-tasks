import React from 'react';
import { useQuery } from '@apollo/client';

import Loadable from 'src/components/Loadable';
import PrettyPrintJson from 'src/components/PrettyPrintJson';

import {
  GetAllUsersWithAddresses,
  GetUserWithProjects,
  GetProjectsWithUsers
} from '../gql/usersQueries';

const PROJECT_IDS = ['1000', '200', '300', '400'];

export default function QueryExamplesPage(): React.ReactElement {
  const allUsersWithAddressesResp = useQuery(GetAllUsersWithAddresses);
  const userWithProjectsResp = useQuery(GetUserWithProjects, {
    variables: { userId: '8000' }
  });
  const allProjectsWithUsersResp = useQuery(GetProjectsWithUsers, {
    variables: { projectIds: PROJECT_IDS }
  });

  return (
    <div>
      <h3>QueryExamples</h3>

      <Loadable isLoading={allUsersWithAddressesResp.loading} error={allUsersWithAddressesResp.error}>
        <h5>All Users with Addresses</h5>
        <PrettyPrintJson data={allUsersWithAddressesResp.data} />
      </Loadable>
      <hr />

      <Loadable isLoading={userWithProjectsResp.loading} error={userWithProjectsResp.error}>
        <h5>User with Projects</h5>
        <PrettyPrintJson data={userWithProjectsResp.data} />
      </Loadable>
      <hr />

      <Loadable isLoading={allProjectsWithUsersResp.loading} error={allProjectsWithUsersResp.error}>
        <h5>All Projects with Users</h5>
        <PrettyPrintJson data={allProjectsWithUsersResp.data} />
      </Loadable>
      <hr />
    </div>
  );
}

