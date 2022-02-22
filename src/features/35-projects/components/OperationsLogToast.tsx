import React from 'react';
import { ToastContainer, Toast } from 'react-bootstrap';

import ProjectsContainer from '../containers/ProjectsContainer';

const styles = {
  right: 0,
  left: 'auto',
};

export default function OperationsLogToast(): React.ReactElement {
  // TODO: inject projectsFacade

  return (
    <ToastContainer className="p-3 fixed-bottom" style={styles}>
      <Toast bg="dark">
        <Toast.Body className="text-white">
          1st msg TODO
        </Toast.Body>
      </Toast>

      <Toast bg="dark">
        <Toast.Body className="text-white">
          2nd msg TODO
        </Toast.Body>
      </Toast>
    </ToastContainer>
  );
}

