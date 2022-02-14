/** 
 * Date
 * 객체를 생성하는 순간의 시스템 시각이나 생성자 파라미터로 전달된 시각을 플랫폼에 종속되지 않는 형태로 나타낸다.
*/

// 요일의 이름을 저장하고 있는 배열의 생성
const days = ['일', '월', '화', '수', '목', '금', '토'];

// 객체의 생성
const date1 = new Date();

// 년,월,일,시간,분,초를 리턴받기
const yy = date1.getFullYear();
// 월은 0이 1월, 11이 12월을 의미한다.
const mm = date1.getMonth() + 1;
const dd = date1.getDate();

// 0=일요일~ 6=토요일의 값이 리턴된다.
const i = date1.getDay();
const day = days[i];

const hh = date1.getHours();
const mi = date1.getMinutes();
const ss = date1.getSeconds();

var result = yy + '-' + mm + '-' + dd + ' ' + day + '요일' + hh + ':' + mi + ':' + ss;
console.log(result);

// 날짜를 의미하는 문자열 반환받기
// 날짜 부분만 나타내는, 사람이 읽을 수 있는 문자열을 반환
console.log(date1.toDateString());

// Date를 나타내는 문자열을 ISO 8601 확장 형식에 맞춰 변환
console.log(date1.toISOString());

// 형식 문자열을 사용해서 Date를 나타내는 문자열을 생성
console.log(date1.toLocaleString());
console.log(date1.toLocaleString('de-DE'));
console.log(date1.toLocaleString('ko-KR'));

// Date의 날짜 부분을 나타내는 문자열을 시스템에 설정된 현재 지역의 형식으로 반환
console.log(date1.toLocaleDateString());
console.log(date1.toLocaleDateString('de-DE'));
console.log(date1.toLocaleDateString('ko-KR'));

// Date의 시간 부분을 나타내는 문자열을 시스템에 설정된 현재 지역의 형식으로 반환
console.log(date1.toLocaleTimeString());
console.log(date1.toLocaleTimeString('de-DE'));
console.log(date1.toLocaleTimeString('ko-KR'));

// 특정 날짜를 의미하는 객체 생성
// 시각이 없으므로 자정으로 설정된다.
var date2 = new Date(2021, 9, 5);
console.log(date1.toLocaleString('ko-KR'));

// 특정 날짜를 의미하는 객체 생성
var date3 = new Date(2021, 9, 5, 21, 19, 31);
console.log(date1.toLocaleString('ko-KR'));

// 이미 생성된 날짜 객체의 성분 변경
date3.setFullYear(2010);
date3.setMonth(1);  // 0부터 11 까지 이므로 2월을 위해선 1로 설정
date3.setDate(14);
date3.setHours(12);
date3.setMinutes(16);
date3.setSeconds(30);
console.log(date3.toLocaleString('ko-KR'));