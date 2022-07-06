// 반복범위 동적 설정
// 자식 반복문의 조건식이 부모 반복문의 조건변수를 활용하여 새로운 값을 계산하면 자식 반복문의 반복 범위에 변화를 줄 수 있다.

for (let i=0; i<5; i++) {

    console.group("i에 대한 반복 수행 시작 >> i=" + i);

    for (let j=0; j<i+1; j++) {
        console.log("i=%d, j=%d", i, j);
    }

    console.groupEnd();
}