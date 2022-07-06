function random(n1, n2) {
    return parseInt(Math.random() * (n2 - n1 + 1)) + n1;
}

// Promise를 가동하기 위해서는 Promise객체를 리턴하는 함수가 필요함.
function getLuckyResult() {
    // Promise객체는 resolve 함수와, reject 함수를 파라미터로 받는 콜백이 필요함.
    return new Promise(function (resolve, reject) {
        // 이 안에서 비동기 작업을 시작함.
        setTimeout(() => {
            console.log("당신의 추첨 결과는...?");
            const lucky = random(1, 9);

            if (lucky % 2 == 0) {
                // 작업의 결과가 성공으로 판별된 경우 resolve()를 호출함
                // 파라미터는 단 하나만 가능
                // 여러 개의 정보를 보내야 하는 경우 JSON 구조가 적절
                resolve({ msg: "당첨입니다~!!", a: 1, b: 2, c: 3 });
            } else {
                reject({ msg: "꽝~!!", d: -1, e: -2 });
            }
        }, 1000);
    });
}

// Promise를 리턴하는 함수를 호출하기 위해 새로운 async 함수를 정의
// 주로 즉시 실행 함수 형태로 정의됨.
// -> 익명함수 전체를 괄호()로 묶어버리고 그 뒤에 호출을 위한 ()를 연달아 넣는 형식
// (async function() {
(async () => {
    let result = null;

    // Promise를 리턴받는 과정을 await 키워드를 적용하여 처리, 예외처리도 적용
    try {
        // getLuckyResult에서 resolve()가 호출되면서 전달한 파라미터는 그냥 리턴
        result = await getLuckyResult();
        console.log("%s, a=%d, b=%d, c=%d", result.msg, result.a, result.b, result.c);
    } catch (e) {
        // getLuckyResult에서 reject()가 호출되면서 전달한 파라미터는 예외객체(e)로 전달
        console.error('%s, d=%d, e=%d', e.msg, e.d, e.e);
    }
})();