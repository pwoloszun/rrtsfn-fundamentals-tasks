import React, { useEffect, useCallback } from 'react';
import { Row, Col } from 'react-bootstrap';
import { RealEstate } from 'src/api/fetch-real-estates';

import LeafletMap from 'src/components/LeafletMap';
import RenderDataTable from 'src/components/RenderDataTable';

import RealEstateDetailsNext from './components/RealEstateDetailsNext';
import RealEstateContainer from './containers/RealEstateContainer';

export default function RealEstatesWithRenderPage(): React.ReactElement {
  return (
    <RealEstateContainer.Provider>
      <PageContent />
    </RealEstateContainer.Provider>
  );
}

function PageContent(): React.ReactElement {
  const {
    realEstates,
    selectedRealEstate,
    fetchAll,
    toggleSelected
  } = RealEstateContainer.useContainer();

  useEffect(() => {
    fetchAll();
  }, [fetchAll]);

  const selectRealEstateHandler = useCallback((estate: any) => {
    toggleSelected(estate);
  }, [toggleSelected]);

  const header = (
    <Row>
      <Col sm="3">Street</Col>
      <Col sm="3">Building Type</Col>
    </Row>
  );
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
          <RealEstateDetailsNext />
        </Col>
      </Row>
      <Row>
        <Col>

          <RenderDataTable
            items={realEstates}
            renderItem={renderItem}
            header={header}
            onRowClick={selectRealEstateHandler}
            selectedItem={selectedRealEstate}
          />

        </Col>
      </Row>
    </div>
  );
}

