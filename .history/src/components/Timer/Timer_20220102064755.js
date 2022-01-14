import React from 'react';
import styled from 'styled-components';

import sound from './lol.mp3';
import schedule from './schedule.js';

// const
const Timer = () => {
  const audio = new Audio(sound);
  //   audio.play();
  return (
    <div>
      <div>{schedule.map((v) => console.log(v.name))}</div>
    </div>
  );
};

export default Timer;
