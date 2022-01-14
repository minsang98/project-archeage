/* LIBRARY */
import React, { useState } from 'react';
import styled from 'styled-components';
import { Form } from 'react-bootstrap';

/* COMPONENT */
import Select from '../components/Trade/Select';
import Trade from '../components/Trade/Trade';
import Fresh from '../components/Trade/Fresh';

/* DATA */
import {
  westTradeData,
  eastTradeData,
} from '../components/Trade/data/tradeData';
import freshData from '../components/Trade/data/freshData';
import agingData from '../components/Trade/data/agingData';

/* STYLED-COMPONENT */
const Container = styled.div`
  padding: 1.125rem;
  width: 1320px;
  margin: auto;
  box-sizing: border-box;

  .explan {
    div {
      padding-bottom: 0.3rem;
    }
  }
  .fresh-table {
    cursor: pointer;
    width: 100%;
    margin-bottom: 0.5rem;
  }
  .trade-title {
    margin-bottom: 1.125rem;
    font-size: 2rem;
    font-weight: 700;
  }
`;
const InputContainer = styled.div`
  margin-top: 2.5rem;
  margin-bottom: 1.125rem;
  display: flex;
  .value {
    border: 0.5px solid #ced4da;
    border-radius: 5px;
    margin-right: 1.125rem;
  }
  .ques-icon {
    position: absolute;
    right: 10rem;
  }
  .check {
    width: 300px;
    margin: auto;
  }
`;

const TradeContainer = () => {
  const [continent, setContinent] = useState('west'); /* 대륙 */
  const [location, setLocation] = useState('가랑돌 평원'); /* 장소 */
  const [value, setValue] = useState(130); /* 물가 */
  const [margin, setMargin] = useState(false); /* 차익 */
  const [sell, setSell] = useState(false); /* 실제 판매 금액 */
  const [fresh, setFresh] = useState('신선함'); /* 특산품 신선도 */
  const [aging, setAging] = useState('갓 만든'); /* 숙성 신선도 */
  const [freshTableOver, setFreshTableOver] =
    useState(false); /* 특산품 및 신선도 신선도 테이블 ON/OFF */
  const [server, setServer] = useState('TOTAL'); /* 경매장 서버 선택 */

  /* 각 대륙의 장소들을 넣은 배열, Select 옵션 */
  const locationArray =
    continent === 'west'
      ? westTradeData.map((v) => v.location)
      : eastTradeData.map((v) => v.location);
  /* 대륙 변경 함수, 각 대륙의 첫번째 장소를 기본 장소로 설정 */
  const selectContinent = (e) => {
    setContinent(e.target.value);
    e.target.value === 'west'
      ? setLocation('가랑돌 평원')
      : setLocation('고대의 숲');
  };
  /* 장소 변경 함수 */
  const selectLocation = (e) => setLocation(e.target.value);
  /* 신선도 변경 함수 */
  const selectFresh = (e) => setFresh(e.target.value);
  const selectAging = (e) => setAging(e.target.value);
  /* 물가 변경 함수 */
  const valueChange = (e) => {
    0 < +e.target.value && e.target.value <= 130 && setValue(e.target.value);
  };
  /* 차익 변경 함수, TRUE/FALSE */
  const selectMargin = () => setMargin(!margin);
  /* 실제 판매 금액 변경 함수, TRUE/FALSE */
  const selectSell = () => setSell(!sell);
  return (
    <Container>
      {/* 설명 시작 */}
      <div className="explan">
        <h4 className="trade-title">무역</h4>
        <div>기본적으로 교역소별 물가에 따른 값을 보여줍니다.</div>
        <div>실제 판매 가격 = 물가 x 신선도 x 이자 2%</div>
        <div>차액 = 실제 판매 가격 - 재료 값</div>
        <span
          className="fresh-table"
          onClick={() => setFreshTableOver(!freshTableOver)}
        >
          신선도 표 보기
        </span>
        {freshTableOver && (
          <>
            <Fresh freshData={freshData} />
            <Fresh agingData={agingData} />
          </>
        )}
      </div>
      {/* 설명 끝 */}
      {/* SELECT START */}
      <InputContainer>
        <Select
          optionArray={['west', 'east']}
          selectValue={selectContinent}
          value={continent}
        ></Select>
        <Select
          optionArray={locationArray}
          selectValue={selectLocation}
          value={location}
        ></Select>
        <input
          onChange={(e) => valueChange(e)}
          value={value}
          type="number"
          className="w-50 p-3 value"
          size={10}
        />
        <Select
          optionArray={freshData.map((v) => v.freshName)}
          selectValue={selectFresh}
          value={fresh}
        />
        <Select
          optionArray={agingData.map((v) => v.freshName)}
          selectValue={selectAging}
          value={aging}
        />
        <div className="check">
          <Form>
            <Form.Check
              type="checkbox"
              id="real-sell"
              label="실제 판매 금액"
              onClick={selectSell}
            />
            <Form.Check
              type="checkbox"
              id="margin"
              label="차액"
              onClick={selectMargin}
            />
          </Form>
        </div>
      </InputContainer>
      {/* SELECT END */}
      {/* TABLE START */}
      <Trade
        westTradeData={westTradeData}
        eastTradeData={eastTradeData}
        continent={continent}
        location={location}
        value={value}
        margin={margin}
        sell={sell}
        freshData={freshData}
        fresh={fresh}
        aging={aging}
      />
      {/* TABLE END */}
    </Container>
  );
};

export default TradeContainer;
