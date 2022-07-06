/**
 * 시나리오.
 * 
 * 1초 후 "당신의 추첨 결과는...?" 이라는 메세지 표시
 * 1~9에 대한 랜덤값이 짝수이면 당첨, 홀수이면 꽝
 * 그 결과를 3초 후에 표시
 * 
 * 타이머에 대한 작업 종료 후 이어서 새로운 타이머를 만들어 진행
 */

function random(n1, n2) {
    return parseInt(Math.random() * (n2 - n1 + 1)) + n1;
}

setTimeout(() => {
    console.log("당신의 추첨 결과는...?");
    const lucky = random(1, 9);
    setTimeout(() => {
        console.log(lucky % 2 == 0 ? "당첨입니다~!!" : "꽝!!!");
    }, 3000);
}, 1000);

console.log("추첨중~~~");