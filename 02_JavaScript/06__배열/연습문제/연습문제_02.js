var grade = [75, 82, 91];   // 성적표 배열
var sum = 0, avg = 0;   // 총점과 평균 점수 변수 생성

// 총점 구하기
for (i=0; i<grade.length; i++){
    sum += grade[i];
}

// 평균 구하기
    avg = sum / grade.length;

// arr의 값을 소수점 둘째 자리까리로 제한한다.
avg = avg.toFixed(2);
console.log("총점: " + sum + "점, 평균점수:" + avg + "점");