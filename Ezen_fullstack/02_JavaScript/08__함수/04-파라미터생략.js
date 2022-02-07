// 함수의 파라미터 생략

// 두개의 파마리터를 갖는 함수 정의
function foo(x, y) {
    console.log("x=" + x + ", y=" + y);

    // 파라미터가 생략될 수 있으므로 견고한 코드라고 볼 수 없다.
    //let result = x+ y;

    let result = 0;
    if (x != undefined) { result += x; }
    if (x != undefined) { result += y; }

    console.log("result=" + result);
}

foo(100, 200);  // x-> 100, y-> 200
foo(500);       // x-> 500, y-> undefined
foo();          // x-> undefined, y-> undefined