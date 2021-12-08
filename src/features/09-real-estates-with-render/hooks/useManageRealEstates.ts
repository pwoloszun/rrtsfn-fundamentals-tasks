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
  const [selectedRealEstate, setSelectedRealEstate] = useState<RealEstate | null>(null);
  const [realEstates, setRealEstates] = useState<RealEstate[]>([]);

  const fetchAll = useCallback(() => {
    fetchRealEstates()
      .then((realEstatesData) => {
        setRealEstates(realEstatesData);
      });
  }, []);

  const toggleSelected = useCallback((estate: RealEstate) => {
    if (selectedRealEstate?.id === estate.id) {
      setSelectedRealEstate(null);
    } else {
      setSelectedRealEstate(estate);
    }
  }, [selectedRealEstate?.id]);

  return {
    selectedRealEstate,
    realEstates,
    fetchAll,
    toggleSelected,
  };
}
