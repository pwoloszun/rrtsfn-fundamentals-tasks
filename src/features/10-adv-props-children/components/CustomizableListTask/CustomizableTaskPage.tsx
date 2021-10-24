import React, { useEffect, useState } from 'react';

import fetchRealEstates, { RealEstate } from 'src/api/fetch-real-estates';

import MyCustomizableList from './MyCustomizableList';

export default function CustomizableTaskPage(): React.ReactElement {
  const [realEstates, setRealEstates] = useState<RealEstate[]>([]);
  const renderRealEstate = (realEstate: RealEstate) => {
    return ( // TODO
      <div>realEstate_PLACEHOLDER_TODO</div>
    );
  };

  useEffect(() => {
    fetchRealEstates()
      .then((realEstatesData) => setRealEstates(realEstatesData));
  }, []);

  return (
    <div>
      <h3>CustomizableListTask</h3>
      <MyCustomizableList
        items={realEstates}
        render={renderRealEstate}
      />
    </div>
  );
}

