/** (1) url모듈 내에서 URL클래스만 참조하기 */
import {URL} from 'url';

/** (2) 주소 문자열을 URL 객체로 만들기 */
const myurl = 'http://wwww.itpaper.co.kr:8765/hello/world.html?a=123&b=456#home';

// URL의 각 성분을 분해 --> javascript의 location객체와 동일한 기능
const location = new URL(myurl);

console.group("URL 성분 정보 확인");
console.debug(location);
console.debug('herf: ' + location.href);
console.debug('protocol: ' + location.protocol);  // 통신방식 (http:, https:)
console.debug('host: ' + location.host);          // 사이트 주소, 포트번호 포함
console.debug('hostname: ' + location.hostname);  // 사이트 주소, 포트번호를 제외
console.debug('port: ' + location.port);          // 포트번호
console.debug('origin: ' + location.origin);      // 통신방식 + 사이트주소 + 포트번호
console.debug('pathname: ' + location.pathname);  // 사이트 주소에서 변수 영역 제외한 값 (폴더 & 파일)
console.debug('search: ' + location.search);      // '?'를 포함한 변수 영역
console.debug('hash: ' + location.hash);          // '#'과 함께 표시되는 마지막 값
console.groupEnd();