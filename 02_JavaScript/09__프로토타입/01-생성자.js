// 멤버변수를 갖는 생성자를 통해서 객체 만들기
function User() {
        // 멤버변수 정의하기
        // 일반적으로 멤버변수는 일반 변수와 구분하기 위해 언더바로 시작하는 이름을 갖는다.
        this._id = null;
        this._email = null;
}

// 생성자를 통한 객체 만들기
const foo = new User();
foo._id = "hello";
foo._email = "hello@javascript.com";
console.log(foo);

const bar = new User();
bar._id = "world";
bar._email = "world@javascript.com";
console.log(bar);