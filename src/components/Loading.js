import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
  return (
    /* LOADING COMPONENT */
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
};

export default Loading;
