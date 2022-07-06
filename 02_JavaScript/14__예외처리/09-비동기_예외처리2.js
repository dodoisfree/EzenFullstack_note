/** 비동기 처리에 대한 예외 처리 (2) */
const data = [1, 2, 3];

// try~catch는 동기 방식으로 동작하므로 비동기 방식으로 동작하는 timer처리와 ajax에는 대응하지 못한다.
// 비동기 안에서 try~catch로 따로 예외처리를 해야함.
setTimeout(() => {
    try {
        console.log("배열탐색시작")
        for (let i = 0; i < 10; i++) {
            console.log(data[i].toFixed(2));
        }
    } catch (err) {
        console.log('에러발생(2)');
        console.error(err);
    }
    console.log('배열탐색종료');
}, 1000);

console.log("프로그램 종료");