const student = ['둘리', '도우너', '또치', '희동이']; // 학생이름 배열
const grade = [     // 성적표 배열
    [78, 89, 96],
    [62, 77, 67],
    [54, 90, 80],
    [100, 99, 98],
];

// 총점과 평균점수를 저장할 변수
let sum = 0, avg = 0;   // 총점과 평균점수를 저장할 변수

let class_sum = 0; // 학생별 평균점수의 총 합

let class_avg = 0; // 반평균

for (let i = 0; i < grade.length; i++) {
    sum = 0;

    for (let j = 0; j < grade[i].length; j++) {
        sum += grade[i][j];
    }
    avg = sum / grade[i].length;
    
    //toFixed() 함수로 소수점을 처리한 결과는 문자열이기 때문에 숫자 연산이
    // 불가능하므로 toFixed() 함수 적용 전에 반점수를 구해야 한다.
    class_sum += avg;
    avg = avg.toFixed(2);

    console.log(student[i] + ' 총점: ' + sum + '점, 평균: ' + avg + '점');
}
class_avg = class_sum / student.length;
class_avg.toFixed(2);
console.log('반평균 = ' + class_avg + '점');

