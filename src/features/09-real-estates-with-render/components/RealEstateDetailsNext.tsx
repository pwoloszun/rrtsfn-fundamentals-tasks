import React, { CSSProperties } from 'react';

import { RealEstate } from '../hooks/useManageRealEstates';

const styles: CSSProperties = {
  height: '460px',
  margin: '10px',
  padding: '10px',
  backgroundColor: 'chocolate',
};

export default function RealEstateDetailsNext(): React.ReactElement {
  // TODO inject realEstatesFacade 
  const item: any = {};

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
