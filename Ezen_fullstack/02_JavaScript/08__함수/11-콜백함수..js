// 콜백 함수를 파라미터로 요구하는 함수 정의하기
function something(x, y, cb) {
    // x와 y의 연산 결과를 파라미터로 전달받은 callback에게 다시 전달하여 리턴값을 받아 처리함
    const result = cb(x, y);
    console.log(x + "와 " + y + "의 연산 결과는 " + result);
}

function plus(a, b) { return a + b; }
function minus(a, b) { return a - b; }

something(100, 50, plus);
something(100, 50, minus);

// 콜백함수를 익명함수 형태로 전달하기
something(200, 100, function(a, b) {
    return a * b;
});

something(200, 100, function(a, b) {
    return a / b;
});