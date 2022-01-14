/* LIBRARY */
import React from 'react';
import styled from 'styled-components';
import { Form } from 'react-bootstrap';

const CoordinateInputComponent = styled.div`
  height: 100%;
  width: 40vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10rem;
  .coord-input {
    width: 50px;
    margin-left: 0.5rem;
  }
`;

const CoordinateInput = ({
  directionChangeHandler,
  coordinateChangeHandler,
  coordinateCheckPointHandler,
}) => {
  return (
    <CoordinateInputComponent>
      <Form>
        <div className="mb-3">
          {['W', 'E'].map((v) => (
            <Form.Check
              inline
              type="radio"
              key={`default-${v}`}
              name="direction-x"
              label={v}
              onChange={() => directionChangeHandler(v)}
              defaultChecked={v === 'W' && true}
            />
          ))}
          {[0, 1, 2].map((v) => (
            <input
              onChange={(e) => coordinateChangeHandler(e, 'X', v)}
              className="coord-input"
              key={`direction-x-${v}`}
            />
          ))}
        </div>
      </Form>
      <Form>
        <div className="mb-3">
          {['S', 'N'].map((v) => (
            <Form.Check
              inline
              type="radio"
              key={`default-${v}`}
              name="direction-y"
              label={v}
              onChange={() => directionChangeHandler(v)}
              defaultChecked={v === 'S' && true}
            />
          ))}
          {[0, 1, 2].map((v) => (
            <input
              onChange={(e) => coordinateChangeHandler(e, 'Y', v)}
              className="coord-input"
              key={`direction-y-${v}`}
            />
          ))}
        </div>
      </Form>
      <button
        onClick={coordinateCheckPointHandler}
        className="btn btn-primary w-75 p-3"
      >
        확인
      </button>
    </CoordinateInputComponent>
  );
};

export default CoordinateInput;
