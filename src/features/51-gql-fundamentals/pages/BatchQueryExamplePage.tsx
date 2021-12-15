import React from 'react';

import { useQuery } from '@apollo/client';

import Loadable from 'src/components/Loadable';
import PrettyPrintJson from 'src/components/PrettyPrintJson';

import { GetTeam, GetPlayers } from '../gql/nbaTeamsQueries';

const PLAYER_IDS = ['237', '434', '420', '117', '400', '472', '15'];

const TEAM_ID = '2';

export default function BatchQueryExamplePage(): React.ReactElement {
  const teamResp = useQuery(GetTeam, {
    variables: { nbaTeamId: TEAM_ID }
  });

  // TODO: GetPlayers

  return (
    <div>
      <h3>BatchQueryExample</h3>

      {/* <Loadable isLoading={teamResp.loading} error={teamResp.error}>
        <h5>NBA Team</h5>
        <PrettyPrintJson data={teamResp.data} />
      </Loadable> */}
      <hr />

    </div>
  );
}
