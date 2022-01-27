let y = 0;

while (true) {
    y++;

    if (y % 2 == 0) {
        // 반복문의 흐름이 조건식으로 넘어가도록 제어
        continue;
    }

    // 반복이 종료될 조건을 반드시 지정
    if (y > 10) {
        //반복의 수행을 강제로 종료하도록 제어
        break;
    }

    console.log("Hello World ::: %d", y);
}