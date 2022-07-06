// 멤버 변수만 정의한 클래스
// 생성자 함수 안에서 this키워드를 통해 객체 안에 탑제될 변수들을 초기화 한다.

class MemberClass {
    // 생성자 함수
    // 생성자의 이름은 고정, 이름앞에 예약어 없음, 필요 시 파라미터 정의는 가능. 리턴은 불가능
    constructor() {
        this.userName = null;
        this.email = null;
    }
}

// 클래스를 활용한 객체 생성
const m1 = new MemberClass();
console.log(m1);
console.log(m1.userName);
console.log(m1.email);

const m2 = new MemberClass();
console.log(m2);
console.log(m2.userName);
console.log(m2.email);

// 객체의 특성 -> 같은 구조를 갖지만 저장되는 내용은 개별적ㅇ다.
m1.userName = "민혁";
m1.email = "mh@gmail.com";

m2.userName = "철수";
m2.email = "cs@gmail.com";

console.log(m1);
console.log(m1.userName);
console.log(m1.email);

console.log(m2);
console.log(m2.userName);
console.log(m2.email);