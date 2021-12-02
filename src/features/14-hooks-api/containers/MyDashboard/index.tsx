import React, { useState, useEffect } from 'react';

import fetchRealEstates, { RealEstate } from 'src/api/fetch-real-estates';
import fetchUsers, { User } from 'src/api/fetch-users';

import EntitiesSimpleList from '../../components/EntitiesSimpleList';
import useAsync from '../../hooks/useAsync';

export default function MyDashboard() {
  // const [realEstates, setRealEstates] = useState<RealEstate[]>([]);
  // // TODO 1
  // const isLoading = true;;
  // const error = null;

  // // TODO 1: impl fetching real estates
  // useEffect(() => {
  //   fetchRealEstates()
  //     .then((realEstates) => {
  //       console.log('re:', realEstates);
  //     })
  //     .catch((err) => {
  //       // TODO
  //     })
  //     .finally(() => {
  //       // TODO ?
  //     });
  // }, []);



  // TODO 2: refactor
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
