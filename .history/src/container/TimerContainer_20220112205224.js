import React from 'react';
import styled from 'styled-components';

import Timer from '../components/Timer/Timer';

const Container = styled.div`
  padding-top: 1.125rem;
  border-radius: 10px;
  margin: auto;
  width: 1320px;
`;
const TimerContainer = () => {
  return (
    <Container>
      <Timer />
    </Container>
  );
};

export default TimerContainer;
