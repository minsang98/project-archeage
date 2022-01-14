import React from 'react';
import styled from 'styled-components';

import Timer from '../components/Timer/Timer';

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 1340px;
`;
const TimerContainer = () => {
  return (
    <Container>
      <Timer />
    </Container>
  );
};

export default TimerContainer;
