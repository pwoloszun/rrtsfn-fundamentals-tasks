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
const USER_ID = '2000';

export default function QueryExamplesPage(): React.ReactElement {
  // const someDataResp = useQuery(SomeQuery, {
  //   variables: { someId: '123' }
  // });

  return (
    <div>
      <h3>QueryExamples</h3>

      {/* <Loadable isLoading={someDataResp.loading} error={someDataResp.error}>
        <h5>All Users with Addresses</h5>
        <PrettyPrintJson data={someDataResp.data} />
      </Loadable>
      <hr /> */}

    </div>
  );
}

