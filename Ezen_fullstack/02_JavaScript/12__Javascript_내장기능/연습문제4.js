// 랜덤함수
function random(n1, n2) {
    return parseInt(Math.random() * (n2 - n1 + 1)) + n1;
}

// 0개의 원소를 갖는 배열
const lotto = [];
console.log(lotto);

// 6회의 반복을 수행
for (let i=0; i<6; i++) {
    console.group("%d번째 원소 결정하기", i);
    console.log("%s", lotto);
    // 중복되지 않는 숫자가 몇 번째에 생성될지 알 수 없으므로 무한 반복
    while (true) {
        // 랜덤한 숫자
        // const rnd = random(1, 45);
        const rnd = random(1, 6);

        // rnd 값이 lotto배열안의 원소와 중복되지 않는다면?
        if (!lotto.includes(rnd)){
            lotto.push(rnd);
            break;
        } else {
            console.log(" >>> %d는 중복됨", rnd);
        }
    }
    console.groupEnd();
}

console.log(lotto);