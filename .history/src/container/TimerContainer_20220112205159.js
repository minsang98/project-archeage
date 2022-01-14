import React from 'react';
import styled from 'styled-components';

import Timer from '../components/Timer/Timer';

const Container = styled.div`
margin:auto
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
