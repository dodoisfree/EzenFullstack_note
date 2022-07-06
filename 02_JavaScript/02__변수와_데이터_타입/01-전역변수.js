"use strict";

/** 1) 변수의 선언과 할당 */
// 변수의 선언
var myNumber1; // 할당

myNumber1 = 100;
console.log(myNumber1);

/** 2) 변수의 선언과 할당 통합 */
var myNumber2 = 123;
console.log(myNumber2);

/** 3) 변수값 변경하기 */
// 한번 만들어진 변수는 다른 값으로 교체 가능
myNumber2 = 456;
console.log(myNumber2);

/** 4) 변수의 재선언 */
// 원칙적으로 한번 선언한 변수는 재선언이 불가능함
// JS는 전역변수는 재선언이 가능.
// 이는 일반적인 프로그래밍 언어의 규칙에 위배되므로 전역변수를 위한 'var' 키워드의 사용은 권장되지 않는다.
var myNumber3 = 300;
console.log(myNumber3);

// 동일한 변수 재선언
var myNumber3 = 789;
console.log(myNumber3);