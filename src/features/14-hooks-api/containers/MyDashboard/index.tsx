import React from 'react';
import fetchRealEstates from 'src/api/fetch-real-estates';
import fetchUsers from 'src/api/fetch-users';

import EntitiesSimpleList from '../../components/EntitiesSimpleList';
import useAsync from '../../hooks/useAsync';

export default function MyDashboard() {
  const [
    realEstates,
    isRealEstatesLoading,
    realEstatesError
  ] = useAsync(fetchRealEstates);

  const [
    users,
    isUsersLoading,
    usersError
  ] = useAsync(fetchUsers);

  return (
    <div>
      <h3>MyDashboard</h3>
      <EntitiesSimpleList
        entites={realEstates}
        isLoading={isRealEstatesLoading}
        error={realEstatesError}
        renderValue="street"
      />
      <hr />
      <EntitiesSimpleList
        entites={users}
        isLoading={isUsersLoading}
        error={usersError}
        renderValue="email"
      />
    </div>
  );
}
