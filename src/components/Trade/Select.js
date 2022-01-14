import React from 'react';
import { Form } from 'react-bootstrap';

const Select = ({ optionArray, selectValue, value }) => {
  const style = { marginRight: '1.125rem' };
  return (
    /* SELECT COMPONENT, 배열을 받아와 옵션값으로 줌 */
    <Form.Select
      className="w-25 p-3"
      style={style}
      onChange={(e) => selectValue(e)}
      value={value}
    >
      {optionArray.map((v, i) => (
        <option value={v} key={i}>
          {/* 받아온 값이 west일 경우 '서대륙', east을 경우 '동대륙', 나머지는 정상적으로 */}
          {v === 'west' ? '서대륙' : v === 'east' ? '동대륙' : v}
        </option>
      ))}
    </Form.Select>
  );
};

export default Select;
