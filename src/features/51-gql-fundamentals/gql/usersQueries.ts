import { gql } from '@apollo/client';

export const GetAllUsersWithAddresses = gql`
  query GetAllUsersWithAddresses {
    users {
      firstName
      lastName
      email
    }
    
    # TODO
  }
`;

// var: $userId
export const GetUserWithProjects = gql`
  query GetUserWithProjects($userId: ID!) {
    user(id: $userId) {
      username
      title
      description
    }

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
