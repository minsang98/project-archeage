import React from 'react';
import styled from 'styled-components';

import sound from './lol.mp3';
import schedule from './schedule.js';

import { Table } from 'react-bootstrap';

// const
const Timer = () => {
  const audio = new Audio(sound);
  // audio.play();
  return (
    <div>
      <div>{schedule.map((v) => console.log(v.name))}</div>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>이름</th>
            <th>시간</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map((v, i) => {
            <tr>
              <td>{i + 1}</td>
              <td>{v.name}</td>
              <td>{v.time[0]}</td>
            </tr>;
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Timer;
