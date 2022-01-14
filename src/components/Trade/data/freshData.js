/* eslint-disable import/no-anonymous-default-export */
/* 특산품,비료의 대한 신선도  */
export default [
  {
    freshName: '신선함',
    pack: [
      { name: '특송', price: 30, time: 15 },
      { name: '신선', price: 15, time: 15 },
      { name: '표준', price: 5, time: 30 },
      { name: '보존', price: 3, time: 360 },
    ],
  },
  {
    freshName: '보통',
    pack: [
      { name: '특송', price: 10, time: 30 },
      { name: '신선', price: 5, time: 60 },
      { name: '표준', price: 2, time: 180 },
      { name: '보존', price: 0, time: 720 },
    ],
  },
  {
    freshName: '변질됨',
    pack: [
      { name: '특송', price: -10, time: 60 },
      { name: '신선', price: -7, time: 180 },
      { name: '표준', price: -5, time: 720 },
      { name: '보존', price: -20, time: 1440 },
    ],
  },
  {
    freshName: '상함',
    pack: [
      { name: '특송', price: -15, time: 120 },
      { name: '신선', price: -12, time: 1440 },
      { name: '표준', price: -10, time: 1440 },
      { name: '보존', price: -25, time: 4320 },
    ],
  },
  {
    freshName: '부패함',
    pack: [
      { name: '특송', price: -35, time: 121 },
      { name: '신선', price: -35, time: 1441 },
      { name: '표준', price: -35, time: 1441 },
      { name: '보존', price: -35, time: 4321 },
    ],
  },
];
