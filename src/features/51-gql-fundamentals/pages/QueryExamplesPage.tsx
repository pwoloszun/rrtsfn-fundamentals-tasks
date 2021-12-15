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
  // const userWithProjectsResp = useQuery(GetUserWithProjects, {
  //   variables: { userId: '2000' }
  // });

  // TODO: GetAllUsersWithAddresses

  // TODO: GetUserWithProjects

  // TODO: GetProjectsWithUsers


  return (
    <div>
      <h3>QueryExamples</h3>

      <Loadable isLoading={allUsersWithAddressesResp.loading} error={allUsersWithAddressesResp.error}>
        <h5>All Users with Addresses</h5>
        <PrettyPrintJson data={allUsersWithAddressesResp.data} />
      </Loadable>
      <hr />

      {/* <Loadable isLoading={userWithProjectsResp.loading} error={userWithProjectsResp.error}>
        <h5>User with PRojects</h5>
        <PrettyPrintJson data={userWithProjectsResp.data} />
      </Loadable>
      <hr /> */}


    </div>
  );
}

