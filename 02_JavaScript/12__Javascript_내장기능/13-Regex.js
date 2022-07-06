/**
 * 정규표현식
 * 문자열이 형식을 의미하는 수식.
 * 문자열이 특정 조건을 충족하는지 검사하거나 특정 패턴의 문자열을 검색, 치환 하기 위해 사용함.
 * 
 * const 변수명 = /정규표현식/
 * 변수명.test(검사할 문자열)  --> 문자열이 정규표현식에 부합할 경우 true를 반환함.
 */

// 회원가입시 입력받은 값을 가정한 변수
// 사용자가 입력한 모든 내용은 문자열 변수이다.
const username="자바스크립트";
const age="20";
const userid='js123';

// 이름의 한글입력 검사
const pattern1 = /^[ㄱ-ㅎ가-힣]*$/;
// username이 pattern1 정규식에 부합하지 않는다면?
if (!pattern1.test(username)) {
    console.log('이름은 한글만 입력 가능합니다.');
}

// 나이의 숫자 입력 검사
const pattern2 = /^[0-9]*$/;
if (!pattern2.test(age)) {
    console.log('나이는 숫자만 입력 가능합니다.');
}

// 아이디의 영문+숫자 검사
const pattern3 = /^[a-zA-Z0-9]*$/;
if (!pattern3.test(userid)) {
    console.log('아이디는 영서+숫자 조합으로만 입력 가능합니다.');
}

// 아이디의 최대 글자 수 검사
if (userid.length > 20) {
    console.log('아이디는 최대 20자 까지만 입력 가능합니다.');
}

console.log("검사완료!!");