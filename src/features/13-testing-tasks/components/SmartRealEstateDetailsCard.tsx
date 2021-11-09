import React, { useEffect } from 'react';
import { Spinner } from 'react-bootstrap';

import realEstateApi, { RealEstateEntity } from 'src/api/real-estates-api';
import useFetch, { RequestStatus } from '../hooks/useFetch';
import PureMyCard from './PureMyCard';

export interface ISmartRealEstateDetailsCardProps {
  entityId: number;
}

export default function SmartRealEstateDetailsCard(props: ISmartRealEstateDetailsCardProps): React.ReactElement | null {
  const { entityId } = props;
  const {
    data,
    error,
    status,
    fetchData
  } = useFetch(realEstateApi.getById);

  useEffect(() => {
    fetchData(entityId);
  }, [entityId, fetchData]);


  switch (status) {
    case RequestStatus.Success: {
      return (
        <SuccessCard entity={data!} />
      );
    }
    case RequestStatus.Pending: {
      return (
        <PendingCard />
      );
    }
    case RequestStatus.Error: {
      return (
        <ErrorCard error={error!} />
      );
    }
    case RequestStatus.Idle: {
      return null;
    }
    default:
      throw new Error(`Unknown status: ${status}`);
  }
}

function SuccessCard(props: { entity: RealEstateEntity }) {
  const { entity } = props;
  return (
    <PureMyCard
      header={
        <div>
          Street Addr.: {entity.street}
        </div>
      }
      content={
        <div>
          <p>Price: {entity.price}</p>
          <p>Type: {entity.type}</p>
          <p>Geo. coordinates: ({entity.lat.toFixed(2)}, {entity.lng.toFixed(2)})</p>
        </div>
      }
      footer={
        <div>
          <small>All rights reserved.</small>
        </div>
      }
    />
  );
}

function PendingCard() {
  return (
    <PureMyCard
      header={
        <div>
          <p>Loading...</p>
        </div>
      }
      content={
        <div>
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      }
    />
  );
}

function ErrorCard(props: { error: Error }) {
  return (
    <PureMyCard
      header="Error"
      content={
        <code>{JSON.stringify(props.error.message)}</code>
      }
    />
  );
}
