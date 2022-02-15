const ssn = '941127-1******'

const date = new Date();
const now_year = date.getFullYear();

let yy = parseInt(ssn.substring(0, 2));
let mm = parseInt(ssn.substring(2, 4));
let dd = parseInt(ssn.substring(4, 6));
let gen = parseInt(ssn.substring(7, 8));

//console.log("%d, %d, %d, %d", yy, mm, dd, gen);  94 11 27 1

// 2000년도 이전 출생자의 주민번호 뒷자리 -> 1,2
// 2000년도 이후 출생자의 주민번호 뒷자리 -> 3,4
yy = (gen > 2) ? yy + 2000 : yy + 1900; // gen이 2보다 크면 yy에 2000 더하고 그렇지 않으면 1900 더해라

// 나이 계산
const age = now_year - yy + 1;
console.log(age);

// 성별 확인
const sex = (gen % 2) ? "남자" : "여자";
console.log(sex);

console.log("%d년 %d월 %d일에 태어난 %d세 %s 입니다.", yy, mm, dd, age, sex);