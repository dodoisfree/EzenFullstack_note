"use strict"; // 엄격모드 적용 --> ES6 호환기능만 사용하도록 명시

// 메세지 그룹핑
console.group("MyMessage1");
    console.log("안녕하세요. Javascript1");
    console.log("안녕하세요. Javascript2");
    console.log("안녕하세요. Javascript3");
console.groupEnd();
    console.group("MyMessage2");
        console.log("안녕하세요. Javascript4");
        console.log("안녕하세요. Javascript5");
    console.groupEnd();
        console.group("MyMessage2-1");
            console.log("안녕하세요. Javascript6");
        console.groupEnd();
