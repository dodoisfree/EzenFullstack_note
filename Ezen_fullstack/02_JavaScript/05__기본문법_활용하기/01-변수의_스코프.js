// 예제 코드 중간중간 에러가 발생하는 코드가 포함되어 있음.
// 에러가 발생하면 그 이후의 코드는 실행하지 않으므로, 선택적으로 드래그 하여 실행 할 것.

// 1) var 중복 선언
// 조건문이 실행되지 않는 경우
if (false) {
    var num1 = 100;
    console.log("블록안: " + num1);
}
// if문의 실행 여부에 따라 num1이 선언되므로 실행되지 않은 if문 때문에, num1은 선언되지 못 함.
console.log("블록 밖: " + num1); // undefined 에러.

// 조건문이 실행 되는 경우
if (true) {
    var num2 = 100;
    console.log("블록안: " + num2);
}
console.log("블록밖: " + num2);


// 2) let 중복 선언
let num3 = 100
if (true) {
    //블록 밖에서 생성된 변수를 블록 안에서 사용가능
    let num4 = num3 + 100;
    console.log("블록안: " + num4);
}

// let으로 선언된 변수는 if문의 실행 여부와 상관없이 블록을 빠져나올 수 없다.
console.log("블록밖: " + num4); // error


// 3) for문의 초기식을 var로 선언한 경우
for (var i = 0; i < 10; i++) {
    console.log("반복문 안 ::: " + i);
}
console.log("반복문 밖 >>> " + i);


// 4) for문의 초기식을 let으로 선언한 경우
for (let j = 0; j < 10; j++) {
    console.log("반복문 안 ::: " + j);
}
console.log("반복문 밖 >>> " + j); // for문의 초기식도 {}에 속한것으로 보기 때문에 j값은 for 블록을 빠져나올 수 없다.


// 5) 선언되지 않은 변수의 경우
// let 키워드는 반드시 선언 -> 할당의 순서로만 사용 가능함.
x = 100; // 할당
let x; // 선언
console.log(x); // 할당 후 선언이라 에러

// var 키워드는 할당 후 선언이 가능함. (프로그램 규칙 대부분을 무시하는 근본 없는 키워드, 사용 미권장)
y = 200;
var y;
console.log(y); 
