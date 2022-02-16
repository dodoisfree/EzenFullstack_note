// 개발자가 발생시키는 에러에 대한 예외처리
let err = new Error("이상한 일이 벌어졌습니다.");

try {
    // throw구문은 그 자체로 에러로 인식하기 때문에 try~catch 처리가 가능하다.
    throw err;
} catch (err) {
    console.log("에러이름: %s", err.name);
    console.log("에러내용: %s", err.message);
}

// 에러 상황을 try~catch로 처리했으므로 프로그램이 중단되지 않고 무사히 종료할 수 있다.
console.log("프로그램 종료");