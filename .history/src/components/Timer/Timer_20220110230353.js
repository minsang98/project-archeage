import React from 'react';
import styled from 'styled-components';

import sound from './lol.mp3';
import schedule from './schedule.js';

import { Table } from 'react-bootstrap';

// const
const Timer = () => {
  const audio = new Audio(sound);
  // audio.play();
  const cr = schedule.filter((v) => v.name === '낮징');
  const gr = schedule.filter((v) => v.name === '밤징');
  console.log(cr);
  return (
    <div>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>이름</th>
            <th>시간</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map((v) => (
            <tr key={v.id}>
              {console.log(v.name)}
              <td>{v.id}</td>
              <td>{v.name}</td>
              <td>{v.time[0]}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Timer;
