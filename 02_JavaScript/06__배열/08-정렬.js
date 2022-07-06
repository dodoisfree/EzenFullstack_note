// 배열 순서대로 정렬하기

const data = [3, 5, 1, 4, 2];
console.log(data);

// i는 배열의 원소중 마지막을 제외한 항목을 스캔한다.
for (let i=0; i<data.length-1; i++) {
    //j는 배열의 원소 중 i번째 다음 원소부터 마지막 원소까지 스캔
    for (let j=i+1; j<data.length; j++) {

        // 부등호 방향 ">" 오름차순(순차정렬)
        // 부등호 방향 "<" 내림차순(역순정렬)
        if (data[i] > data[j]) {
            const tmp = data[i];
            data[i]= data[j];
            data[j] = tmp;
        }
    }
}

console.log(data);