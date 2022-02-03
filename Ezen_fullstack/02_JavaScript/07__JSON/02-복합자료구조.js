// 다양한 데이터 타입을 포함하는 복합 자료구조
const company = {
    name : "(주)굿모닝컴페니",
    since : 2013,
    department : ["기획팀", "디자인팀", "개발팀"]
};

// JSON 데이터에 접근하는 방법(점으로 연결 혹은 배열처럼 접근)
// 점을 통한 접근을 권장.
console.log(company.name);              // 점으로 연결
console.log(company['since']);          // 배열처럼 연결
console.log(company.department[0]);     // 점으로 연결
console.log(company.department[1]);     // 점으로 연결
console.log(company['department'][2]); // 배열처럼 연결