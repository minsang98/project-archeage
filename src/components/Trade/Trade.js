/* LIBRARY */
import React from 'react';
import styled from 'styled-components';
import { Table } from 'react-bootstrap';

/* DATA */
import auctionSearch from './data/tradeFunction';
import agingData from './data/agingData';
import icon from './data/icon.png';

const Icon = styled.div`
  display: flex;
  .icon {
    background-image: url(${icon});

    width: 17px;
    height: 16px;
  }
  .icon-gold {
    background-position: 0 -2577px;
  }
  .icon-silver {
    background-position: 0 -3748px;
  }
  .icon-bronze {
    background-position: 0 -2058px;
  }
`;
const Trade = ({
  westTradeData,
  continent,
  location,
  value,
  eastTradeData,
  margin,
  sell,
  freshData,
  fresh,
  aging,
}) => {
  // auctionSearch('TOTAL', '목재').then((res) => console.log(res.data));
  /* 페이지에서 각 대륙에 맞는 장소들의 무역 정보를 변수에 담음 */
  const data =
    continent === 'west'
      ? westTradeData.filter((v) => v.location === location)[0]
      : eastTradeData.filter((v) => v.location === location)[0];
  /* 신선도를 계산하기 위한 data */
  const freshStat = freshData.filter((v) => v.freshName === fresh)[0].pack;
  const agingStat = agingData.filter((v) => v.freshName === aging)[0].pack;
  /* 물가에 따른 가격을 return */
  const calc = (price) => (price * value).toFixed(4);
  /* 실제 판매 금액 = (calc + 신선도에 따른 추가 가격)+이자2%  */
  const sellCalc = (priceValue, packName) => {
    const price = +calc(priceValue);
    let fresh = 0;
    if (/[\특산품\비료]/g.test(packName)) {
      fresh = freshStat.filter((v) => v.name === data.packName)[0].price;
    } else if (/[\벌꿀\치즈\약재]/g.test(packName)) {
      fresh = agingStat.filter((v) => v.name === data.packAged)[0].price;
    }
    let result = +price + (price / 100) * fresh;
    result = result + (result / 100) * 2;
    return result.toFixed(4);
  };
  /* 버튼 체크별 테이블 가격 data를 return */
  const sellView = (price, packName) => {
    let result = 0;
    if ((sell && margin) || margin) {
      result = (sellCalc(price, packName) - ingredient).toFixed(4);
    } else if (sell) {
      result = sellCalc(price, packName);
    } else result = calc(price);
    const gold = parseInt(result / 1);
    const silver = parseInt((result % 1) * 100);
    const bronze = parseInt((((result % 1) * 100) % 1) * 100);
    return (
      <Icon>
        {gold < 10 ? `0${gold}` : gold}
        <i className="icon icon-gold" />
        {silver < 10 ? `0${silver}` : silver}
        <i className="icon icon-silver" />
        {bronze < 10 ? `0${bronze}` : bronze}
        <i className="icon icon-bronze" />
      </Icon>
    );
  };

  /* 재료값 변수  */
  const ingredient = 1;

  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>등짐</th>
          <th>재료 값</th>
          {data.sellInfo[0].sell.map((v, i) => (
            <th key={i}>{v.location}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.sellInfo.map((v, i) => (
          <tr key={i}>
            <td>
              {/[\특산품\비료]/g.test(v.packName)
                ? `${data.location} ${data.packName} ${v.packName}`
                : /[\벌꿀\치즈\약재]/g.test(v.packName)
                ? `${data.location} ${data.packAged} ${v.packName}`
                : v.packName === 'special'
                ? `${data.location} ${v.specialName}`
                : v.bondName}
            </td>
            <td>{ingredient}</td>
            {[0, 1, 2].map((c) => (
              <td key={c}>{sellView(v.sell[c].price, v.packName)}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Trade;
