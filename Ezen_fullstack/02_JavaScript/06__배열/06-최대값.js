// 원소값을 무작위로 갖는 배열
const data = [5, 2, 7, 9, 2];

// 비교를 위해 배열의 첫 번째 원소를 복사
let max = data[0];

// 1번째 이후 원소부터 마지막 원소까지 반복
for (let i=1; i<data.length; i++) {
    console.log("max=%d, data[%d]=%d",max, i, data[i]);

    // max가 data의 i번째보다 작다면 i번째 원소를 max에 복사
    // 비교식의 부등호 방향만 반대로 지정하면 최소값을 구할 수 있다.
    if (max < data[i]) {
        console.log(">> max에" + data[i] + "를 복사");
        max = data[i]
    }
}

console.log("----------");
console.log("최대값 = " + max);