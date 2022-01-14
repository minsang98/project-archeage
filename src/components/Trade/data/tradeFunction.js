// const qs = require('querystring');
// const axios = require('axios');
import qs from 'querystring';
import axios from 'axios';

/* 경매장 가격 불러오는 함수.*/
/* 분할기준으로 받아옴 */
/* 일괄구매, 입찰 적용X */
const auctionSearch = (searchServer, searchKeyword) => {
  const data = qs.stringify({
    sortType: 'BUYOUT_PRICE_ASC',
    searchType: 'NAME',
    serverCode: searchServer,
    gradeId: '',
    keyword: searchKeyword,
    equalKeyword: 'true',
  });
  let price = [0, 0, 0];
  const result = axios
    .post('https://archeage.xlgames.com/auctions/list/ajax', data)
    .then(function (response) {
      const data = response.data.split('<').filter((v) => /\gol_num/g.test(v));
      if (/\gol_num gol/g.test(data[0])) {
        price = price.map((v, i) => +data[i].match(/[0-9]/g).join(''));
      } else {
        price[1] = +data[0].match(/[0-9]/g).join('');
        price[2] = +data[1].match(/[0-9]/g).join('');
      }
      return price;
    })
    .catch(function (error) {
      console.log(error);
    });
  return result;
};
export default auctionSearch;
