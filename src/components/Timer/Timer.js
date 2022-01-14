import React from 'react';
import styled from 'styled-components';

import sound from './lol.mp3';
import schedule from './schedule.js';

import { Table } from 'react-bootstrap';

function raidFunc(name) {
  return schedule
    .filter((v) => v.name === name)[0]
    .time.map((v) => {
      return { name: name, time: v };
    });
}
const Container = styled.div`
  display: flex;
  justify-content: center;
`;
const Timer = () => {
  const audio = new Audio(sound);
  // audio.play();
  const cr = raidFunc('낮징');
  const gr = raidFunc('밤징');
  const raid = raidFunc('샤크라/글렌/레이나');
  const riftRaid = [...cr, ...gr, ...raid];
  riftRaid.sort((a, b) => a.time - b.time);

  const timeNow = new Date();
  console.log(`${timeNow.getHours()}${timeNow.getMinutes()}`);
  return (
    <Container>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>이름</th>
            <th>시간</th>
          </tr>
        </thead>
        <tbody>
          {riftRaid.map((v, i) => (
            <tr key={i}>
              <td>
                <input type="checkbox" />
              </td>
              <td>
                {['0120', '0520', '0920', '1320', '1720', '2120'].includes(
                  v.time,
                )
                  ? '태들 낮징'
                  : v.name}
              </td>
              <td>{v.time}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Timer;
