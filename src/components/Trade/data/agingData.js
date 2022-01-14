/* eslint-disable import/no-anonymous-default-export */
/* 숙성 등짐 신선도의 대한 데이터 */
export default [
  {
    freshName: '갓 만든',
    pack: [
      { name: '천연', price: -10, time: 1440 },
      { name: '무첨가', price: -18, time: 1440 },
      { name: '기본', price: -25, time: 1440 },
      { name: '가공', price: -27, time: 1440 },
    ],
  },
  {
    freshName: '잘 숙성된',
    pack: [
      { name: '천연', price: 30, time: 2880 },
      { name: '무첨가', price: 15, time: 2880 },
      { name: '기본', price: 5, time: 3600 },
      { name: '가공', price: 3, time: 4320 },
    ],
  },
  {
    freshName: '과숙성',
    pack: [
      { name: '천연', price: 10, time: 3060 },
      { name: '무첨가', price: 2, time: 3120 },
      { name: '기본', price: 2, time: 4320 },
      { name: '가공', price: 1, time: 5280 },
    ],
  },
  {
    freshName: '변질됨',
    pack: [
      { name: '천연', price: -15, time: 3360 },
      { name: '무첨가', price: -12, time: 3600 },
      { name: '기본', price: -10, time: 5760 },
      { name: '가공', price: -8, time: 7200 },
    ],
  },
  {
    freshName: '상함',
    pack: [
      { name: '천연', price: -35, time: 3361 },
      { name: '무첨가', price: -35, time: 3601 },
      { name: '기본', price: -35, time: 5761 },
      { name: '가공', price: -35, time: 7201 },
    ],
  },
];
