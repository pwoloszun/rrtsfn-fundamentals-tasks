import React from 'react';
import { Spinner } from 'react-bootstrap';

interface ILoadingWrapperProps {
  isLoading: boolean;
  error?: Error | null;
}

export default function LoadingWrapper(
  props: React.PropsWithChildren<ILoadingWrapperProps>
): React.ReactElement {
  const { isLoading, error, children } = props;

  if (error) {
    return (
      <h1>{error.message}</h1>
    );
  } else if (isLoading) {
    return (
      <Spinner
        animation="grow"
        role="status"
      />
    );
  } else {
    return (
      <React.Fragment>{children}</React.Fragment>
    );
  }
}
