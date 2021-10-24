import React, { useEffect } from 'react';
import { Col, Row, Spinner } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

import { selectors, actions } from 'src/store/45-vip-subscription';

import VipSubscriptionPanel from './containers/VipSubscriptionPanel';
import ProductsList from './containers/ProductsList';
import PersonalizedRecommendations from './containers/PersonalizedRecommendations';
import ShippingInfo from './containers/ShippingInfo';

export default function VipSubscriptionPage(): React.ReactElement {
  const id = 1;
  const dispatch = useDispatch();
  const isLoading = true; // TODO

  useEffect(() => {
    // TODO
  }, [dispatch]);

  if (isLoading) {
    return <Spinner animation="border" />;
  } else {
    return (
      <div>
        <h5>VipSubscriptionPage</h5>
        <hr />

        <Row>
          <Col>
            <VipSubscriptionPanel />
          </Col>
          <Col>
            <ProductsList />
          </Col>
        </Row>

        <Row>
          <Col>
            <PersonalizedRecommendations />
          </Col>
          <Col>
            <ShippingInfo />
          </Col>
        </Row>

      </div>
    );
  }

}
