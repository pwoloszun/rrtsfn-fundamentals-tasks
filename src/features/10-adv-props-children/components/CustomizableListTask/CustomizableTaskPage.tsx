import React, { useEffect, useState } from 'react';

import fetchRealEstates, { RealEstate } from 'src/api/fetch-real-estates';
import { TODOS_DATA } from 'src/features/05-todos/data/todos-data';

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
        items={TODOS_DATA}
        render={(todo) => <q>{todo.title}</q>}
      />

      <MyCustomizableList
        items={realEstates}
        render={(item) => <div>{item.street}</div>}
      />

      <MyCustomizableList
        items={realEstates}
        render={(item) => {
          return (
            <div>
              <h1>{item.type}</h1>
              <strong>Price: {item.price}</strong>
            </div>
          );
        }}
      />


    </div>
  );
}

