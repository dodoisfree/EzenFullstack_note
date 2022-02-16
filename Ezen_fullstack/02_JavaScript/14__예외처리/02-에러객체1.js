/** 개발자가 직접 정의하는 에러 */

// 에러 객체를 생성
// 생성자 파라미터로 에러의 내용 전달
let err = new Error("이상한 일이 벌어졌습니다.");
console.log("에러이름: %s", err.name);
console.log("에러내용: %s", err.message);

// 개발자가 직접 에러를 발생시킬 수 있다.
// --> 이 구문을 실제 에러로 인식하기 때문에 프로그램이 이 위치에서 중단된다.
throw err;

console.log("프로그램 종료");