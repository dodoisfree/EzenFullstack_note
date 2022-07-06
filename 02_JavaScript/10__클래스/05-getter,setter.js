class UserClass {
    constructor() {
        this._userName = null;
        this._email = null;
    }


    // 멤버변수 _userName에 값을 할당하기 위한 setter 함수
    set userName(value) {
        if (!value) {
            console.log("userName을 입력하세요.");
            return;
        }
        this._userName = value;
    }

    // 멤버변수 _userName에 값을 반환하기 위한 getter 함수
    get userName() {
        return this._userName;
    }


    // 멤버변수 _email에 값을 할당하기 위한 setter 함수
    set email(value) {
        if (!value) {
            console.log("email을 입력하세요.");
            return;
        }
        this._email = value;
    }

    // 멤버변수 _email에 값을 반환하기 위한 getter 함수
    get email() {
        return this._email;
    }

    // 일반적인 기능을 수행하기 위한 메서드
    login() {
        if(!this.userName || !this._email) {
            console.log("userName이나 email을 확인하세요.");
            return;
        }
        console.log("로그인 되었습니다. >> userName=" + this.userName + ", email=" + this.email);
    }
}

const user = new UserClass();
user.login();

// setter를 통한 값의 간접 할당
user.userName = "";
user.email = "";

user.userName = "helloworld";
user.email = "hello@world.com";
user.login();