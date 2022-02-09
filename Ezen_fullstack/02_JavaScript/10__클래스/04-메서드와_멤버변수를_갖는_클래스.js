class HelloWorld {
    // 생성자 함수
    constructor() {
        //생성자의 역할은 멤버변수를 정의
        // --> 선언만 하고 추가 할당하기 위해 null로 초기화한다.
        this.message = null;
    }

    sayHello() {
        console.log(this.message);
    }
    setEng() {
        this.message = "Hello Javascript";
    }

    setKor() {
        this.message = "안녕하세요. 자바스크립트.";
    }
}

const hello = new HelloWorld();

hello.setEng();
hello.sayHello();

hello.setKor();
hello.sayHello();