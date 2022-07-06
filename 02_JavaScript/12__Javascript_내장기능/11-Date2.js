// 날짜계산

// timestamp 확인하기
// timestamp -> 1970년 1월 1일 자정부터 현재까지 흐른 시간을 초단위로 환산한 값.
// getTime()함수는 timestamp를 밀리세컨드단위로 환산하여 반환한다.
const date = new Date();
const ts1 = date.getTime();
console.log(ts1);

// 몇일이 지났는지 계산하기
const prevDay = new Date(date.getFullYear(), 0, 1);
const ts2 = prevDay.getTime();
const tmp1 = ts1 - ts2;
// 계산 결과를 원하는 단위로 환산 --> 24시간 * 60분 * 60초 * 1000
// 과거의 시점으로부터 지나온 시간을 계산할 경우 소수점을 내린다.
const day1 = Math.floor(tmp1 / (24 * 60 * 60 * 1000));
console.log("올해는 " + day1 + "일 지났습니다.")

// 몇일이 남았는지 계산하기
const nextDay = new Date(date.getFullYear(), 11, 31);
const ts3 = nextDay.getTime();
const tmp2 = ts3 - ts1;
// 미래의 시점으로 남은 시간을 계산할 경우 소수점을 올린다.
const day2 = Math.ceil(tmp2 / (24 * 60 * 60 * 1000));
console.log("올해는 " + day2 + "일 남았습니다.");

// 지금으로부터 30일 후
// 단위가 수용할 수 있는 값이 초과될 경우 자동으로 올림 처리한다.
const a = date.getDate() + 30;
date.setDate(a);
console.log(date.toLocaleString('ko-KR'));

// 30일이 지난 후에서 다시 100일 전을 계산
const b = date.getDate() - 100;
date.setDate(b);
console.log(date.toLocaleString('ko-KR'));

// 응용
// 오늘 날짜 객체
const today = new Date();
// 이번달의 1일로 이동
today.setDate(1);
// 이번달 1일에 대한 요일 인덱스
const startDay = today.getDay();
console.log(startDay);

// 이번달의 마지막날은 몇일인지 구함. -> 다음달의 0번째 날짜를 구함.
const m = today.getMonth();
today.setMonth(m + 1);
today.setDate(0);
const lastDate = today.getDate();
console.log(lastDate);

// 6행 7열의 빈 배열 만들기
var data = new Array(6);
for (let i = 0; i < data.length; i++) {
    data[i] = new Array(7);
}

// 1씩 증가할 값
let counter = 1;

for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].length; j++) {
        if (i == 0 && j < startDay || counter > lastDate) {
            data[i][j] = 0;
        } else {
            data[i][j] = counter++;
        }
    }
}

for (let i = 0; i < data.length; i++) {
    let str = '';
    for (let j = 0; j < data[i].length; j++) {
        str += data[i][j] == 0 ? " \t" : (data[i][j] + "\t");
    }
    console.log(str);
}