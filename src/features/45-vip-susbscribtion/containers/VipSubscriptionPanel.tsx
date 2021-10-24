import React from 'react';
import { Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

import { selectors, actions } from 'src/store/45-vip-subscription';

export default function VipSubscriptionPanel(): React.ReactElement {
  const user = {} as any; //TODO
  const isVip = false; // TODO

  return (
    <div style={{ padding: '10px', border: '1px solid #000', margin: '6px' }}>
      <h4>VipSubscriptionPanel</h4>
      <h3>Welcome {user.email}!</h3>
      {
        isVip ? <VipSubscriptionInfo /> : <BuyVipSubscriptionPanel />
      }
    </div>
  );
}

function BuyVipSubscriptionPanel(): React.ReactElement {
  // TODO

  const activateVipHandler = () => {
    // TODO
  };

  return (
    <div>
      <h4>BuyVipSubscriptionPanel</h4>
      <Button onClick={activateVipHandler}>Activate VIP</Button>
    </div>
  );
}

function VipSubscriptionInfo(): React.ReactElement {
  return (
    <div>
      <h4>VipSubscriptionInfo</h4>
      <h3>Subscrition ends in {9} secs</h3>
    </div>
  );
}
