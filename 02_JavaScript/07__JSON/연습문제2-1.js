const exam = {
    "철수": [89, 82, 79, 91],
    "민영": [91, 95, 94, 89],
    "남철": [65, 57, 71, 64],
    "혜진": [82, 76, 81, 83]
}

// JSON의 key에 대한 반복처리
for (const key in exam){
    // 학생별 총점을 위한 변수 초기화
    let sum = 0;

    // exam[key]는 학생 한명의 점수 배열.
    // 이 배열의 원소를 스캔하는 반복문을 사용하여 총점 구하기
    for (const p of exam[key]) {
        sum += p;
    }

    let avg = sum / exam[key].length;

    console.log("%s의 총점은 %d점 이고 평균은 %d점 입니다.", key, sum, avg);
}