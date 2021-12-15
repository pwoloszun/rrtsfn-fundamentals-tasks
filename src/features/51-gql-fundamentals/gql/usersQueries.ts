import { gql } from '@apollo/client';

export const GetAllUsersWithAddresses = gql`
  query {
    users {
      firstName
      lastName
      username

      # TODO
    }
  }
`;

// TODO: var $userId
export const GetUserWithProjects = gql`
  query  {
    user {
      firstName
      lastName
      email

      # TODO
    }
  }
`;

// TODO: var $projectIds
export const GetProjectsWithUsers = gql`
  query {
    projects {
      id
      name
      description
      
      # TODO
    }
  }
`;
