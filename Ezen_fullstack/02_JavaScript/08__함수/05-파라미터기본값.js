// 파라미터 기본값 정의

function bar(x = 1, y = 2) {
    console.log("x=" + x + ", y=", + y);
    let result = x + y;
    console.log("result=" + result);
}

bar(100, 200);  // x-> 100, y-> 200
bar(500);       // x-> 500, y-> 2
bar();          // x-> 1, y-> 2