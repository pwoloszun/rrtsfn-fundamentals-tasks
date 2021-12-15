import React from 'react';
import { Spinner, Alert } from 'react-bootstrap';

interface ILoadableProps {
  isLoading: boolean;
  error?: Error;
}

export default function Loadable(
  props: React.PropsWithChildren<ILoadableProps>
): React.ReactElement {
  const { isLoading, error, children } = props;

  if (error) {
    return (
      <Alert variant="danger">
        Error: {error.message}
      </Alert>
    );
  } else if (isLoading) {
    return (
      <Spinner animation="grow" role="status" />
    );
  } else {
    return (
      <React.Fragment>
        {children}
      </React.Fragment>
    );
  }
}
