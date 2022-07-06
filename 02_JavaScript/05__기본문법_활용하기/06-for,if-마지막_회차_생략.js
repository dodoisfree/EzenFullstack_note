// 마지막 회차 생략

// 1) 조건식이 "변수" < 최대값" 인 경우의 조건 : 변수 + 1 < 최대값
// 2) 조건식이 "변수" <= 최대값" 인 경우의 조건 : 변수 < 최대값

console.group("변수 < 최대값");

for (let i=1; i<10; i++) {  // i는 1~9까지
    if (i + 1 < 10){
        console.log(i);
    }
}
console.groupEnd();


console.group("변수 <= 최대값")

for (let i=1; i<=9; i++) {  // i는 1~9까지
    if (i <9) {
        console.log(i);
    }
}
console.groupEnd();


// 1~9까지의 숫자 사이사이에 콤마를 넣어 한 문장으로 결합
console.group("글자 사이에 콤마(,)넣기");

let str = "";

for (let i=1; i<10; i++) {
    str += i;

    if (i+1 < 10) {
        str += ",";
    }
}

console.log(str)
console.groupEnd();