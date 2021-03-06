import { gql } from '@apollo/client';

export const GetAllPlayers = gql`
  query {
    nbaPlayers {
      first_name
      last_name
      position

      # TODO
    }
  }
`;

// TODO: var $nbaTeamId
export const GetTeam = gql`
  query GetTeam($nbaTeamId: ID!) {
    nbaTeam(id: $nbaTeamId) {
      abbreviation
      conference
      division
      full_name

      players {
        first_name
        last_name
        position
      }
    }
  }
`;

// TODO: var $playerIds
export const GetPlayers = gql`
  query GetPlayers($playerIds: [ID!]) {
    nbaPlayers(ids: $playerIds) {
      first_name
      last_name
      position

      team {
        abbreviation
        full_name
      }
    }
  }
`;

export const GetBooksByLibrary = gql`
  query GetBooksByLibrary {
    libraries {
      books {
        author {
          name
        }
      }
    }
  }
`;
