import React from 'react';

import { useQuery } from '@apollo/client';

import Loadable from 'src/components/Loadable';
import PrettyPrintJson from 'src/components/PrettyPrintJson';

import { GetTeam, GetPlayers } from '../gql/nbaTeamsQueries';

const PLAYER_IDS = ['237', '434', '420', '117', '400', '472', '15'];

export default function BatchQueryExamplePage(): React.ReactElement {
  // const someDataResp = useQuery(SomeQuery, {
  //   variables: { someId: '123' }
  // });

  return (
    <div>
      <h3>BatchQueryExample</h3>

      {/* <Loadable isLoading={someDataResp.loading} error={someDataResp.error}>
        <h5>All NBA Teams</h5>
        <PrettyPrintJson data={someDataResp.data} />
      </Loadable>
      <hr /> */}

    </div>
  );
}
