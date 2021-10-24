import { useState, useCallback } from 'react';

import fetchRealEstates, { RealEstate } from 'src/api/fetch-real-estates';
export type { RealEstate }

type UseManageRealEstatesResult = {
  selectedRealEstate: RealEstate | null;
  realEstates: RealEstate[];
  fetchAll: () => void;
  toggleSelected: (estate: RealEstate) => void;
};

export default function useManageRealEstates(): UseManageRealEstatesResult {
  // TODO
  const selectedRealEstate = null;
  const realEstates: RealEstate[] = [];

  const fetchAll = useCallback(() => {
    // TODO
  }, []);

  const toggleSelected = useCallback((estate: RealEstate) => {
    // TODO
  }, []);

  return {
    selectedRealEstate,
    realEstates,
    fetchAll,
    toggleSelected,
  };
}
