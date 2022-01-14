/* LIBRARY */
import React, { useState, useRef } from 'react';
import styled from 'styled-components';

/* COMPONENT */
import Coordinate from '../components/Coordinate/Coordinate';
import CoordinateInput from '../components/Coordinate/CoordinateInput';

/* 부표 포지션 변경을 위한 변수 */
let buoyX = 0;
let buoyY = 0;
/* 이미지 스케일을 위한 변수 */
let zoom = 2;
/* 전 화면 동작의 축을 저장하기 위한 변수 */
let posY = 0;
let posX = 0;
/* 백그라운드 포지션 변경을 위한 변수 */
let backgroundPositionY = -300;
let backgroundPositionX = 0;

/* 컨테이너 스타일 */
const Container = styled.div`
  width: 100%;
  display: flex;
  background-color: #f9f9f9;
`;

const CoordinateContainer = ({ worldMap }) => {
  /* 좌표 INPUT창의 값을 저장하기 위한 state */
  const [inputX, setInputX] = useState([0, 0, 0]);
  const [inputY, setInputY] = useState([0, 0, 0]);
  /* 방향 */
  const [direction, setDirection] = useState({ x: 'W', y: 'S' });
  /* 부표 */
  const [buoy, setBuoy] = useState(false);
  /* 이미지와 부표의 스타일 */
  const [buoyStyle, setBuoyStyle] = useState({});
  const [imgStyle, setImgStyle] = useState({
    transform: 'scale(2)',
    backgroundPositionY: '-300px',
    backgroundPositionX: '0px',
  });

  /* 좌표 INPUT창 ONCHANGE */
  const coordinateChangeHandler = (e, coordinate, index) => {
    const newCoordinate = coordinate === 'X' ? [...inputX] : [...inputY];
    newCoordinate[index] = e.target.value;
    coordinate === 'X' ? setInputX(newCoordinate) : setInputY(newCoordinate);
    console.log(inputY, inputX);
  };

  /* 방향 변경 */
  const directionChangeHandler = (id) => {
    if (['W', 'E'].includes(id)) {
      return setDirection({ ...direction, x: id });
    } else {
      return setDirection({ ...direction, y: id });
    }
  };

  /* 좌표 확인 클릭 */
  const coordinateCheckPointHandler = async () => {
    const x =
      +inputX[0] + (+inputX[1] * 1.67) / 100 + (+inputX[2] * 1.67) / 10000;
    const y =
      +inputY[0] + (+inputY[1] * 1.67) / 100 + (+inputY[2] * 1.67) / 10000;
    const moveX = 49.2;
    const moveY = 50.5;
    buoyX = direction.x === 'W' ? 1030 - moveX * x : 1030 + moveX * x;
    buoyY = direction.y === 'S' ? 75 + moveY * y : 75 - moveY * y;
    await setImgStyle({
      ...imgStyle,
      transform: 'scale(1)',
      backgroundPositionY: `${-300}px`,
      backgroundPositionX: `${0}px`,
    });
    await setBuoyStyle({
      transform: `translate3d(${buoyX}px ,${buoyY}px, 0px)`,
    });
    await setBuoy(true);
  };

  /* ZOOM IN/OUT */
  const wheelHandler = async (e) => {
    /* 휠을 사용 했을때 zoom변수를 +- 함으로써 scale값을 조정 */
    if (zoom >= 2 && zoom < 8) {
      if (e.nativeEvent.wheelDelta > 0) zoom < 7 && zoom++;
      else zoom >= 3 && zoom--;
      await setImgStyle({ ...imgStyle, transform: `scale(${zoom})` });
    }
  };

  const dragStartHandler = (e) => {
    /* 드래그 시작할 때 현재의 좌표를 저장 */
    posX = e.clientX;
    posY = e.clientY;
  };

  /* 드래그 ing */
  const dragHandler = (e, positionScale, imgRef) => {
    /* 현재 zoom 상황따라 다른 최소, 최대값을 가지기 위한 변수 */
    const positionData = positionScale.filter(
      (v) => `scale(${v.scale})` === imgRef.current.style.transform,
    )[0];
    /* 현재 변수에 저장 되어있는 변수와 background-position의 좌표가 다르면 그 만큼 +-  */
    const styleBackgroundPositionX = +imgRef.current.style.backgroundPositionX
      .match(/[\-\+0-9]/g)
      .join('');
    const styleBackgroundPositionY = +imgRef.current.style.backgroundPositionY
      .match(/[\-\+0-9]/g)
      .join('');
    if (styleBackgroundPositionX !== backgroundPositionX) {
      buoyX = buoyX - (styleBackgroundPositionX - backgroundPositionX);
    }
    if (styleBackgroundPositionY !== backgroundPositionY) {
      buoyY = buoyY - (styleBackgroundPositionY - backgroundPositionY);
    }
    /* 화면을 옮기면 background-position의 좌표를 천천히 올리고 내림 */
    if (e.clientX > posX && backgroundPositionX <= positionData.xMax) {
      backgroundPositionX += 2;
      buoyX += 2;
    } else if (e.clientX < posX && backgroundPositionX > positionData.xMin) {
      backgroundPositionX -= 2;
      buoyX -= 2;
    }
    if (e.clientY > posY && backgroundPositionY <= positionData.yMax) {
      backgroundPositionY += 2;
      buoyY += 2;
    } else if (e.clientY < posY && backgroundPositionY > positionData.yMin) {
      backgroundPositionY -= 2;
      buoyY -= 2;
    }

    /* 다음 타겟의 좌표와 비교하기 위해 현재의 타겟 위치를 변수에 저장 */
    posY = e.clientY;
    posX = e.clientX;
    /* 위 작업에서 바뀐 변수들을 이용해 스타일 변경 */
    setImgStyle({
      ...imgStyle,
      backgroundPositionY: `${backgroundPositionY}px`,
      backgroundPositionX: `${backgroundPositionX}px`,
    });
    setBuoyStyle({ transform: `translate3d(${buoyX}px ,${buoyY}px, 0px)` });
  };

  return (
    <Container>
      <Coordinate
        imgStyle={imgStyle}
        direction={direction}
        buoy={buoy}
        buoyStyle={buoyStyle}
        wheelHandler={wheelHandler}
        dragStartHandler={dragStartHandler}
        dragHandler={dragHandler}
      />
      <CoordinateInput
        directionChangeHandler={directionChangeHandler}
        coordinateChangeHandler={coordinateChangeHandler}
        coordinateCheckPointHandler={coordinateCheckPointHandler}
      />
    </Container>
  );
};

export default CoordinateContainer;
