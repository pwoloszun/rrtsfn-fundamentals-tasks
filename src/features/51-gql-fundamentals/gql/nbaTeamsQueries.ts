import { gql } from '@apollo/client';

export const GetTeam = gql`
  query GetTeam($nbaTeamId: ID!) {
    nbaTeam(id: $nbaTeamId) {
      abbreviation
      full_name

      # TODO players
    }
  }
`;

export const GetAllPlayers = gql`
  query {
    nbaPlayers {
      first_name
      last_name
      position

      # TODO team
    }
  }
`;

export const GetPlayers = gql`
  query GetPlayers($playerIds: [ID!]) {
    someField

    # TODO

    # TODO 2: team
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
