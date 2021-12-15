import { gql } from '@apollo/client';

export const GetAllUsersWithAddresses = gql`
  query GetAllUsersWithAddresses {
    someField
    
    # TODO
  }
`;

// var: $userId
export const GetUserWithProjects = gql`
  query GetUserWithProjects {
    someField

    # TODO
  }
`;

// var: $projectIds - array of Ids
export const GetProjectsWithUsers = gql`
  query GetProjectsWithUsers {
    someField

    # TODO
  }
`;
