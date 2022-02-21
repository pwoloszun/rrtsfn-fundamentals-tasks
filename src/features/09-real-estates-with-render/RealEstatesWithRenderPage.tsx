import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';

import LeafletMap from 'src/components/LeafletMap';
import MyCustomizableList from '../10-adv-props-children/components/CustomizableListTask/MyCustomizableList';

import RealEstateDetailsNext from './components/RealEstateDetailsNext';
import useManageRealEstates, { RealEstate } from './hooks/useManageRealEstates';

export default function RealEstatesWithRenderPage(): React.ReactElement {
  const { realEstates, selectedRealEstate, fetchAll, toggleSelected } = useManageRealEstates();

  useEffect(() => {
    fetchAll();
  }, [fetchAll]);

  const selectRealEstateHandler = (estate: any) => {
    toggleSelected(estate);
  };

  const renderItem = (realEstate: RealEstate) => {
    const { street, type } = realEstate;
    return (
      <Row>
        <Col sm="3">{street}</Col>
        <Col sm="3">{type}</Col>
      </Row>
    );
  };

  return (
    <div>
      <h3>RealEstates (with render)</h3>
      <Row>
        <Col sm="8">

          <LeafletMap
            geoObjects={realEstates}
            selected={selectedRealEstate}
            onMarkerClick={selectRealEstateHandler}
          />

        </Col>
        <Col sm="4">
          <RealEstateDetailsNext item={selectedRealEstate} />
        </Col>
      </Row>
      <Row>
        <Col>

          <MyCustomizableList
            items={realEstates}
            render={renderItem}
          />

        </Col>
      </Row>
    </div>
  );
}

