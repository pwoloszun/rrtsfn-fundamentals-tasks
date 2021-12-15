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
  // const someResp = useQuery(GetSomeGraph, {
  //   variables: { someId: '123' }
  // });

  // TODO: GetAllUsersWithAddresses

  // TODO: GetUserWithProjects

  // TODO: GetProjectsWithUsers


  return (
    <div>
      <h3>QueryExamples</h3>

      {/* <Loadable isLoading={someResp.loading} error={someResp.error}>
        <h5>All Users with Addresses</h5>
        <PrettyPrintJson data={someResp.data} />
      </Loadable>
      <hr /> */}


    </div>
  );
}

