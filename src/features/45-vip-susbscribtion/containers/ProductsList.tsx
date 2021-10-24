import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

import { selectors, actions } from 'src/store/45-vip-subscription';

export default function ProductsList(): React.ReactElement {
  const isVip = false; // TODO

  useEffect(() => {
    // TODO
  }, []);

  return (
    <div style={{ padding: '10px', border: '1px solid #000', margin: '6px' }}>
      <h4>ProductsList</h4>
      {
        isVip ? <VipProductsList /> : <CommonProductsList />
      }
    </div>
  );
}

function CommonProductsList(): React.ReactElement {
  const products = [] as any[]; // TODO

  return (
    <div>
      <h4>CommonProductsList :(</h4>
      <ul>
        {
          products.map((p) => <li key={p.id}>{p.name}</li>)
        }
      </ul>
    </div>
  );
}

function VipProductsList(): React.ReactElement {
  const products = [] as any[]; // TODO

  return (
    <div>
      <h4>=== VipProductsList === :D</h4>
      <ul>
        {
          products.map((p) => <li key={p.id}>{p.name}</li>)
        }
      </ul>
    </div>
  );
}
