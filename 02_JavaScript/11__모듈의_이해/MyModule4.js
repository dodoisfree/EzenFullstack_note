class HelloWorld {
    constructor() {
        console.log("---- HelloWorld의 객체가 생성되었습니다. ----");
    }

    say() {
        console.log("Hello World");
    }
}

// 클래스에 대한 객체를 모듈에 추가
module.exports = new HelloWorld();