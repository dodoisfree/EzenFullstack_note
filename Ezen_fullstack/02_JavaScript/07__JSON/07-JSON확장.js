// 1) 존재하지 않는 key를 사용하는 경우
const foo = {
    name: "자바스크립트",
    age: 19
};

// 존재하지 않는 값에 대한 출력 --> undefined
console.log(foo.email);

// 존재하지 않는 값을 활용한 연산 (age를 aga로 오타가 났다고 가정)
// --> undefined + 1 --> 숫자가 아닌 결과값이 되므로 Not A Number (NaN)이 출력됨.
const nextAge = foo.aga + 1;
console.log(nextAge);

// 2) 존재하지 않는 key에 대한 대입
foo.email = "hello@world.com";
console.log(foo);

// 3) 빈 객체 확장
const myJson = {}; // 빈 객체
console.log(myJson);

for (let i=0; i<10; i++) {
    const key = "value" + i;
    myJson[key] = i * 100;
}
console.log(myJson);