import React from 'react';
import { Spinner } from 'react-bootstrap';

interface ILoadingWrapperProps {
  isLoading: boolean;
}

export default function LoadingWrapper(
  props: React.PropsWithChildren<ILoadingWrapperProps>
): React.ReactElement {
  const { isLoading, children } = props;

  if (isLoading) {
    return (
      <Spinner
        animation="grow"
        role="status"
      />
    );
  } else {
    return (
      <React.Fragment>
        {children}
      </React.Fragment>
    );
  }
}
