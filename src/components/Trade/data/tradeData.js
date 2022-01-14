/* eslint-disable import/no-anonymous-default-export */
/* 각 등짐별 제작재료, 판매 가격 */
function p(price, appreciate) {
  return price / appreciate;
}
const fertilizer = {};
const hoeny = {};
const cheeze = {};
const medicinal = {};
const bond = {};
export const westTradeData = [
  /* 가랑돌 평원 */
  {
    location: '가랑돌 평원',
    packAged: '무첨가',
    packName: '신선',
    sellInfo: [
      {
        packName: '특제 특산품',
        ingredient: [
          { name: '곱게 빻은 곡물', ea: 300 },
          { name: '양털', ea: 10 },
        ],
        sell: [
          { location: '두 왕관', price: p(29.224, 130) },
          { location: '솔즈리드 반도', price: p(27.9325, 128) },
          { location: '십자별 평원', price: p(30.35, 121) },
        ],
      },
      {
        packName: '특산품',
        ingredient: [
          { name: '훈증 시킨 약재', ea: 180 },
          { name: '수선화', ea: 15 },
        ],
        sell: [
          { location: '두 왕관', price: p(12.5596, 130) },
          { location: '솔즈리드 반도', price: p(12.0586, 130) },
          { location: '십자별 평원', price: p(14.693, 127) },
        ],
      },
      {
        packName: '전통 특산품',
        ingredient: [
          { name: '농축된 과즙', ea: 150 },
          { name: '은행나뭇잎', ea: 10 },
        ],
        sell: [
          { location: '두 왕관', price: p(13.2503, 129) },
          { location: '솔즈리드 반도', price: p(12.1655, 129) },
          { location: '십자별 평원', price: p(16.8489, 130) },
        ],
      },
      {
        packName: '비료',
        ingredient: fertilizer,
        sell: [
          { location: '두 왕관', price: p(13.919, 130) },
          { location: '솔즈리드 반도', price: p(12.7656, 130) },
          { location: '십자별 평원', price: p(17.9063, 130) },
        ],
      },
      {
        packName: '벌꿀',
        ingredient: hoeny,
        sell: [
          { location: '두 왕관', price: p(20.3481, 130) },
          { location: '솔즈리드 반도', price: p(19.5361, 129) },
          { location: '십자별 평원', price: p(24.3286, 130) },
        ],
      },
      {
        packName: '치즈',
        ingredient: cheeze,
        sell: [
          { location: '두 왕관', price: p(19.5805, 130) },
          { location: '솔즈리드 반도', price: p(18.8541, 130) },
          { location: '십자별 평원', price: p(23.2148, 130) },
        ],
      },
      {
        packName: '약재',
        ingredient: medicinal,
        sell: [
          { location: '두 왕관', price: p(20.2986, 130) },
          { location: '솔즈리드 반도', price: p(19.6397, 130) },
          { location: '십자별 평원', price: p(23.5497, 130) },
        ],
      },
    ],
  },

  /* 그위오니드 숲 */
  {
    location: '그위오니드 숲',
    packAged: '기본',
    packName: '신선',
    sellInfo: [
      {
        packName: '특제 특산품',
        ingredient: [
          { name: '농축된 과즙', ea: 300 },
          { name: '거위털', ea: 10 },
        ],
        sell: [
          { location: '두 왕관', price: p(33.9406, 130) },
          { location: '솔즈리드 반도', price: p(32.0563, 130) },
          { location: '십자별 평원', price: p(34.7441, 120) },
        ],
      },
      {
        packName: '특산품',
        ingredient: [
          { name: '조각난 채소', ea: 180 },
          { name: '사과', ea: 5 },
        ],
        sell: [
          { location: '두 왕관', price: p(14.8952, 130) },
          { location: '솔즈리드 반도', price: p(13.7901, 130) },
          { location: '십자별 평원', price: p(15.9912, 119) },
        ],
      },
      {
        packName: '전통 특산품',
        ingredient: [
          { name: '훈증 시킨 약재', ea: 150 },
          { name: '양파', ea: 15 },
        ],
        sell: [
          { location: '두 왕관', price: p(17.0671, 130) },
          { location: '솔즈리드 반도', price: p(14.438, 128) },
          { location: '십자별 평원', price: p(19.3034, 130) },
        ],
      },
      {
        packName: '비료',
        ingredient: fertilizer,
        sell: [
          { location: '두 왕관', price: p(17.8161, 130) },
          { location: '솔즈리드 반도', price: p(15.2813, 130) },
          { location: '십자별 평원', price: p(20.761, 130) },
        ],
      },
      {
        packName: '벌꿀',
        ingredient: hoeny,
        sell: [
          { location: '두 왕관', price: p(23.8029, 130) },
          { location: '솔즈리드 반도', price: p(22.3425, 130) },
          { location: '십자별 평원', price: p(28.7659, 130) },
        ],
      },
      {
        packName: '치즈',
        ingredient: cheeze,
        sell: [
          { location: '두 왕관', price: p(23.1035, 130) },
          { location: '솔즈리드 반도', price: p(21.4994, 130) },
          { location: '십자별 평원', price: p(27.2282, 130) },
        ],
      },
      {
        packName: '약재',
        ingredient: medicinal,
        sell: [
          { location: '두 왕관', price: p(23.7449, 130) },
          { location: '솔즈리드 반도', price: p(22.2883, 130) },
          { location: '십자별 평원', price: p(27.3057, 130) },
        ],
      },
      {
        packName: 'bond',
        ingredient: bond,
        bondName: '꿈의 유배자들 푸른 소금 상회 수송품',
        sell: [
          { location: '두 왕관', price: p(83.735, 128) },
          { location: '솔즈리드 반도', price: p(78.0001, 130) },
          { location: '십자별 평원', price: p(87.083, 123) },
        ],
      },
    ],
  },

  /* 긴 모래톱 */
  {
    location: '긴 모래톱',
    packAged: '가공',
    packName: '보존',
    sellInfo: [
      {
        packName: '특제 특산품',
        ingredient: [
          { name: '훈증 시킨 약재', ea: 300 },
          { name: '아보카도', ea: 5 },
        ],
        sell: [
          { location: '두 왕관', price: p(38.093, 130) },
          { location: '솔즈리드 반도', price: p(39.6079, 130) },
          { location: '십자별 평원', price: p(40.2711, 128) },
        ],
      },
      {
        packName: '특산품',
        ingredient: [
          { name: '손질된 고기', ea: 200 },
          { name: '로즈마리', ea: 5 },
        ],
        sell: [
          { location: '두 왕관', price: p(18.329, 130) },
          { location: '솔즈리드 반도', price: p(19.3149, 130) },
          { location: '십자별 평원', price: p(19.2518, 130) },
        ],
      },
      {
        packName: '전통 특산품',
        ingredient: [
          { name: '곱게 빻은 곡물', ea: 160 },
          { name: '오이', ea: 15 },
        ],
        sell: [
          { location: '두 왕관', price: p(20.1967, 130) },
          { location: '솔즈리드 반도', price: p(21.0426, 130) },
          { location: '십자별 평원', price: p(22.4309, 130) },
        ],
      },
      {
        packName: '비료',
        ingredient: fertilizer,
        sell: [
          { location: '두 왕관', price: p(20.6158, 128) },
          { location: '솔즈리드 반도', price: p(22.0878, 130) },
          { location: '십자별 평원', price: p(23.0366, 130) },
        ],
      },
      {
        packName: '벌꿀',
        ingredient: hoeny,
        sell: [
          { location: '두 왕관', price: p(28.4049, 130) },
          { location: '솔즈리드 반도', price: p(30.5039, 130) },
          { location: '십자별 평원', price: p(31.2668, 128) },
        ],
      },
      {
        packName: '치즈',
        ingredient: cheeze,
        sell: [
          { location: '두 왕관', price: p(27.4032, 130) },
          { location: '솔즈리드 반도', price: p(29.2038, 130) },
          { location: '십자별 평원', price: p(30.6932, 130) },
        ],
      },
      {
        packName: '약재',
        ingredient: medicinal,
        sell: [
          { location: '두 왕관', price: p(28.4173, 130) },
          { location: '솔즈리드 반도', price: p(29.9175, 130) },
          { location: '십자별 평원', price: p(32.0474, 130) },
        ],
      },
      {
        packName: 'special',
        specialName: '상어 지느러미',
        ingredient: [
          { name: '상어 지느러미', ea: 1 },
          { name: '목재', ea: 100 },
        ],
        sell: [
          { location: '두 왕관', price: p(28.3361, 130) },
          { location: '솔즈리드 반도', price: p(38.4007, 130) },
          { location: '십자별 평원', price: p(35.5297, 130) },
        ],
      },
    ],
  },

  /* 두 왕관 */
  {
    location: '두 왕관',
    packAged: '천연',
    packName: '특송',
    sellInfo: [
      {
        packName: '특제 특산품',
        ingredient: [
          { name: '훈증 시킨 약재', ea: 300 },
          { name: '우유', ea: 5 },
        ],
        sell: [
          { location: '두 왕관', price: p(0, 130) },
          { location: '솔즈리드 반도', price: p(26.7032, 130) },
          { location: '십자별 평원', price: p(25.9359, 121) },
        ],
      },
      {
        packName: '특산품',
        ingredient: [
          { name: '곱게 빻은 곡물', ea: 180 },
          { name: '석류', ea: 3 },
        ],
        sell: [
          { location: '두 왕관', price: p(0, 130) },
          { location: '솔즈리드 반도', price: p(11.6203, 130) },
          { location: '십자별 평원', price: p(12.1736, 127) },
        ],
      },
      {
        packName: '전통 특산품',
        ingredient: [
          { name: '말린 화초', ea: 150 },
          { name: '창포', ea: 15 },
        ],
        sell: [
          { location: '두 왕관', price: p(0, 130) },
          { location: '솔즈리드 반도', price: p(12.7554, 129) },
          { location: '십자별 평원', price: p(14.1923, 130) },
        ],
      },
      {
        packName: '비료',
        ingredient: fertilizer,
        sell: [
          { location: '두 왕관', price: p(0, 130) },
          { location: '솔즈리드 반도', price: p(13.4041, 130) },
          { location: '십자별 평원', price: p(14.8844, 130) },
        ],
      },
      {
        packName: '벌꿀',
        ingredient: hoeny,
        sell: [
          { location: '두 왕관', price: p(0, 130) },
          { location: '솔즈리드 반도', price: p(18.6943, 130) },
          { location: '십자별 평원', price: p(19.7302, 130) },
        ],
      },
      {
        packName: '치즈',
        ingredient: cheeze,
        sell: [
          { location: '두 왕관', price: p(0, 130) },
          { location: '솔즈리드 반도', price: p(18.069, 130) },
          { location: '십자별 평원', price: p(19.0334, 130) },
        ],
      },
      {
        packName: '약재',
        ingredient: medicinal,
        sell: [
          { location: '두 왕관', price: p(0, 130) },
          { location: '솔즈리드 반도', price: p(18.6488, 130) },
          { location: '십자별 평원', price: p(19.5573, 130) },
        ],
      },
    ],
  },

  /* 릴리엇 구릉지 */
  {
    location: '릴리엇 구릉지',
    packAged: '무첨가',
    packName: '신선',
    sellInfo: [
      {
        packName: '특제 특산품',
        ingredient: [
          { name: '다진 향신료', ea: 300 },
          { name: '우유', ea: 5 },
        ],
        sell: [
          { location: '두 왕관', price: p(29.8748, 129) },
          { location: '솔즈리드 반도', price: p(28.3859, 130) },
          { location: '십자별 평원', price: p(32.6306, 126) },
        ],
      },
      {
        packName: '특산품',
        ingredient: [
          { name: '말린 화초', ea: 180 },
          { name: '올리브', ea: 3 },
        ],
        sell: [
          { location: '두 왕관', price: p(13.0795, 130) },
          { location: '솔즈리드 반도', price: p(12.0709, 130) },
          { location: '십자별 평원', price: p(14.8491, 125) },
        ],
      },
      {
        packName: '전통 특산품',
        ingredient: [
          { name: '농축된 과즙', ea: 150 },
          { name: '쌀', ea: 15 },
        ],
        sell: [
          { location: '두 왕관', price: p(14.4681, 130) },
          { location: '솔즈리드 반도', price: p(12.1789, 130) },
          { location: '십자별 평원', price: p(17.2369, 130) },
        ],
      },
      {
        packName: '비료',
        ingredient: fertilizer,
        sell: [
          { location: '두 왕관', price: p(15.0928, 128) },
          { location: '솔즈리드 반도', price: p(12.7785, 130) },
          { location: '십자별 평원', price: p(18.431, 130) },
        ],
      },
      {
        packName: '벌꿀',
        ingredient: hoeny,
        sell: [
          { location: '두 왕관', price: p(21.0404, 130) },
          { location: '솔즈리드 반도', price: p(19.7074, 130) },
          { location: '십자별 평원', price: p(25.2967, 130) },
        ],
      },
      {
        packName: '치즈',
        ingredient: cheeze,
        sell: [
          { location: '두 왕관', price: p(20.3374, 130) },
          { location: '솔즈리드 반도', price: p(18.8731, 130) },
          { location: '십자별 평원', price: p(24.0378, 130) },
        ],
      },
      {
        packName: '약재',
        ingredient: medicinal,
        sell: [
          { location: '두 왕관', price: p(20.9892, 130) },
          { location: '솔즈리드 반도', price: p(19.6592, 130) },
          { location: '십자별 평원', price: p(24.2409, 130) },
        ],
      },
      {
        packName: 'bond',
        ingredient: bond,
        bondName: '초승달 왕좌 푸른 소금 상회 수송품',
        sell: [
          { location: '두 왕관', price: p(83.1857, 130) },
          { location: '솔즈리드 반도', price: p(76.0626, 126) },
          { location: '십자별 평원', price: p(83.9814, 121) },
        ],
      },
    ],
  },

  /* 마리아노플 */
  {
    location: '마리아노플',
    packAged: '무첨가',
    packName: '신선',
    sellInfo: [
      {
        packName: '특제 특산품',
        ingredient: [
          { name: '말린 화초', ea: 300 },
          { name: '오리털', ea: 10 },
        ],
        sell: [
          { location: '두 왕관', price: p(28.3265, 130) },
          { location: '솔즈리드 반도', price: p(29.2663, 130) },
          { location: '십자별 평원', price: p(30.5112, 123) },
        ],
      },
      {
        packName: '특산품',
        ingredient: [
          { name: '다진 향신료', ea: 180 },
          { name: '버찌', ea: 2 },
        ],
        sell: [
          { location: '두 왕관', price: p(12.0288, 130) },
          { location: '솔즈리드 반도', price: p(12.5894, 130) },
          { location: '십자별 평원', price: p(13.5637, 121) },
        ],
      },
      {
        packName: '전통 특산품',
        ingredient: [
          { name: '조각난 채소', ea: 150 },
          { name: '창포', ea: 15 },
        ],
        sell: [
          { location: '두 왕관', price: p(12.2262, 130) },
          { location: '솔즈리드 반도', price: p(13.3865, 130) },
          { location: '십자별 평원', price: p(16.4523, 130) },
        ],
      },
      {
        packName: '비료',
        ingredient: fertilizer,
        sell: [
          { location: '두 왕관', price: p(12.7339, 130) },
          { location: '솔즈리드 반도', price: p(13.9508, 130) },
          { location: '십자별 평원', price: p(17.3728, 130) },
        ],
      },
      {
        packName: '벌꿀',
        ingredient: hoeny,
        sell: [
          { location: '두 왕관', price: p(19.6383, 130) },
          { location: '솔즈리드 반도', price: p(20.3969, 130) },
          { location: '십자별 평원', price: p(23.3353, 130) },
        ],
      },
      {
        packName: '치즈',
        ingredient: cheeze,
        sell: [
          { location: '두 왕관', price: p(18.8071, 130) },
          { location: '솔즈리드 반도', price: p(19.6274, 130) },
          { location: '십자별 평원', price: p(22.377, 130) },
        ],
      },
      {
        packName: '약재',
        ingredient: medicinal,
        sell: [
          { location: '두 왕관', price: p(19.5906, 130) },
          { location: '솔즈리드 반도', price: p(20.3473, 130) },
          { location: '십자별 평원', price: p(22.8421, 130) },
        ],
      },
      {
        packName: 'bond',
        ingredient: bond,
        bondName: '세 가문 푸른 소금 상회 수송품',
        sell: [
          { location: '두 왕관', price: p(75.9727, 126) },
          { location: '솔즈리드 반도', price: p(79.6677, 126) },
          { location: '십자별 평원', price: p(82.9485, 125) },
        ],
      },
    ],
  },

  /* 뼈의 땅 */
  {
    location: '뼈의 땅',
    packAged: '기본',
    packName: '표준',
    sellInfo: [
      {
        packName: '특제 특산품',
        ingredient: [
          { name: '말린 화초', ea: 300 },
          { name: '오리털', ea: 10 },
        ],
        sell: [
          { location: '두 왕관', price: p(36.1987, 130) },
          { location: '솔즈리드 반도', price: p(36.1065, 130) },
          { location: '십자별 평원', price: p(36.6917, 124) },
        ],
      },
      {
        packName: '특산품',
        ingredient: [
          { name: '손질된 고기', ea: 180 },
          { name: '옥수수', ea: 15 },
        ],
        sell: [
          { location: '두 왕관', price: p(16.2124, 130) },
          { location: '솔즈리드 반도', price: p(16.0058, 130) },
          { location: '십자별 평원', price: p(18.2603, 127) },
        ],
      },
      {
        packName: '전통 특산품',
        ingredient: [
          { name: '농축된 과즙', ea: 150 },
          { name: '로즈마리', ea: 5 },
        ],
        sell: [
          { location: '두 왕관', price: p(18.1913, 130) },
          { location: '솔즈리드 반도', price: p(18.0499, 130) },
          { location: '십자별 평원', price: p(20.3824, 130) },
        ],
      },
      {
        packName: '비료',
        ingredient: fertilizer,
        sell: [
          { location: '두 왕관', price: p(19.2076, 130) },
          { location: '솔즈리드 반도', price: p(19.0595, 130) },
          { location: '십자별 평원', price: p(21.2665, 130) },
        ],
      },
      {
        packName: '벌꿀',
        ingredient: hoeny,
        sell: [
          { location: '두 왕관', price: p(26.0759, 130) },
          { location: '솔즈리드 반도', price: p(25.6508, 130) },
          { location: '십자별 평원', price: p(29.3622, 130) },
        ],
      },
      {
        packName: '치즈',
        ingredient: cheeze,
        sell: [
          { location: '두 왕관', price: p(24.8156, 130) },
          { location: '솔즈리드 반도', price: p(25.0801, 130) },
          { location: '십자별 평원', price: p(28.043, 130) },
        ],
      },
      {
        packName: '약재',
        ingredient: medicinal,
        sell: [
          { location: '두 왕관', price: p(25.3671, 130) },
          { location: '솔즈리드 반도', price: p(24.5629, 130) },
          { location: '십자별 평원', price: p(28.9283, 130) },
        ],
      },
      {
        packName: 'special',
        specialName: '뿔 피리',
        ingredient: [
          { name: '미노타우르스 뿔', ea: 1 },
          { name: '목재', ea: 100 },
        ],
        sell: [
          { location: '두 왕관', price: p(38.5782, 130) },
          { location: '솔즈리드 반도', price: p(50.1488, 130) },
          { location: '십자별 평원', price: p(45.7717, 130) },
        ],
      },
    ],
  },

  /* 솔즈리드 반도 */
  {
    location: '솔즈리드 반도',
    packAged: '천연',
    packName: '특송',
    sellInfo: [
      {
        packName: '특제 특산품',
        ingredient: [
          { name: '손질된 고기', ea: 300 },
          { name: '달걀', ea: 10 },
        ],
        sell: [
          { location: '두 왕관', price: p(26.7034, 130) },
          { location: '솔즈리드 반도', price: p(0, 130) },
          { location: '십자별 평원', price: p(28.7243, 125) },
        ],
      },
      {
        packName: '특산품',
        ingredient: [
          { name: '손질된 고기', ea: 180 },
          { name: '포도', ea: 5 },
        ],
        sell: [
          { location: '두 왕관', price: p(11.6203, 130) },
          { location: '솔즈리드 반도', price: p(0, 130) },
          { location: '십자별 평원', price: p(13.3422, 126) },
        ],
      },
      {
        packName: '전통 특산품',
        ingredient: [
          { name: '다진 향신료', ea: 150 },
          { name: '딸기', ea: 5 },
        ],
        sell: [
          { location: '두 왕관', price: p(12.8546, 130) },
          { location: '솔즈리드 반도', price: p(0, 130) },
          { location: '십자별 평원', price: p(15.2878, 130) },
        ],
      },
      {
        packName: '비료',
        ingredient: fertilizer,
        sell: [
          { location: '두 왕관', price: p(13.404, 130) },
          { location: '솔즈리드 반도', price: p(0, 130) },
          { location: '십자별 평원', price: p(16.3462, 130) },
        ],
      },
      {
        packName: '벌꿀',
        ingredient: hoeny,
        sell: [
          { location: '두 왕관', price: p(18.6943, 130) },
          { location: '솔즈리드 반도', price: p(0, 130) },
          { location: '십자별 평원', price: p(22.4983, 130) },
        ],
      },
      {
        packName: '치즈',
        ingredient: cheeze,
        sell: [
          { location: '두 왕관', price: p(18.0687, 130) },
          { location: '솔즈리드 반도', price: p(0, 130) },
          { location: '십자별 평원', price: p(21.3355, 130) },
        ],
      },
      {
        packName: '약재',
        ingredient: medicinal,
        sell: [
          { location: '두 왕관', price: p(18.6487, 130) },
          { location: '솔즈리드 반도', price: p(0, 130) },
          { location: '십자별 평원', price: p(21.5248, 130) },
        ],
      },
    ],
  },

  /* 십자별 평원 */
  {
    location: '십자별 평원',
    packAged: '천연',
    packName: '특송',
    sellInfo: [
      {
        packName: '특제 특산품',
        ingredient: [
          { name: '말린 화초', ea: 300 },
          { name: '사과', ea: 10 },
        ],
        sell: [
          { location: '두 왕관', price: p(27.6507, 129) },
          { location: '솔즈리드 반도', price: p(29.8734, 130) },
          { location: '십자별 평원', price: p(0, 130) },
        ],
      },
      {
        packName: '특산품',
        ingredient: [
          { name: '다진 향신료', ea: 180 },
          { name: '월계수잎', ea: 5 },
        ],
        sell: [
          { location: '두 왕관', price: p(12.4612, 130) },
          { location: '솔즈리드 반도', price: p(13.7658, 130) },
          { location: '십자별 평원', price: p(0, 130) },
        ],
      },
      {
        packName: '전통 특산품',
        ingredient: [
          { name: '훈증시킨 약재', ea: 150 },
          { name: '철쭉', ea: 5 },
        ],
        sell: [
          { location: '두 왕관', price: p(14.1922, 130) },
          { location: '솔즈리드 반도', price: p(15.2879, 130) },
          { location: '십자별 평원', price: p(0, 130) },
        ],
      },
      {
        packName: '비료',
        ingredient: fertilizer,
        sell: [
          { location: '두 왕관', price: p(14.8844, 130) },
          { location: '솔즈리드 반도', price: p(16.3462, 130) },
          { location: '십자별 평원', price: p(0, 130) },
        ],
      },
      {
        packName: '벌꿀',
        ingredient: hoeny,
        sell: [
          { location: '두 왕관', price: p(19.7302, 130) },
          { location: '솔즈리드 반도', price: p(22.4983, 130) },
          { location: '십자별 평원', price: p(0, 130) },
        ],
      },
      {
        packName: '치즈',
        ingredient: cheeze,
        sell: [
          { location: '두 왕관', price: p(19.0334, 130) },
          { location: '솔즈리드 반도', price: p(21.3355, 130) },
          { location: '십자별 평원', price: p(0, 130) },
        ],
      },
      {
        packName: '약재',
        ingredient: medicinal,
        sell: [
          { location: '두 왕관', price: p(19.5573, 130) },
          { location: '솔즈리드 반도', price: p(21.5248, 130) },
          { location: '십자별 평원', price: p(0, 130) },
        ],
      },
      {
        packName: 'special',
        specialName: '시공의 파편',
        ingredient: [
          { name: '시공의 균열 조각', ea: 2 },
          { name: '철 주괴', ea: 100 },
        ],
        sell: [
          { location: '두 왕관', price: p(27.2682, 130) },
          { location: '솔즈리드 반도', price: p(30.3862, 130) },
          { location: '십자별 평원', price: p(0, 130) },
        ],
      },
      {
        packName: 'bond',
        bondName: '십자별 평원 푸른 소금 상회 수송품',
        ingredient: bond,
        sell: [
          { location: '두 왕관', price: p(78.0553, 130) },
          { location: '솔즈리드 반도', price: p(78.1819, 130) },
          { location: '십자별 평원', price: p(0, 130) },
        ],
      },
    ],
  },

  /* 지옥 늪지대 */
  {
    location: '지옥 늪지대',
    packAged: '가공',
    packName: '보존',
    sellInfo: [
      {
        packName: '특제 특산품',
        ingredient: [
          { name: '손질된 고기', ea: 300 },
          { name: '바나나', ea: 5 },
        ],
        sell: [
          { location: '두 왕관', price: p(37.8103, 129) },
          { location: '솔즈리드 반도', price: p(39.6184, 130) },
          { location: '십자별 평원', price: p(39.0225, 124) },
        ],
      },
      {
        packName: '특산품',
        ingredient: [
          { name: '농축된 과즙', ea: 200 },
          { name: '버섯', ea: 15 },
        ],
        sell: [
          { location: '두 왕관', price: p(18.3358, 130) },
          { location: '솔즈리드 반도', price: p(19.3219, 130) },
          { location: '십자별 평원', price: p(20.3817, 127) },
        ],
      },
      {
        packName: '전통 특산품',
        ingredient: [
          { name: '다진 향신료', ea: 160 },
          { name: '땅콩', ea: 5 },
        ],
        sell: [
          { location: '두 왕관', price: p(20.2015, 130) },
          { location: '솔즈리드 반도', price: p(21.0474, 130) },
          { location: '십자별 평원', price: p(22.4355, 130) },
        ],
      },
      {
        packName: '비료',
        ingredient: fertilizer,
        sell: [
          { location: '두 왕관', price: p(20.9429, 130) },
          { location: '솔즈리드 반도', price: p(22.0927, 130) },
          { location: '십자별 평원', price: p(23.0412, 130) },
        ],
      },
      {
        packName: '벌꿀',
        ingredient: hoeny,
        sell: [
          { location: '두 왕관', price: p(28.4191, 130) },
          { location: '솔즈리드 반도', price: p(30.5179, 130) },
          { location: '십자별 평원', price: p(31.7692, 130) },
        ],
      },
      {
        packName: '치즈',
        ingredient: cheeze,
        sell: [
          { location: '두 왕관', price: p(27.4114, 130) },
          { location: '솔즈리드 반도', price: p(29.2119, 130) },
          { location: '십자별 평원', price: p(30.7013, 130) },
        ],
      },
      {
        packName: '약재',
        ingredient: medicinal,
        sell: [
          { location: '두 왕관', price: p(28.4264, 130) },
          { location: '솔즈리드 반도', price: p(29.9268, 130) },
          { location: '십자별 평원', price: p(32.0564, 130) },
        ],
      },
      {
        packName: 'special',
        specialName: '가공된 접착제',
        ingredient: [
          { name: '익사체의 진액', ea: 1 },
          { name: '옷감', ea: 100 },
        ],
        sell: [
          { location: '두 왕관', price: p(34.7698, 130) },
          { location: '솔즈리드 반도', price: p(59.6674, 130) },
          { location: '십자별 평원', price: p(41.9634, 130) },
        ],
      },
    ],
  },

  /* 청동 바위산 */
  {
    location: '청동 바위산',
    packAged: '기본',
    packName: '표준',
    sellInfo: [
      {
        packName: '특제 특산품',
        ingredient: [
          { name: '말린 화초', ea: 300 },
          { name: '오리털', ea: 10 },
        ],
        sell: [
          { location: '두 왕관', price: p(33.9003, 130) },
          { location: '솔즈리드 반도', price: p(33.4484, 128) },
          { location: '십자별 평원', price: p(34.6958, 120) },
        ],
      },
      {
        packName: '특산품',
        ingredient: [
          { name: '손질된 고기', ea: 180 },
          { name: '보리', ea: 15 },
        ],
        sell: [
          { location: '두 왕관', price: p(14.8669, 130) },
          { location: '솔즈리드 반도', price: p(14.9165, 130) },
          { location: '십자별 평원', price: p(17.4361, 130) },
        ],
      },
      {
        packName: '전통 특산품',
        ingredient: [
          { name: '조각난 채소', ea: 150 },
          { name: '호밀', ea: 5 },
        ],
        sell: [
          { location: '두 왕관', price: p(17.0356, 130) },
          { location: '솔즈리드 반도', price: p(17.0914, 130) },
          { location: '십자별 평원', price: p(19.2803, 130) },
        ],
      },
      {
        packName: '비료',
        ingredient: fertilizer,
        sell: [
          { location: '두 왕관', price: p(17.7857, 130) },
          { location: '솔즈리드 반도', price: p(17.8387, 130) },
          { location: '십자별 평원', price: p(20.7371, 130) },
        ],
      },
      {
        packName: '벌꿀',
        ingredient: hoeny,
        sell: [
          { location: '두 왕관', price: p(23.7562, 130) },
          { location: '솔즈리드 반도', price: p(23.8378, 130) },
          { location: '십자별 평원', price: p(28.6975, 130) },
        ],
      },
      {
        packName: '치즈',
        ingredient: cheeze,
        sell: [
          { location: '두 왕관', price: p(23.0591, 130) },
          { location: '솔즈리드 반도', price: p(23.137, 130) },
          { location: '십자별 평원', price: p(21.1876, 130) },
        ],
      },
      {
        packName: '약재',
        ingredient: medicinal,
        sell: [
          { location: '두 왕관', price: p(23.6986, 130) },
          { location: '솔즈리드 반도', price: p(23.7797, 130) },
          { location: '십자별 평원', price: p(27.2594, 130) },
        ],
      },
    ],
  },

  /* 태초의 요람 */
  {
    location: '태초의 요람',
    packAged: '기본',
    packName: '표준',
    sellInfo: [
      {
        packName: '특제 특산품',
        ingredient: [
          { name: '손질된 고기', ea: 300 },
          { name: '쌀', ea: 15 },
        ],
        sell: [
          { location: '두 왕관', price: p(32.9337, 130) },
          { location: '솔즈리드 반도', price: p(33.0043, 130) },
          { location: '십자별 평원', price: p(36.2541, 128) },
        ],
      },
      {
        packName: '특산품',
        ingredient: [
          { name: '훈증시킨 약재', ea: 180 },
          { name: '옥수수', ea: 15 },
        ],
        sell: [
          { location: '두 왕관', price: p(14.2968, 130) },
          { location: '솔즈리드 반도', price: p(14.2364, 129) },
          { location: '십자별 평원', price: p(16.4165, 126) },
        ],
      },
      {
        packName: '전통 특산품',
        ingredient: [
          { name: '다진 향신료', ea: 150 },
          { name: '달걀', ea: 10 },
        ],
        sell: [
          { location: '두 왕관', price: p(15.8143, 130) },
          { location: '솔즈리드 반도', price: p(15.8702, 130) },
          { location: '십자별 평원', price: p(18.8554, 130) },
        ],
      },
      {
        packName: '비료',
        ingredient: fertilizer,
        sell: [
          { location: '두 왕관', price: p(16.5001, 130) },
          { location: '솔즈리드 반도', price: p(16.5531, 130) },
          { location: '십자별 평원', price: p(20.1624, 130) },
        ],
      },
      {
        packName: '벌꿀',
        ingredient: hoeny,
        sell: [
          { location: '두 왕관', price: p(22.9978, 130) },
          { location: '솔즈리드 반도', price: p(23.0795, 130) },
          { location: '십자별 평원', price: p(27.6371, 130) },
        ],
      },
      {
        packName: '치즈',
        ingredient: cheeze,
        sell: [
          { location: '두 왕관', price: p(22.23, 130) },
          { location: '솔즈리드 반도', price: p(22.308, 130) },
          { location: '십자별 평원', price: p(26.2863, 130) },
        ],
      },
      {
        packName: '약재',
        ingredient: medicinal,
        sell: [
          { location: '두 왕관', price: p(22.9917, 130) },
          { location: '솔즈리드 반도', price: p(23.023, 130) },
          { location: '십자별 평원', price: p(26.5031, 130) },
        ],
      },
    ],
  },

  /* 하늬 마루 */
  {
    location: '하늬 마루',
    packAged: '가공',
    packName: '보존',
    sellInfo: [
      {
        packName: '특제 특산품',
        ingredient: [
          { name: '손질된 고기', ea: 300 },
          { name: '포도', ea: 5 },
        ],
        sell: [
          { location: '두 왕관', price: p(37.2418, 124) },
          { location: '솔즈리드 반도', price: p(38.6871, 124) },
          { location: '십자별 평원', price: p(38.632, 120) },
        ],
      },
      {
        packName: '특산품',
        ingredient: [
          { name: '조각난 채소', ea: 200 },
          { name: '버섯', ea: 15 },
        ],
        sell: [
          { location: '두 왕관', price: p(18.9455, 130) },
          { location: '솔즈리드 반도', price: p(19.9316, 130) },
          { location: '십자별 평원', price: p(20.3167, 123) },
        ],
      },
      {
        packName: '전통 특산품',
        ingredient: [
          { name: '훈증시킨 약재', ea: 160 },
          { name: '수레국화', ea: 5 },
        ],
        sell: [
          { location: '두 왕관', price: p(20.3857, 128) },
          { location: '솔즈리드 반도', price: p(21.5499, 130) },
          { location: '십자별 평원', price: p(22.585, 128) },
        ],
      },
      {
        packName: '비료',
        ingredient: fertilizer,
        sell: [
          { location: '두 왕관', price: p(21.6011, 130) },
          { location: '솔즈리드 반도', price: p(22.7511, 130) },
          { location: '십자별 평원', price: p(23.6999, 130) },
        ],
      },
      {
        packName: '벌꿀',
        ingredient: hoeny,
        sell: [
          { location: '두 왕관', price: p(29.709, 130) },
          { location: '솔즈리드 반도', price: p(31.808, 130) },
          { location: '십자별 평원', price: p(33.0594, 130) },
        ],
      },
      {
        packName: '치즈',
        ingredient: cheeze,
        sell: [
          { location: '두 왕관', price: p(28.4547, 130) },
          { location: '솔즈리드 반도', price: p(30.255, 130) },
          { location: '십자별 평원', price: p(31.7446, 130) },
        ],
      },
      {
        packName: '약재',
        ingredient: medicinal,
        sell: [
          { location: '두 왕관', price: p(29.3391, 130) },
          { location: '솔즈리드 반도', price: p(30.8394, 130) },
          { location: '십자별 평원', price: p(32.9689, 130) },
        ],
      },
    ],
  },

  /* 하얀숲 */
  {
    location: '하얀 숲',
    packAged: '기본',
    packName: '표준',
    sellInfo: [
      {
        packName: '특제 특산품',
        ingredient: [
          { name: '조각난 채소', ea: 300 },
          { name: '우유', ea: 5 },
        ],
        sell: [
          { location: '두 왕관', price: p(31.9669, 130) },
          { location: '솔즈리드 반도', price: p(32.0373, 130) },
          { location: '십자별 평원', price: p(34.8449, 128) },
        ],
      },
      {
        packName: '특산품',
        ingredient: [
          { name: '곱게 빻은 곡물', ea: 180 },
          { name: '포도', ea: 5 },
        ],
        sell: [
          { location: '두 왕관', price: p(13.7269, 130) },
          { location: '솔즈리드 반도', price: p(13.777, 130) },
          { location: '십자별 평원', price: p(15.6802, 124) },
        ],
      },
      {
        packName: '전통 특산품',
        ingredient: [
          { name: '손질된 고기', ea: 150 },
          { name: '고구마', ea: 5 },
        ],
        sell: [
          { location: '두 왕관', price: p(14.5927, 130) },
          { location: '솔즈리드 반도', price: p(14.198, 130) },
          { location: '십자별 평원', price: p(18.4308, 130) },
        ],
      },
      {
        packName: '비료',
        ingredient: fertilizer,
        sell: [
          { location: '두 왕관', price: p(15.2142, 130) },
          { location: '솔즈리드 반도', price: p(15.2674, 130) },
          { location: '십자별 평원', price: p(19.5876, 130) },
        ],
      },
      {
        packName: '벌꿀',
        ingredient: hoeny,
        sell: [
          { location: '두 왕관', price: p(22.2395, 130) },
          { location: '솔즈리드 반도', price: p(22.321, 130) },
          { location: '십자별 평원', price: p(26.5768, 130) },
        ],
      },
      {
        packName: '치즈',
        ingredient: cheeze,
        sell: [
          { location: '두 왕관', price: p(21.4007, 130) },
          { location: '솔즈리드 반도', price: p(21.4788, 130) },
          { location: '십자별 평원', price: p(25.3847, 130) },
        ],
      },
      {
        packName: '약재',
        ingredient: medicinal,
        sell: [
          { location: '두 왕관', price: p(22.1852, 130) },
          { location: '솔즈리드 반도', price: p(22.2665, 130) },
          { location: '십자별 평원', price: p(26.5768, 130) },
        ],
      },
      {
        packName: 'bond',
        bondName: '이즈나 왕가 푸른 소금 상회 수송품',
        ingredient: bond,
        sell: [
          { location: '두 왕관', price: p(80.2696, 130) },
          { location: '솔즈리드 반도', price: p(81.978, 130) },
          { location: '십자별 평원', price: p(88.3491, 130) },
        ],
      },
    ],
  },

  /* 황금 평원 */
  {
    location: '황금 평원',
    packAged: '가공',
    packName: '보존',
    sellInfo: [
      {
        packName: '특제 특산품',
        ingredient: [
          { name: '곱게 빻은 곡물', ea: 300 },
          { name: '달걀', ea: 10 },
        ],
        sell: [
          { location: '두 왕관', price: p(35.3863, 130) },
          { location: '솔즈리드 반도', price: p(36.7542, 130) },
          { location: '십자별 평원', price: p(34.9621, 119) },
        ],
      },
      {
        packName: '특산품',
        ingredient: [
          { name: '말린 화초', ea: 200 },
          { name: '고구마', ea: 5 },
        ],
        sell: [
          { location: '두 왕관', price: p(15.8666, 130) },
          { location: '솔즈리드 반도', price: p(16.8525, 130) },
          { location: '십자별 평원', price: p(18.3936, 130) },
        ],
      },
      {
        packName: '전통 특산품',
        ingredient: [
          { name: '조각난 채소', ea: 160 },
          { name: '귀리', ea: 5 },
        ],
        sell: [
          { location: '두 왕관', price: p(18.0071, 130) },
          { location: '솔즈리드 반도', price: p(18.8527, 130) },
          { location: '십자별 평원', price: p(20.2411, 130) },
        ],
      },
      {
        packName: '비료',
        ingredient: fertilizer,
        sell: [
          { location: '두 왕관', price: p(18.8857, 130) },
          { location: '솔즈리드 반도', price: p(20.0356, 130) },
          { location: '십자별 평원', price: p(20.9842, 130) },
        ],
      },
      {
        packName: '벌꿀',
        ingredient: hoeny,
        sell: [
          { location: '두 왕관', price: p(25.1877, 130) },
          { location: '솔즈리드 반도', price: p(27.2865, 130) },
          { location: '십자별 평원', price: p(28.538, 130) },
        ],
      },
      {
        packName: '치즈',
        ingredient: cheeze,
        sell: [
          { location: '두 왕관', price: p(24.0062, 130) },
          { location: '솔즈리드 반도', price: p(25.993, 130) },
          { location: '십자별 평원', price: p(27.4824, 130) },
        ],
      },
      {
        packName: '약재',
        ingredient: medicinal,
        sell: [
          { location: '두 왕관', price: p(24.8767, 130) },
          { location: '솔즈리드 반도', price: p(26.3769, 130) },
          { location: '십자별 평원', price: p(28.507, 130) },
        ],
      },
      {
        packName: 'special',
        specialName: '꼬리털 이불',
        ingredient: [
          { name: '켄타우로스의 꼬리', ea: 1 },
          { name: '옷감', ea: 100 },
        ],
        sell: [
          { location: '두 왕관', price: p(27.7888, 130) },
          { location: '솔즈리드 반도', price: p(42.0862, 130) },
          { location: '십자별 평원', price: p(29.096, 130) },
        ],
      },
    ],
  },
];
export const eastTradeData = [
  /* 고대의 숲 */
  {
    location: '고대의 숲',
    packAged: '기본',
    packName: '표준',
    sellInfo: [
      {
        packName: '특제 특산품',
        ingredient: [
          { name: '농축된 과즙', ea: 300 },
          { name: '우유', ea: 10 },
        ],
        sell: [
          { location: '노래의 땅', price: p(31.5807, 129) },
          { location: '동틀녘 반도', price: p(32.3318, 124) },
          { location: '이니스테르', price: p(32.7983, 123) },
        ],
      },
      {
        packName: '특산품',
        ingredient: [
          { name: '다진 향신료', ea: 180 },
          { name: '석류', ea: 3 },
        ],
        sell: [
          { location: '노래의 땅', price: p(13.1846, 130) },
          { location: '동틀녘 반도', price: p(16.1481, 130) },
          { location: '이니스테르', price: p(15.9099, 127) },
        ],
      },
      {
        packName: '전통 특산품',
        ingredient: [
          { name: '훈증시킨 약재', ea: 150 },
          { name: '마늘', ea: 15 },
        ],
        sell: [
          { location: '노래의 땅', price: p(13.3849, 130) },
          { location: '동틀녘 반도', price: p(17.7293, 130) },
          { location: '이니스테르', price: p(17.7766, 129) },
        ],
      },
      {
        packName: '비료',
        ingredient: fertilizer,
        sell: [
          { location: '노래의 땅', price: p(14.1723, 130) },
          { location: '동틀녘 반도', price: p(18.4892, 130) },
          { location: '이니스테르', price: p(19.2857, 130) },
        ],
      },
      {
        packName: '벌꿀',
        ingredient: hoeny,
        sell: [
          { location: '노래의 땅', price: p(21.7594, 130) },
          { location: '동틀녘 반도', price: p(25.5648, 130) },
          { location: '이니스테르', price: p(25.7145, 130) },
        ],
      },
      {
        packName: '치즈',
        ingredient: cheeze,
        sell: [
          { location: '노래의 땅', price: p(21.5664, 130) },
          { location: '동틀녘 반도', price: p(25.2479, 130) },
          { location: '이니스테르', price: p(24.497, 130) },
        ],
      },
      {
        packName: '약재',
        ingredient: medicinal,
        sell: [
          { location: '노래의 땅', price: p(21.4731, 130) },
          { location: '동틀녘 반도', price: p(24.0378, 130) },
          { location: '이니스테르', price: p(25.7145, 130) },
        ],
      },
      {
        packName: 'bond',
        bondName: '북방 이슈바라 푸른 소금 상회 수송품',
        ingredient: bond,
        sell: [
          { location: '노래의 땅', price: p(75.7, 121) },
          { location: '동틀녘 반도', price: p(82.25, 127) },
          { location: '이니스테르', price: p(76.743, 117) },
        ],
      },
    ],
  },

  /* 노래의 땅 */
  {
    location: '노래의 땅',
    packAged: '천연',
    packName: '특송',
    sellInfo: [
      {
        packName: '특제 특산품',
        ingredient: [
          { name: '말린 화초', ea: 300 },
          { name: '양털', ea: 10 },
        ],
        sell: [
          { location: '노래의 땅', price: p(0, 130) },
          { location: '동틀녘 반도', price: p(24.2679, 119) },
          { location: '이니스테르', price: p(24.2021, 109) },
        ],
      },
      {
        packName: '특산품',
        ingredient: [
          { name: '말린 화초', ea: 180 },
          { name: '버찌', ea: 2 },
        ],
        sell: [
          { location: '노래의 땅', price: p(0, 130) },
          { location: '동틀녘 반도', price: p(11.5524, 127) },
          { location: '이니스테르', price: p(12.8709, 124) },
        ],
      },
      {
        packName: '전통 특산품',
        ingredient: [
          { name: '조각난 채소', ea: 150 },
          { name: '쌀', ea: 15 },
        ],
        sell: [
          { location: '노래의 땅', price: p(0, 130) },
          { location: '동틀녘 반도', price: p(12.5442, 130) },
          { location: '이니스테르', price: p(14.7287, 129) },
        ],
      },
      {
        packName: '비료',
        ingredient: fertilizer,
        sell: [
          { location: '노래의 땅', price: p(0, 130) },
          { location: '동틀녘 반도', price: p(13.1572, 130) },
          { location: '이니스테르', price: p(15.9793, 130) },
        ],
      },
      {
        packName: '벌꿀',
        ingredient: hoeny,
        sell: [
          { location: '노래의 땅', price: p(0, 130) },
          { location: '동틀녘 반도', price: p(19.0774, 130) },
          { location: '이니스테르', price: p(21.3782, 130) },
        ],
      },
      {
        packName: '치즈',
        ingredient: cheeze,
        sell: [
          { location: '노래의 땅', price: p(0, 130) },
          { location: '동틀녘 반도', price: p(19.258, 130) },
          { location: '이니스테르', price: p(21.3782, 130) },
        ],
      },
      {
        packName: '약재',
        ingredient: medicinal,
        sell: [
          { location: '노래의 땅', price: p(0, 130) },
          { location: '동틀녘 반도', price: p(18.7302, 130) },
          { location: '이니스테르', price: p(20.0861, 130) },
        ],
      },
    ],
  },

  /* 동틀녘 반도 */
  {
    location: '동틀녘 반도',
    packAged: '천연',
    packName: '특송',
    sellInfo: [
      {
        packName: '특제 특산품',
        ingredient: [
          { name: '훈증시킨 약재', ea: 300 },
          { name: '야타털', ea: 10 },
        ],
        sell: [
          { location: '노래의 땅', price: p(25.8993, 127) },
          { location: '동틀녘 반도', price: p(0, 130) },
          { location: '이니스테르', price: p(28.4232, 121) },
        ],
      },
      {
        packName: '특산품',
        ingredient: [
          { name: '훈증시킨 약재', ea: 180 },
          { name: '대추야자', ea: 2 },
        ],
        sell: [
          { location: '노래의 땅', price: p(11.8252, 130) },
          { location: '동틀녘 반도', price: p(0, 130) },
          { location: '이니스테르', price: p(13.8261, 127) },
        ],
      },
      {
        packName: '전통 특산품',
        ingredient: [
          { name: '곱게 빻은 곡물', ea: 150 },
          { name: '샤프란', ea: 15 },
        ],
        sell: [
          { location: '노래의 땅', price: p(12.5442, 130) },
          { location: '동틀녘 반도', price: p(0, 130) },
          { location: '이니스테르', price: p(15.5678, 130) },
        ],
      },
      {
        packName: '비료',
        ingredient: fertilizer,
        sell: [
          { location: '노래의 땅', price: p(13.1572, 130) },
          { location: '동틀녘 반도', price: p(0, 130) },
          { location: '이니스테르', price: p(16.7596, 130) },
        ],
      },
      {
        packName: '벌꿀',
        ingredient: hoeny,
        sell: [
          { location: '노래의 땅', price: p(19.0774, 130) },
          { location: '동틀녘 반도', price: p(0, 130) },
          { location: '이니스테르', price: p(22.5238, 130) },
        ],
      },
      {
        packName: '치즈',
        ingredient: cheeze,
        sell: [
          { location: '노래의 땅', price: p(19.258, 130) },
          { location: '동틀녘 반도', price: p(0, 130) },
          { location: '이니스테르', price: p(22.5238, 130) },
        ],
      },
      {
        packName: '약재',
        ingredient: medicinal,
        sell: [
          { location: '노래의 땅', price: p(18.7302, 130) },
          { location: '동틀녘 반도', price: p(0, 130) },
          { location: '이니스테르', price: p(21.3888, 130) },
        ],
      },
    ],
  },

  /* 로카의 장기말들 */
  {
    location: '로카의 장기말들',
    packAged: '가공',
    packName: '보존',
    sellInfo: [
      {
        packName: '특제 특산품',
        ingredient: [
          { name: '농축된 과즙', ea: 300 },
          { name: '우유', ea: 5 },
        ],
        sell: [
          { location: '노래의 땅', price: p(36.1327, 129) },
          { location: '동틀녘 반도', price: p(36.4494, 123) },
          { location: '이니스테르', price: p(36.586, 121) },
        ],
      },
      {
        packName: '특산품',
        ingredient: [
          { name: '조각낸 채소', ea: 180 },
          { name: '사과', ea: 5 },
        ],
        sell: [
          { location: '노래의 땅', price: p(17.0244, 130) },
          { location: '동틀녘 반도', price: p(17.8562, 130) },
          { location: '이니스테르', price: p(17.2003, 123) },
        ],
      },
      {
        packName: '전통 특산품',
        ingredient: [
          { name: '말린 화초', ea: 160 },
          { name: '기장', ea: 5 },
        ],
        sell: [
          { location: '노래의 땅', price: p(18.727, 130) },
          { location: '동틀녘 반도', price: p(19.6419, 130) },
          { location: '이니스테르', price: p(19.6894, 128) },
        ],
      },
      {
        packName: '비료',
        ingredient: fertilizer,
        sell: [
          { location: '노래의 땅', price: p(20.1605, 130) },
          { location: '동틀녘 반도', price: p(20.983, 129) },
          { location: '이니스테르', price: p(21.3314, 130) },
        ],
      },
      {
        packName: '벌꿀',
        ingredient: hoeny,
        sell: [
          { location: '노래의 땅', price: p(26.9673, 130) },
          { location: '동틀녘 반도', price: p(28.413, 130) },
          { location: '이니스테르', price: p(29.309, 130) },
        ],
      },
      {
        packName: '치즈',
        ingredient: cheeze,
        sell: [
          { location: '노래의 땅', price: p(26.9673, 130) },
          { location: '동틀녘 반도', price: p(28.413, 130) },
          { location: '이니스테르', price: p(39.1337, 130) },
        ],
      },
      {
        packName: '약재',
        ingredient: medicinal,
        sell: [
          { location: '노래의 땅', price: p(25.3308, 130) },
          { location: '동틀녘 반도', price: p(26.9742, 130) },
          { location: '이니스테르', price: p(27.9276, 130) },
        ],
      },
      {
        packName: 'special',
        specialName: '가죽 카페트',
        ingredient: [
          { name: '설인의 가죽', ea: 1 },
          { name: '목재', ea: 100 },
        ],
        sell: [
          { location: '노래의 땅', price: p(25.9383, 130) },
          { location: '동틀녘 반도', price: p(48.9157, 130) },
          { location: '이니스테르', price: p(24.9282, 130) },
        ],
      },
    ],
  },

  /* 로칼로카 산맥 */
  {
    location: '로칼로카 산맥',
    packAged: '가공',
    packName: '보존',
    sellInfo: [
      {
        packName: '특제 특산품',
        ingredient: [
          { name: '다진 향신료', ea: 300 },
          { name: '사과', ea: 5 },
        ],
        sell: [
          { location: '노래의 땅', price: p(35.4482, 123) },
          { location: '동틀녘 반도', price: p(36.8366, 121) },
          { location: '이니스테르', price: p(31.6675, 102) },
        ],
      },
      {
        packName: '특산품',
        ingredient: [
          { name: '훈증시킨 약재', ea: 180 },
          { name: '철쭉', ea: 15 },
        ],
        sell: [
          { location: '노래의 땅', price: p(17.4394, 130) },
          { location: '동틀녘 반도', price: p(18.2715, 130) },
          { location: '이니스테르', price: p(17.0208, 119) },
        ],
      },
      {
        packName: '전통 특산품',
        ingredient: [
          { name: '말린 화초', ea: 150 },
          { name: '고구마', ea: 5 },
        ],
        sell: [
          { location: '노래의 땅', price: p(18.2979, 124) },
          { location: '동틀녘 반도', price: p(20.0986, 130) },
          { location: '이니스테르', price: p(20.4539, 130) },
        ],
      },
      {
        packName: '비료',
        ingredient: fertilizer,
        sell: [
          { location: '노래의 땅', price: p(20.6522, 130) },
          { location: '동틀녘 반도', price: p(21.6368, 130) },
          { location: '이니스테르', price: p(21.823, 130) },
        ],
      },
      {
        packName: '벌꿀',
        ingredient: hoeny,
        sell: [
          { location: '노래의 땅', price: p(27.6878, 130) },
          { location: '동틀녘 반도', price: p(29.134, 130) },
          { location: '이니스테르', price: p(30.03, 130) },
        ],
      },
      {
        packName: '치즈',
        ingredient: cheeze,
        sell: [
          { location: '노래의 땅', price: p(27.6878, 130) },
          { location: '동틀녘 반도', price: p(29.1574, 130) },
          { location: '이니스테르', price: p(30.03, 130) },
        ],
      },
      {
        packName: '약재',
        ingredient: medicinal,
        sell: [
          { location: '노래의 땅', price: p(26.1497, 130) },
          { location: '동틀녘 반도', price: p(27.7934, 130) },
          { location: '이니스테르', price: p(28.7467, 130) },
        ],
      },
    ],
  },

  /* 마하데비 */
  {
    location: '마하데비',
    packAged: '무첨가',
    packName: '신선',
    sellInfo: [
      {
        packName: '특제 특산품',
        ingredient: [
          { name: '조각낸 채소', ea: 300 },
          { name: '바나나', ea: 5 },
        ],
        sell: [
          { location: '노래의 땅', price: p(28.1288, 126) },
          { location: '동틀녘 반도', price: p(28.5795, 128) },
          { location: '이니스테르', price: p(28.9244, 112) },
        ],
      },
      {
        packName: '특산품',
        ingredient: [
          { name: '농축된 과즙', ea: 180 },
          { name: '무화과', ea: 15 },
        ],
        sell: [
          { location: '노래의 땅', price: p(12.0131, 130) },
          { location: '동틀녘 반도', price: p(12.0159, 130) },
          { location: '이니스테르', price: p(15.2648, 127) },
        ],
      },
      {
        packName: '전통 특산품',
        ingredient: [
          { name: '다진 향신료', ea: 150 },
          { name: '오이', ea: 15 },
        ],
        sell: [
          { location: '노래의 땅', price: p(12.1958, 130) },
          { location: '동틀녘 반도', price: p(12.1987, 130) },
          { location: '이니스테르', price: p(16.9236, 128) },
        ],
      },
      {
        packName: '비료',
        ingredient: fertilizer,
        sell: [
          { location: '노래의 땅', price: p(12.913, 130) },
          { location: '동틀녘 반도', price: p(12.9164, 130) },
          { location: '이니스테르', price: p(18.5039, 130) },
        ],
      },
      {
        packName: '벌꿀',
        ingredient: hoeny,
        sell: [
          { location: '노래의 땅', price: p(19.826, 130) },
          { location: '동틀녘 반도', price: p(19.831, 130) },
          { location: '이니스테르', price: p(24.8126, 130) },
        ],
      },
      {
        packName: '치즈',
        ingredient: cheeze,
        sell: [
          { location: '노래의 땅', price: p(19.5652, 130) },
          { location: '동틀녘 반도', price: p(19.6569, 130) },
          { location: '이니스테르', price: p(24.8126, 130) },
        ],
      },
      {
        packName: '약재',
        ingredient: medicinal,
        sell: [
          { location: '노래의 땅', price: p(19.652, 130) },
          { location: '동틀녘 반도', price: p(19.5701, 130) },
          { location: '이니스테르', price: p(23.4401, 130) },
        ],
      },
      {
        packName: 'bond',
        bondName: '서방 이슈바라 푸른 소금 수송품',
        ingredient: bond,
        sell: [
          { location: '노래의 땅', price: p(78.5572, 129) },
          { location: '동틀녘 반도', price: p(79.481, 130) },
          { location: '이니스테르', price: p(84.3122, 123) },
        ],
      },
    ],
  },

  /* 매사냥 고원 */
  {
    location: '매사냥 고원',
    packAged: '무첨가',
    packName: '신선',
    sellInfo: [
      {
        packName: '특제 특산품',
        ingredient: [
          { name: '훈증시킨 약재', ea: 300 },
          { name: '거위털', ea: 5 },
        ],
        sell: [
          { location: '노래의 땅', price: p(28.611, 128) },
          { location: '동틀녘 반도', price: p(29.4274, 124) },
          { location: '이니스테르', price: p(32.575, 126) },
        ],
      },
      {
        packName: '특산품',
        ingredient: [
          { name: '곱게 빻은 곡물', ea: 180 },
          { name: '사과', ea: 15 },
        ],
        sell: [
          { location: '노래의 땅', price: p(12.038, 130) },
          { location: '동틀녘 반도', price: p(14.6767, 130) },
          { location: '이니스테르', price: p(15.1567, 126) },
        ],
      },
      {
        packName: '전통 특산품',
        ingredient: [
          { name: '말린 화초', ea: 150 },
          { name: '당근', ea: 15 },
        ],
        sell: [
          { location: '노래의 땅', price: p(12.127, 129) },
          { location: '동틀녘 반도', price: p(15.9953, 129) },
          { location: '이니스테르', price: p(17.2018, 130) },
        ],
      },
      {
        packName: '비료',
        ingredient: fertilizer,
        sell: [
          { location: '노래의 땅', price: p(12.9398, 130) },
          { location: '동틀녘 반도', price: p(16.7971, 130) },
          { location: '이니스테르', price: p(18.5184, 130) },
        ],
      },
      {
        packName: '벌꿀',
        ingredient: hoeny,
        sell: [
          { location: '노래의 땅', price: p(19.8671, 130) },
          { location: '동틀녘 반도', price: p(23.0524, 129) },
          { location: '이니스테르', price: p(24.8416, 130) },
        ],
      },
      {
        packName: '치즈',
        ingredient: cheeze,
        sell: [
          { location: '노래의 땅', price: p(19.691, 130) },
          { location: '동틀녘 반도', price: p(22.7709, 129) },
          { location: '이니스테르', price: p(24.8416, 130) },
        ],
      },
      {
        packName: '약재',
        ingredient: medicinal,
        sell: [
          { location: '노래의 땅', price: p(20.4755, 130) },
          { location: '동틀녘 반도', price: p(21.8385, 130) },
          { location: '이니스테르', price: p(23.4807, 130) },
        ],
      },
      {
        packName: 'bond',
        bondName: '이동하는 제국 푸른 소금 상회 수송품',
        ingredient: bond,
        sell: [
          { location: '노래의 땅', price: p(78.1725, 125) },
          { location: '동틀녘 반도', price: p(79.535, 123) },
          { location: '이니스테르', price: p(86.4557, 126) },
        ],
      },
    ],
  },

  /* 무지개 벌판 */
  {
    location: '무지개 벌판',
    packAged: '기본',
    packName: '표준',
    sellInfo: [
      {
        packName: '특제 특산품',
        ingredient: [
          { name: '다진 향신료', ea: 300 },
          { name: '달걀', ea: 10 },
        ],
        sell: [
          { location: '노래의 땅', price: p(32.9004, 130) },
          { location: '동틀녘 반도', price: p(14.697, 130) },
          { location: '이니스테르', price: p(18.3596, 63) },
        ],
      },
      {
        packName: '특산품',
        ingredient: [
          { name: '말린 화초', ea: 180 },
          { name: '강황', ea: 3 },
        ],
        sell: [
          { location: '노래의 땅', price: p(14.6934, 130) },
          { location: '동틀녘 반도', price: p(15.4682, 129) },
          { location: '이니스테르', price: p(16.6038, 123) },
        ],
      },
      {
        packName: '전통 특산품',
        ingredient: [
          { name: '곱게 빻은 곡물', ea: 150 },
          { name: '해바라기', ea: 15 },
        ],
        sell: [
          { location: '노래의 땅', price: p(15.5849, 130) },
          { location: '동틀녘 반도', price: p(16.3634, 130) },
          { location: '이니스테르', price: p(19.3035, 130) },
        ],
      },
      {
        packName: '비료',
        ingredient: fertilizer,
        sell: [
          { location: '노래의 땅', price: p(16.3601, 130) },
          { location: '동틀녘 반도', price: p(32.6516, 129) },
          { location: '이니스테르', price: p(20.7811, 130) },
        ],
      },
      {
        packName: '벌꿀',
        ingredient: hoeny,
        sell: [
          { location: '노래의 땅', price: p(23.7069, 130) },
          { location: '동틀녘 반도', price: p(23.7124, 130) },
          { location: '이니스테르', price: p(27.9484, 130) },
        ],
      },
      {
        packName: '치즈',
        ingredient: cheeze,
        sell: [
          { location: '노래의 땅', price: p(23.9259, 130) },
          { location: '동틀녘 반도', price: p(23.9311, 130) },
          { location: '이니스테르', price: p(27.9484, 130) },
        ],
      },
      {
        packName: '약재',
        ingredient: medicinal,
        sell: [
          { location: '노래의 땅', price: p(23.2759, 130) },
          { location: '동틀녘 반도', price: p(23.2813, 130) },
          { location: '이니스테르', price: p(26.5674, 130) },
        ],
      },
    ],
  },

  /* 불볕 황야 */
  {
    location: '불볕 황야',
    packAged: '기본',
    packName: '표준',
    sellInfo: [
      {
        packName: '특제 특산품',
        ingredient: [
          { name: '훈증시킨 약재', ea: 300 },
          { name: '레몬', ea: 5 },
        ],
        sell: [
          { location: '노래의 땅', price: p(33.085, 127) },
          { location: '동틀녘 반도', price: p(31.7859, 122) },
          { location: '이니스테르', price: p(34.3685, 115) },
        ],
      },
      {
        packName: '특산품',
        ingredient: [
          { name: '농축된 과즙', ea: 180 },
          { name: '라벤더', ea: 15 },
        ],
        sell: [
          { location: '노래의 땅', price: p(16.1278, 130) },
          { location: '동틀녘 반도', price: p(15.6347, 126) },
          { location: '이니스테르', price: p(17.243, 125) },
        ],
      },
      {
        packName: '전통 특산품',
        ingredient: [
          { name: '곱게 빻은 곡물', ea: 150 },
          { name: '박하', ea: 5 },
        ],
        sell: [
          { location: '노래의 땅', price: p(17.7086, 130) },
          { location: '동틀녘 반도', price: p(17.0308, 125) },
          { location: '이니스테르', price: p(19.7261, 130) },
        ],
      },
      {
        packName: '비료',
        ingredient: fertilizer,
        sell: [
          { location: '노래의 땅', price: p(18.4677, 130) },
          { location: '동틀녘 반도', price: p(18.4711, 130) },
          { location: '이니스테르', price: p(21.0733, 129) },
        ],
      },
      {
        packName: '벌꿀',
        ingredient: hoeny,
        sell: [
          { location: '노래의 땅', price: p(25.5315, 130) },
          { location: '동틀녘 반도', price: p(25.5365, 130) },
          { location: '이니스테르', price: p(28.6017, 130) },
        ],
      },
      {
        packName: '치즈',
        ingredient: cheeze,
        sell: [
          { location: '노래의 땅', price: p(25.2161, 130) },
          { location: '동틀녘 반도', price: p(25.2213, 130) },
          { location: '이니스테르', price: p(28.7506, 130) },
        ],
      },
      {
        packName: '약재',
        ingredient: medicinal,
        sell: [
          { location: '노래의 땅', price: p(24.0047, 130) },
          { location: '동틀녘 반도', price: p(24.0101, 130) },
          { location: '이니스테르', price: p(27.2964, 130) },
        ],
      },
    ],
  },

  /* 이니스테르 */
  {
    location: '이니스테르',
    packAged: '기본',
    packName: '표준',
    sellInfo: [
      {
        packName: '특제 특산품',
        ingredient: [
          { name: '조각낸 채소', ea: 300 },
          { name: '오렌지', ea: 5 },
        ],
        sell: [
          { location: '노래의 땅', price: p(34.3629, 125) },
          { location: '동틀녘 반도', price: p(36.9359, 127) },
          { location: '이니스테르', price: p(0, 130) },
        ],
      },
      {
        packName: '특산품',
        ingredient: [
          { name: '다진 향신료', ea: 180 },
          { name: '올리브', ea: 3 },
        ],
        sell: [
          { location: '노래의 땅', price: p(16.7064, 130) },
          { location: '동틀녘 반도', price: p(17.5225, 130) },
          { location: '이니스테르', price: p(0, 130) },
        ],
      },
      {
        packName: '전통 특산품',
        ingredient: [
          { name: '곱게 빻은 곡물', ea: 150 },
          { name: '장미', ea: 15 },
        ],
        sell: [
          { location: '노래의 땅', price: p(18.3772, 130) },
          { location: '동틀녘 반도', price: p(19.2745, 130) },
          { location: '이니스테르', price: p(0, 130) },
        ],
      },
      {
        packName: '비료',
        ingredient: fertilizer,
        sell: [
          { location: '노래의 땅', price: p(19.7839, 130) },
          { location: '동틀녘 반도', price: p(20.7501, 130) },
          { location: '이니스테르', price: p(0, 130) },
        ],
      },
      {
        packName: '벌꿀',
        ingredient: hoeny,
        sell: [
          { location: '노래의 땅', price: p(26.4684, 130) },
          { location: '동틀녘 반도', price: p(27.8865, 130) },
          { location: '이니스테르', price: p(0, 130) },
        ],
      },
      {
        packName: '치즈',
        ingredient: cheeze,
        sell: [
          { location: '노래의 땅', price: p(26.4684, 130) },
          { location: '동틀녘 반도', price: p(27.8865, 130) },
          { location: '이니스테르', price: p(0, 130) },
        ],
      },
      {
        packName: '약재',
        ingredient: medicinal,
        sell: [
          { location: '노래의 땅', price: p(24.8686, 130) },
          { location: '동틀녘 반도', price: p(26.4813, 130) },
          { location: '이니스테르', price: p(0, 130) },
        ],
      },
      {
        packName: 'special',
        specialName: '시공의 파편',
        ingredient: [
          { name: '시공의 균열 조각', ea: 2 },
          { name: '철 주괴', ea: 100 },
        ],
        sell: [
          { location: '노래의 땅', price: p(34.1068, 130) },
          { location: '동틀녘 반도', price: p(37.6695, 130) },
          { location: '이니스테르', price: p(0, 130) },
        ],
      },
      {
        packName: 'bond',
        bondName: '이니스테르 푸른 소금 상회 수송품',
        ingredient: bond,
        sell: [
          { location: '노래의 땅', price: p(83.5704, 126) },
          { location: '동틀녘 반도', price: p(86.5965, 123) },
          { location: '이니스테르', price: p(0, 130) },
        ],
      },
    ],
  },

  /* 초원의 띠 */
  {
    location: '초원의 띠',
    packAged: '가공',
    packName: '보존',
    sellInfo: [
      {
        packName: '특제 특산품',
        ingredient: [
          { name: '손질된 고기', ea: 300 },
          { name: '모링가 나무 열매', ea: 3 },
        ],
        sell: [
          { location: '노래의 땅', price: p(37.5571, 130) },
          { location: '동틀녘 반도', price: p(36.4062, 126) },
          { location: '이니스테르', price: p(30.175, 97) },
        ],
      },
      {
        packName: '특산품',
        ingredient: [
          { name: '훈증시킨 약재', ea: 200 },
          { name: '박하', ea: 6 },
        ],
        sell: [
          { location: '노래의 땅', price: p(17.4706, 130) },
          { location: '동틀녘 반도', price: p(17.4726, 130) },
          { location: '이니스테르', price: p(18.6221, 130) },
        ],
      },
      {
        packName: '전통 특산품',
        ingredient: [
          { name: '조각낸 채소', ea: 160 },
          { name: '알로에', ea: 5 },
        ],
        sell: [
          { location: '노래의 땅', price: p(19.2176, 130) },
          { location: '동틀녘 반도', price: p(18.776, 127) },
          { location: '이니스테르', price: p(20.3265, 129) },
        ],
      },
      {
        packName: '비료',
        ingredient: fertilizer,
        sell: [
          { location: '노래의 땅', price: p(20.6892, 130) },
          { location: '동틀녘 반도', price: p(20.6908, 130) },
          { location: '이니스테르', price: p(21.8555, 130) },
        ],
      },
      {
        packName: '벌꿀',
        ingredient: hoeny,
        sell: [
          { location: '노래의 땅', price: p(27.7619, 130) },
          { location: '동틀녘 반도', price: p(27.7659, 130) },
          { location: '이니스테르', price: p(30.0951, 130) },
        ],
      },
      {
        packName: '치즈',
        ingredient: cheeze,
        sell: [
          { location: '노래의 땅', price: p(27.7619, 130) },
          { location: '동틀녘 반도', price: p(27.7659, 130) },
          { location: '이니스테르', price: p(30.0951, 130) },
        ],
      },
      {
        packName: '약재',
        ingredient: medicinal,
        sell: [
          { location: '노래의 땅', price: p(26.2524, 130) },
          { location: '동틀녘 반도', price: p(26.2578, 130) },
          { location: '이니스테르', price: p(28.8371, 130) },
        ],
      },
      {
        packName: 'special',
        specialName: '정제된 연고',
        ingredient: [
          { name: '쌍두사 맹독니', ea: 1 },
          { name: '목재', ea: 100 },
        ],
        sell: [
          { location: '노래의 땅', price: p(41.5857, 130) },
          { location: '동틀녘 반도', price: p(41.8132, 130) },
          { location: '이니스테르', price: p(52.0871, 130) },
        ],
      },
    ],
  },

  /* 하리하랄라야의 폐허 */
  {
    location: '하리하랄라야의 폐허',
    packAged: '가공',
    packName: '보존',
    sellInfo: [
      {
        packName: '특제 특산품',
        ingredient: [
          { name: '다진 향신료', ea: 300 },
          { name: '아보카도', ea: 5 },
        ],
        sell: [
          { location: '노래의 땅', price: p(36.3371, 114) },
          { location: '동틀녘 반도', price: p(39.2104, 123) },
          { location: '이니스테르', price: p(37.8431, 111) },
        ],
      },
      {
        packName: '특산품',
        ingredient: [
          { name: '농축된 과즙', ea: 200 },
          { name: '감자', ea: 15 },
        ],
        sell: [
          { location: '노래의 땅', price: p(19.0176, 130) },
          { location: '동틀녘 반도', price: p(19.0189, 130) },
          { location: '이니스테르', price: p(20.0134, 129) },
        ],
      },
      {
        packName: '전통 특산품',
        ingredient: [
          { name: '손질된 고기', ea: 160 },
          { name: '땅콩', ea: 5 },
        ],
        sell: [
          { location: '노래의 땅', price: p(20.9192, 130) },
          { location: '동틀녘 반도', price: p(20.2773, 126) },
          { location: '이니스테르', price: p(22.1855, 130) },
        ],
      },
      {
        packName: '비료',
        ingredient: fertilizer,
        sell: [
          { location: '노래의 땅', price: p(22.3239, 130) },
          { location: '동틀녘 반도', price: p(22.3262, 130) },
          { location: '이니스테르', price: p(23.4906, 130) },
        ],
      },
      {
        packName: '벌꿀',
        ingredient: hoeny,
        sell: [
          { location: '노래의 땅', price: p(30.7696, 130) },
          { location: '동틀녘 반도', price: p(30.7734, 130) },
          { location: '이니스테르', price: p(33.103, 130) },
        ],
      },
      {
        packName: '치즈',
        ingredient: cheeze,
        sell: [
          { location: '노래의 땅', price: p(30.7696, 130) },
          { location: '동틀녘 반도', price: p(30.7734, 130) },
          { location: '이니스테르', price: p(31.6462, 130) },
        ],
      },
      {
        packName: '약재',
        ingredient: medicinal,
        sell: [
          { location: '노래의 땅', price: p(29.5922, 130) },
          { location: '동틀녘 반도', price: p(29.5981, 130) },
          { location: '이니스테르', price: p(32.1773, 130) },
        ],
      },
      {
        packName: 'special',
        specialName: '폐허 석등',
        ingredient: [
          { name: '망령의 영혼', ea: 1 },
          { name: '석재', ea: 50 },
        ],
        sell: [
          { location: '노래의 땅', price: p(48.7792, 130) },
          { location: '동틀녘 반도', price: p(49.0068, 130) },
          { location: '이니스테르', price: p(47.2641, 130) },
        ],
      },
      {
        packName: 'bond',
        bondName: '동방 이슈바라 푸른 소금 상회 수송품',
        ingredient: bond,
        sell: [
          { location: '노래의 땅', price: p(95.6618, 130) },
          { location: '동틀녘 반도', price: p(92.7634, 126) },
          { location: '이니스테르', price: p(96.2018, 125) },
        ],
      },
    ],
  },

  /* 하슬라 */
  {
    location: '하슬라',
    packAged: '가공',
    packName: '보존',
    sellInfo: [
      {
        packName: '특제 특산품',
        ingredient: [
          { name: '훈증시킨 약재', ea: 300 },
          { name: '오리털', ea: 5 },
        ],
        sell: [
          { location: '노래의 땅', price: p(38.915, 122) },
          { location: '동틀녘 반도', price: p(41.2563, 118) },
          { location: '이니스테르', price: p(30.0293, 88) },
        ],
      },
      {
        packName: '특산품',
        ingredient: [
          { name: '손질된 고기', ea: 200 },
          { name: '백합', ea: 5 },
        ],
        sell: [
          { location: '노래의 땅', price: p(19.0279, 130) },
          { location: '동틀녘 반도', price: p(19.4999, 123) },
          { location: '이니스테르', price: p(16.6115, 107) },
        ],
      },
      {
        packName: '전통 특산품',
        ingredient: [
          { name: '농축된 과즙', ea: 160 },
          { name: '수레국화', ea: 5 },
        ],
        sell: [
          { location: '노래의 땅', price: p(20.2864, 126) },
          { location: '동틀녘 반도', price: p(22.671, 130) },
          { location: '이니스테르', price: p(21.5175, 126) },
        ],
      },
      {
        packName: '비료',
        ingredient: fertilizer,
        sell: [
          { location: '노래의 땅', price: p(22.3358, 130) },
          { location: '동틀녘 반도', price: p(24.0132, 130) },
          { location: '이니스테르', price: p(23.507, 130) },
        ],
      },
      {
        packName: '벌꿀',
        ingredient: hoeny,
        sell: [
          { location: '노래의 땅', price: p(30.7937, 130) },
          { location: '동틀녘 반도', price: p(33.8861, 130) },
          { location: '이니스테르', price: p(33.1358, 130) },
        ],
      },
      {
        packName: '치즈',
        ingredient: cheeze,
        sell: [
          { location: '노래의 땅', price: p(30.5568, 129) },
          { location: '동틀녘 반도', price: p(32.4302, 130) },
          { location: '이니스테르', price: p(31.6791, 130) },
        ],
      },
      {
        packName: '약재',
        ingredient: medicinal,
        sell: [
          { location: '노래의 땅', price: p(29.6262, 130) },
          { location: '동틀녘 반도', price: p(33.0838, 130) },
          { location: '이니스테르', price: p(32.2229, 130) },
        ],
      },
      {
        packName: 'special',
        specialName: '언월도',
        ingredient: [
          { name: '귀검호위의 무기 조각', ea: 1 },
          { name: '철 주괴', ea: 100 },
        ],
        sell: [
          { location: '노래의 땅', price: p(61.5466, 130) },
          { location: '동틀녘 반도', price: p(62.038, 130) },
          { location: '이니스테르', price: p(60.5319, 130) },
        ],
      },
    ],
  },

  /* 호랑이 등뼈 산맥 */
  {
    location: '호랑이 등뼈 산맥',
    packAged: '무첨가',
    packName: '신선',
    sellInfo: [
      {
        packName: '특제 특산품',
        ingredient: [
          { name: '곱게 빻은 곡물', ea: 300 },
          { name: '우유', ea: 5 },
        ],
        sell: [
          { location: '노래의 땅', price: p(29.2363, 127) },
          { location: '동틀녘 반도', price: p(28.7798, 125) },
          { location: '이니스테르', price: p(32.887, 124) },
        ],
      },
      {
        packName: '특산품',
        ingredient: [
          { name: '조각낸 채소', ea: 180 },
          { name: '포도', ea: 5 },
        ],
        sell: [
          { location: '노래의 땅', price: p(13.3383, 130) },
          { location: '동틀녘 반도', price: p(13.3411, 130) },
          { location: '이니스테르', price: p(15.7381, 128) },
        ],
      },
      {
        packName: '전통 특산품',
        ingredient: [
          { name: '손질된 고기', ea: 150 },
          { name: '토마토', ea: 15 },
        ],
        sell: [
          { location: '노래의 땅', price: p(14.1507, 130) },
          { location: '동틀녘 반도', price: p(14.1539, 130) },
          { location: '이니스테르', price: p(17.5826, 130) },
        ],
      },
      {
        packName: '비료',
        ingredient: fertilizer,
        sell: [
          { location: '노래의 땅', price: p(14.8541, 130) },
          { location: '동틀녘 반도', price: p(14.8573, 130) },
          { location: '이니스테르', price: p(18.9287, 130) },
        ],
      },
      {
        packName: '벌꿀',
        ingredient: hoeny,
        sell: [
          { location: '노래의 땅', price: p(21.5174, 130) },
          { location: '동틀녘 반도', price: p(21.5222, 130) },
          { location: '이니스테르', price: p(25.4271, 130) },
        ],
      },
      {
        packName: '치즈',
        ingredient: cheeze,
        sell: [
          { location: '노래의 땅', price: p(21.724, 130) },
          { location: '동틀녘 반도', price: p(21.7286, 130) },
          { location: '이니스테르', price: p(25.4271, 130) },
        ],
      },
      {
        packName: '약재',
        ingredient: medicinal,
        sell: [
          { location: '노래의 땅', price: p(21.1256, 130) },
          { location: '동틀녘 반도', price: p(21.1303, 130) },
          { location: '이니스테르', price: p(24.1308, 130) },
        ],
      },
    ],
  },
];
