for (let i = 0; i < 4; i++) {

    // 한 줄에 출력할 문자열 변수
    let str = "";

    for (let j = 0; j < 4; j++) {
        str += i + j;

        if (j + 1 < 4) {
            str += " ";
        }
    }

    console.log(str);
}