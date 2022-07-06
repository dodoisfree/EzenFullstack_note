const RegexHelper = require("./RegexHelper");

// 회원가입시 입력받은 값을 가정한 변수
// 사용자가 입력한 모든 내용은 문자열 변수이다.
const username = "자바스크립트";
const age = "20";
const userid = 'js123';


// 입력값 검사를 수행하기 위한 객체
const regex = new RegexHelper();

// 입력값의 형식검사 수행
try {
    regex.kor(username, "이름은 한글로만 입력하세요.");
    regex.maxLen(username, 20, "이름은 최대 20글자까지만 가능합니다.");
    regex.num(age, "이름은 숫자만 입력하세요.");
    regex.engNum(userid, "이름은 영어와 숫자의 조합만 가능합니다.");
    regex.maxLen(userid, 20, "아이디는 최대 20글자까지만 가능합니다.");
} catch (err) {
    console.group("%s 에러 발생", err.name);
    console.error("에러코드: %d", err.statusCode);
    console.error("에러코드: %s", err.message);
    console.groupEnd();
}

console.log("검사 완료!");