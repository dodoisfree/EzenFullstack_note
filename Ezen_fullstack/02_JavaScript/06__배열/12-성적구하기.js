/* 학생별 총점과 평균 구하기
| 이름 | 국어 | 영어 | 수학 |
| 철수 | 92  |  81  |  76  |
| 철수 | 72  |  95  |  84  |
| 민혁 | 80  |  86  |  98  |
*/

// 학생 성적표 배열
const grade = [
    ["철수", 92, 81, 76],
    ["영희", 72, 95, 84],
    ["철수", 80, 86, 98]
];

let sum = 0; // 이 위치에서 변수를 초기화 하면 모든 학생의 총점.

// 2차 배열 탐색
for(let i=0; i<grade.length; i++){
    
    // 학새 한명을 의미하는 부모 반복문 안에서 변수를 초기화 하면 학생 개인별 총점
    let personal_sum = 0;

    // i번째 행에서 0번째 열은 학생 이름이므로 합산에서 제외한다.
    for (let j=1; j<grade[i].length; j++) {
        //console.log(grade[i][j]);
        sum += grade[i][j];
        personal_sum += grade[i][j];
    }
    
    // 이름은 과목수에서 제외해야 하므로 "길이-1"
    const personal_avg = personal_sum / (grade[i].length-1);
    console.log("%s의 총점은 %d이고 평균은 %d입니다.", grade[i][0], personal_sum, personal_avg);
}
console.log("모든 학생의 총점은 %d입니다.", sum)