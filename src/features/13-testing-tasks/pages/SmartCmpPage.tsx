import React, { useState } from 'react';
import { Row } from 'react-bootstrap';

import SmartRealEstateDetailsCard from '../components/SmartRealEstateDetailsCard';
import SmartQuickSearch from '../components/SmartQuickSearch';

export default function SmartCmpPage(): React.ReactElement {
  const [entityId, setEntityId] = useState(1);
  return (
    <div>
      <h3>SmartCmpPage</h3>

      {/* <Row className="mx-5 mb-1">
        <label style={{ width: '33%', margin: '0 auto' }}>
          Real Estate ID:
          <input value={entityId}
            onChange={(ev) => setEntityId(ev.target.value as any)}
            type="number"
          />
        </label>
      </Row> */}


      <Row className="mx-5 mb-5">
        <SmartQuickSearch />
      </Row>

      <Row className="mx-5 mb-5">
        <SmartRealEstateDetailsCard entityId={entityId} />
      </Row>
    </div>
  );
}

