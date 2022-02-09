// 파라미터를 멤버변수에 복사하는 생성자
const User2 = function(id, email) {
    this._id = id;
    this._email = email;
};

const foo = new User2("Hello", "hello@javascript.com");
const bar = new User2("world", "world@javascript.com");

console.log(foo);
console.log(bar);