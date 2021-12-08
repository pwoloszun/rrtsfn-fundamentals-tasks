import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';

import LeafletMap from 'src/components/LeafletMap';
import RenderDataTable from 'src/components/RenderDataTable';

import RealEstateDetailsNext from './components/RealEstateDetailsNext';
import useManageRealEstates, { RealEstate } from './hooks/useManageRealEstates';

export default function RealEstatesWithRenderPage(): React.ReactElement {

  return (
    <div>
      TODO: define provider
      wrapp app sub-tree
      <PageContent />
    </div>
  );
}


export default function PageContent(): React.ReactElement {
  // TODO inject realEstatesFacade 
  // const { realEstates, selectedRealEstate, fetchAll, toggleSelected } = useManageRealEstates();

  useEffect(() => {
    fetchAll();
  }, [fetchAll]);

  const selectRealEstateHandler = (estate: any) => {
    toggleSelected(estate);
  };

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

