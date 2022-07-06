// 값복사 --> 일반 변수끼리의 복사
let a = 100;
let b = a;
console.log("a=" + a + ", b=" + b); // a=100, b=100

// 일반 변수끼리 복사한 경우 원본이 변경되면 복사본에는 영향이 없다.
a++;
console.log("a=" + a + ", b=" + b); // a=101, b=100

// 참조복사(얕은 복사)
// 배열, JSON, 객체 끼리의 복사는 참조처리된다.
// 원본을 수정하면 복사본도 함께 수정된다. (반대의 경우도 마찬가지)
const user = {
    name: "Lee"
};

const member = user;
console.log(user);      // { name: 'Lee' }
console.log(member);    // { name: 'Lee' }

member.name = "Kim";
console.log(user);      // { name: 'Kim' }
console.log(member);    // { name: 'Kim' }

const d1 = [1, 2, 3];
const d2 = d1;
console.log(d1);
console.log(d2);

d1[0] += 10;
d1[1] += 10;
d1[2] += 10;
console.log(d1);
console.log(d2);


// 배열끼리의 값복사(깊은복사) 방법
const a1 = [1, 2, 3];

// 원본과 동일한 길이를 갖는 배열을 생성
const a2 = new Array(a1.length);

// 배열을 온전히 값복사하기 위해서는 원소끼리 개별복사 해야 함.
for (let i = 0; i<a1.length; i++) {
        a2[i] = a1[i];
}

// 배열객체가 갖는 메서드를 활용한 깊은 복사 방법
const a3 = a1.slice();

console.log(a1);    // [ 1, 2, 3 ]
console.log(a2);    // [ 1, 2, 3 ]
console.log(a3);    // [ 1, 2, 3 ]

a1[0] += 100;

console.log(a1);    // [ 101, 2, 3 ]
console.log(a2);    // [ 1, 2, 3 ]
console.log(a3);    // [ 1, 2, 3 ]

// JSON의 깊은 복사
const addr = {
    city: '서울',
    gu: '서초'
};

// 깊은 복사를 수행할 빈 JSON객체를 생성
const copy = {};

for (let key in addr) {
    copy[key] = addr[key];  // copy.city와 copy.gu와 동일한 처리
}

console.log(addr);  // { city: '서울', gu: '서초' }
console.log(copy);  // { city: '서울', gu: '서초' }

addr.gu = '강남';

console.log(addr);  // { city: '서울', gu: '강남' }
console.log(copy);  // { city: '서울', gu: '서초' }

// JS가 제공하는 기능 활용하기
const copy2 = {};

// addr을 copy2에 깊으 복사 수행하는 JS 내장기능
// 복사될 copy2가 비어있는 json일 경우 복사.
// copy2가 비어있지 않으면 누적
Object.assign(copy2, addr);
console.log(copy2);