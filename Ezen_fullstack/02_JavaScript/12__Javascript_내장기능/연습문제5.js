function random(n1, n2) {
    return parseInt(Math.random() * (n2 - n1 + 1)) + n1;
}

// `1~45`사이의 범위의 1씩 증가 하는 원소가 저장되어 있는 배열 `balls`를 생성
const balls = new Array(45);

for (let i = 0; i < balls.length; i++) {
    balls[i] = i + 1;
}
// console.log(balls);

// 6개의 빈 칸을 갖는 배열 `lotto`를 생성
const lotto = new Array(6);

for (let i=0; i<lotto.length; i++){
    console.log(balls);

    // balls의 index범위 안에서 임의의 위치를 선정
    const rnd = random(0, balls.length-1);

    // `balls` 배열에서 임의의 원소 하나를 추출하여 `lotto` 배열에 채워넣기
    lotto[i] = balls[rnd];

    // rnd번째의 위치에서 하나의 데이터를 잘나냄
    balls.splice(rnd, 1);
}

console.log(lotto);