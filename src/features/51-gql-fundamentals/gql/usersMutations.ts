import { gql } from '@apollo/client';

export const CreateUser = gql`
  mutation CreateUser($params: CreateUserParams!) {
    createUser(params: $params) {
      id
      firstName
      lastName
      email
    }
  }
`;
