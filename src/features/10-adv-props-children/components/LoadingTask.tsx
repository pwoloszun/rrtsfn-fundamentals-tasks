import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';

import { delayedValue } from 'src/utils/randoms';
import fetchUsers, { User } from 'src/api/fetch-users';

import LoadingWrapper from './LoadingWrapper';
import useAsync from 'src/features/14-hooks-api/hooks/useAsync';

function getMagicNumber(): Promise<number> {
  return delayedValue(123456, 3200);
}

export default function LoadingTask(): React.ReactElement {
  const [users, isUsersLoading, usersError] = useAsync(fetchUsers);

  const [magicNumber, setMagicNumber] = useState<number | null>(null);
  const isMagicNumberLoading = magicNumber === null;

  useEffect(() => {
    getMagicNumber()
      .then((n) => {
        setMagicNumber(n);
      });
  }, []);

  return (
    <div>
      <h3>LoadingTask</h3>

      <Row>
        <Col sm="6">
          <LoadingWrapper isLoading={isUsersLoading} error={usersError}>
            Loaded emails:
            <ul>
              {
                users?.map((user) => {
                  return (
                    <li key={user.id}>{user.email}</li>
                  );
                })
              }
            </ul>
          </LoadingWrapper>
        </Col>

        <Col>
          <LoadingWrapper isLoading={isMagicNumberLoading}>
            <h5>Your magic number is: {magicNumber}</h5>
          </LoadingWrapper>
        </Col>
      </Row>
    </div>
  );
}

