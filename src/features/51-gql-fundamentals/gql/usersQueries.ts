import { gql } from '@apollo/client';

export const GetAllUsersWithAddresses = gql`
  query GetAllUsersWithAddresses {
    users {
      address {
        city
        street
        country
      }
      firstName
      lastName
      email
      title
    }
  }
`;

export const GetUserWithProjects = gql`
  query GetUserWithProjects($userId: ID!) {
    user(id: $userId) {
      projects {
        name
        description
        department
      }
      firstName
      lastName
      email
      title
    }
  }
`;

export const GetProjectsWithUsers = gql`
  query GetProjectsWithUsers($projectIds: [ID!]) {
    projects(ids: $projectIds) {
      id
      name
      description
      department
      
      users {
        id
        firstName
        lastName
        email
      }
    }
  }
`;
