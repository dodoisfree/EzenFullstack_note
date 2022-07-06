function User4() {
    // 멤버변수 정의하기
    // 일반적으로 멤버변수는 일반 변수와 구분하기 위해 언더바로 시작하는 이름을 갖는다,
    this._id = null;
    this._email = null;
}

Object.defineProperty(User4.prototype, 'id', {
    get : function() {
        console.log("id에 대한 getter 호출됨");
        // 멤버변수의 값을 반환하는 기능
        // 반환 전에 필요하다면 멤버변수의 값을 가공하여 반환할 수도 있다.
        return this._id;
    },
    set: function(param) {
        console.log("id에 대한 setter 호출됨");
        // 파라미터의 값을 멤버변수에 복사하는 기능
        // 필요하다면 파라미터값을 가공하여 멤버변수에 복사할 수 있다.
        this._id = param;
    }
});

Object.defineProperty(User4.prototype, 'email', {
    get : function() {
        console.log("email에 대한 getter 호출됨");
        return this._email;
    },
    set: function(param) {
        console.log("email에 대한 setter 호출됨");
        this._email = param;
    }
});

// 객체 생성하기
const friend = new User4();
friend.id = "친구";
console.log(friend.id);

friend.email = "fri@hanmail.net";
console.log(friend.email);