/* LIBRARY */
import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { MdWhereToVote } from 'react-icons/md';

/* DATA */
import worldMap from './worldMap.jpg';

const CoordinateComponent = styled.div`
  width: 100%;
  .coordinate-world {
    position: relative;
    height: 95vh;
    overflow: hidden;
    display: flex;
    .img {
      position: relative;
      display: flex;
      width: 100%;
      height: 180vh;
      background-repeat: no-repeat;
      background-size: cover;
      cursor: pointer;
    }
  }
  .buoy {
    position: absolute;
    width: 15px;
    height: 15px;
    display: flex;
    color: red;
    left: 0;
    top: 0;
  }
`;

const Coordinate = ({
  buoy,
  buoyStyle,
  imgStyle,
  wheelHandler,
  dragStartHandler,
  dragHandler,
}) => {
  /* 이미지 태그를 선택하기 위한 ref */
  const imgRef = useRef();
  /* scale값에 대한 x,y축 최소,최대값 */
  const positionScale = [
    { scale: 1, yMax: -2, yMin: -802, xMax: -2, xMin: -10 },
    { scale: 2, yMax: 425, yMin: -820, xMax: 400, xMin: -400 },
    { scale: 3, yMax: 525, yMin: -820, xMax: 500, xMin: -500 },
    { scale: 4, yMax: 625, yMin: -820, xMax: 600, xMin: -600 },
    { scale: 5, yMax: 625, yMin: -820, xMax: 600, xMin: -600 },
    { scale: 6, yMax: 625, yMin: -820, xMax: 600, xMin: -600 },
    { scale: 7, yMax: 625, yMin: -820, xMax: 600, xMin: -600 },
  ];

  return (
    <CoordinateComponent>
      <div className="coordinate-world">
        <div
          className="img"
          style={{ backgroundImage: `url(${worldMap})`, ...imgStyle }}
          ref={imgRef}
          onWheel={(e) => wheelHandler(e)}
          onDragStart={(e) => dragStartHandler(e)}
          onDragOver={(e) => dragHandler(e, positionScale, imgRef)}
          draggable={true}
        >
          {buoy && <MdWhereToVote className="buoy" style={buoyStyle} />}
        </div>
      </div>
    </CoordinateComponent>
  );
};

export default Coordinate;
