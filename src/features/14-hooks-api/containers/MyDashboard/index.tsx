import React, { useState, useEffect } from 'react';

import fetchRealEstates, { RealEstate } from 'src/api/fetch-real-estates';

import EntitiesSimpleList from '../../components/EntitiesSimpleList';

export default function MyDashboard() {
  // TODO 1
  const realEstates: RealEstate[] = [];
  const isLoading = true;;
  const error = null;

  // TODO 1: impl fetching real estates


  // TODO 2: refactor
  // const [
  //   realEstates,
  //   isRealEstatesLoading,
  //   realEstatesError
  // ] = useAsync(fetchRealEstates);

  // const [
  //   users,
  //   isUsersLoading,
  //   usersError
  // ] = useAsync(fetchUsers);



  return (
    <div>
      <h3>MyDashboard</h3>
      <EntitiesSimpleList
        entites={realEstates}
        isLoading={isLoading}
        error={error}
        renderValue="street"
      />
      <hr />
      {/* <EntitiesSimpleList
        entites={users}
        isLoading={isUsersLoading}
        error={usersError}
        renderValue="email"
      /> */}
    </div>
  );
}
