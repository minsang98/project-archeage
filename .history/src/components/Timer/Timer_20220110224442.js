import React from 'react';
import styled from 'styled-components';

import sound from './lol.mp3';
import schedule from './schedule.js';

import { Table } from 'react-bootstrap';

// const
const Timer = () => {
  const audio = new Audio(sound);
  audio.play();
  return (
    <div>
      <div>{schedule.map((v) => console.log(v.name))}</div>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Timer;
