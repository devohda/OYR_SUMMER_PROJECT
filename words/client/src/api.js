const axios = require('axios');
const option = {
    query: '꽃',
    start: 1, //검색 시작 위치
    display: 3,
};
const api = axios.create({
    baseURL: 'https://openapi.naver.com/v1/search/',
    headers: {
        'X-Naver-Client-Id': 'alSmSApzHasv7iCjV_qU',
        'X-Naver-Client-Secret': 'Q6acTXLeig',
    },
    option: {
        query: '꽃',
    },
});

api.get('book.json', function (err, res, body) {
    let json = JSON.parse(body); //json으로 파싱
    console.log(json);
});

/*const request = require('request')
const NAVER_CLIENT_ID     = 'alSmSApzHasv7iCjV_qU'
const NAVER_CLIENT_SECRET = 'Q6acTXLeig'
const option = {
  query  :'꽃', //이미지 검색 텍스트
  start  :1, //검색 시작 위치
  display:3, //가져올 이미지 갯수
  sort   :'sim', //정렬 유형 (sim:유사도)
  filter :'small' //이미지 사이즈
}

request.get({
  uri:'https://openapi.naver.com/v1/search/image', //xml 요청 주소는 https://openapi.naver.com/v1/search/image.xml
  qs :option,
  headers:{
    'X-Naver-Client-Id':NAVER_CLIENT_ID,
    'X-Naver-Client-Secret':NAVER_CLIENT_SECRET
  }
}, function(err, res, body) {
  let json = JSON.parse(body) //json으로 파싱
  console.log(json)
})
*/

export const searchApi = {
    movie: () => api.get('movie.json'),
    book: () => api.get('book.json'),
};

export default api;
