import React from 'react';
import { Spinner } from 'react-bootstrap';

interface ILoadingWrapperProps {
  isLoading: boolean;
  error?: Error | null;
}

export default function LoadingWrapper(
  props: React.PropsWithChildren<ILoadingWrapperProps> // TODO
): React.ReactElement {
  const { isLoading, children, error } = props;

  if (error) {
    return <h3>Error {error.message}</h3>;
  } else if (isLoading) {
    return (
      <Spinner
        animation="grow"
        role="status"
      />
    );
  } else {
    return <React.Fragment>
      {children}
    </React.Fragment>;
  }
}
