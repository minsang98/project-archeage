/* LIBRARY */
import React, { useMemo } from 'react';
import styled from 'styled-components';
import { Table } from 'react-bootstrap';

/* STYLED-COMPONENT */
const FreshComponent = styled.div`
  h3 {
    font-size: 1.5rem;
    font-weight: 700;
  }
`;
const Fresh = ({ freshData, agingData }) => {
  /* 신선도 TABLE을 보여줄 컴포넌트 */
  const data = freshData || agingData;
  return (
    <FreshComponent>
      {/* 받아온 데이터에 따른 제목 */}
      {freshData ? <h3>특제/비료/전통 특산품</h3> : <h3>숙성 특산품</h3>}
      <Table striped bordered hover className="w-75 p-3">
        <thead>
          <tr>
            <th>상태</th>
            {/* 받아온 데이터에 따른 테이블 제목 */}
            {data[0].pack.map((v, i) => (
              <th key={i}>{v.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* 받아온 데이터에 따른 테이블 내용 */}
          {data.map((v, i) => (
            <tr key={i}>
              <td>{v.freshName}</td>
              {v.pack.map((c, j) => (
                <td key={j}>
                  {c.time >= 60 && !(c.time % 60)
                    ? `${c.time / 60} 시간 이내 `
                    : c.time >= 60 && c.time & 60
                    ? `${parseInt(c.time / 60)} 시간 이후 `
                    : `${c.time} 분 이내 `}
                  {c.price > 0 ? `+${c.price}` : c.price}%
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </FreshComponent>
  );
};

export default Fresh;
