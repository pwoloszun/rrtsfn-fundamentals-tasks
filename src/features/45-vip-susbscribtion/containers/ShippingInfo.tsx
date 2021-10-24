import React from 'react';
import { Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

import { selectors, actions } from 'src/store/45-vip-subscription';

export default function ShippingInfo(): React.ReactElement {
  return (
    <div style={{ padding: '10px', border: '1px solid #000', margin: '6px' }}>
      <h4>ShippingInfo</h4>
      TODO
    </div>
  );
}

function VipFreeShipping(): React.ReactElement {
  return (
    <div>
      <h4>VIP Free Shipping!</h4>
    </div>
  );
}

function CommonShipping(): React.ReactElement {
  return (
    <div>
      <h4>Shipping cost $15</h4>
    </div>
  );
}
