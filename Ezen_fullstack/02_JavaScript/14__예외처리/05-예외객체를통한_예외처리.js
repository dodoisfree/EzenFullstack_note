/** 에러 객체를 활용한 예외처리 */
function foo(x, y) {
    if (x < 0 && y < 0) {
        // 함수 안에서 에러를 강제로 발생시킬 경우, 이 함수를 호출하는 위치를 에러로 인식한다.
        throw new Error("x와 y가 0보다 작습니다.");
    }
    return x + y;
}

// try블록 안의 코드는 최소화 하는 것이 프로그램 효율에 좋다.
// 그래서 k값을 정상적으로 리턴 받았다면 그 결과값을 활용하는 처리는 try블록 밖에서 하는것이 좋다.
// 에러 점검이 끝난 후 try~catch 블록 밖에서 k 값을 활용하려면
// 변수의 선언 위치가 try블록보다 상위에 위치해야 한다. --> 변수의 스코프 규칙
const k = null;

try {
    k = foo(-1, -2);
} catch (err) {
    // 이 블록으로 전달되는 err객체는 5라인에서 생성한 Error 클래스의 객체이다.
    console.log("에러이름: %s", err.name);
    console.log("에러내용: %s", err.message);
}

console.log(k);