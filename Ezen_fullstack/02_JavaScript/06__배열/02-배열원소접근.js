// 인덱스 번호를 활용한 개별 원소 접근
let myArr1 = [1, 3.14, true, "hello"];

console.log("[0]=%d, [1]=%d, [2]=%d, [3]=%d", myArr1[0], myArr1[1], myArr1[2], myArr1[3]);


// 배열의 각 원소를 새로운 변수 a,b,c에 나누어서 저장하기
let myArr2 = [100,200,300];
const [a, b, c] = myArr2;
console.log("a=%d, b=%d, c=%d, d=%d", a, b, c);