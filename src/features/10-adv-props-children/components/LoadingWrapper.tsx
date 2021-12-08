import React from 'react';
import { Spinner } from 'react-bootstrap';

interface ILoadingWrapperProps {
  isLoading: boolean;
  error?: Error | null;
}

export default function LoadingWrapper(
  props: any // TODO
): React.ReactElement {
  // TODO

  return (
    <Spinner
      animation="grow"
      role="status"
    />
  );
}
