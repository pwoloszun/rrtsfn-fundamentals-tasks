import React, { useEffect, useState } from 'react';

import fetchRealEstates, { RealEstate } from 'src/api/fetch-real-estates';

import MyCustomizableList from './MyCustomizableList';

export default function CustomizableTaskPage(): React.ReactElement {
  const [realEstates, setRealEstates] = useState<RealEstate[]>([]);
  const renderRealEstate = (realEstate: RealEstate) => {
    return (
      <div>
        <h3>{realEstate.street}</h3>
        <small>{realEstate.builtAt}</small>
      </div>
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

      <MyCustomizableList
        items={realEstates}
        render={(re) => <q>{re.price}</q>}
      />
    </div>
  );
}

