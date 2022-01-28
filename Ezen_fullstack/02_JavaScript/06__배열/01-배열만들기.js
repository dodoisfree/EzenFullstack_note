// 배열을 저장할 빈 변수 선언
let myArr1;

// 배열의 할당
myArr1 = [1, 3.14, true, "hello"];
console.log(myArr1);

// 선언과 할당의 통합
let myArr2 = [1, 3.14, true, "hello"];
console.log(myArr2);

const len = myArr2.length;
console.log("배열의 원소 수 = %d", len);

// 5라는 값을 원소로 갖는, 한 칸으로 구성된 배열 만들기
let myArr3 = [5];
console.log(myArr3);

// 값이 존재하지 않는 5개의 빈 칸을 갖는 배열 만들기
let myArr4 = new Array(5);
console.log(myArr4);