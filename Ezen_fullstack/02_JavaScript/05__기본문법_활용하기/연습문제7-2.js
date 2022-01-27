// const number = 3;    // 3, 5, 7, 9
const number = 2;       // 2, 4, 6, 8

let start = number == 2 ? 2 : 3;

for (let i=start; i<10; i+=2) {     // 2가 2씩 증가하면 짝수 3이 2씩 증가하면 홀수
    for (let j=1; j<10; j++) {
        console.log("%d x %d = %d", i, j, i*j);
    }
}