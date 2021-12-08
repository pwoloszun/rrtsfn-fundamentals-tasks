import React, { CSSProperties } from 'react';

import RealEstateContainer from '../containers/RealEstateContainer';

const styles: CSSProperties = {
  height: '460px',
  margin: '10px',
  padding: '10px',
  backgroundColor: 'chocolate',
};

export default function RealEstateDetailsNext(): React.ReactElement {
  const { selectedRealEstate } = RealEstateContainer.useContainer();
  const item = selectedRealEstate;

  return (
    <div style={styles}>
      <div>
        <p>Street addr.: {item?.street}</p>
        <p>Latitude.: {item?.lat}</p>
        <p>Longitude: {item?.lng}</p>
        <p>Current Price: {item?.price}</p>
        <p>Building Type: {item?.type}</p>
        <p>Year of Construction: {item?.builtAt}</p>
      </div>
    </div>
  );
}
