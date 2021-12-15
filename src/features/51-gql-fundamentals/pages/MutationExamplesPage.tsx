import React, { useCallback } from 'react';
import { useMutation } from '@apollo/client';

import Loadable from 'src/components/Loadable';
import PrettyPrintJson from 'src/components/PrettyPrintJson';

import { CreateUser } from '../gql/usersMutations';

export default function MutationExamplesPage(): React.ReactElement {
  const [createUserMutation, createdUserResp] = useMutation(CreateUser);

  const createUserHandler = useCallback(() => {
    createUserMutation({
      variables: {
        params: {
          firstName: 'bob',
          lastName: 'smith',
          emailDomain: 'gmail.com',
        }
      }
    });
  }, [createUserMutation]);

  return (
    <div>
      <h3>MutationExamples</h3>

      <button onClick={createUserHandler}>Create User</button>
      <Loadable isLoading={createdUserResp.loading} error={createdUserResp.error}>
        <h5>Created User</h5>
        <PrettyPrintJson data={createdUserResp.data} />
      </Loadable>
      <hr />
    </div>
  );
}
