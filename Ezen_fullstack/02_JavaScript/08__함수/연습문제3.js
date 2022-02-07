function myGame(n) {

    // 박수를 총 몇번 쳤는지에 대한 합계값
    let count = 0;

    for (let i = 1; i <= n; i++) {

        // 현재 숫자(i)를 문자열로 변환함. 33--> "33"
        // --> 문자열은 그 자체가 배열이므로 각 자리의 숫자를 의미하는 글자를 원소로 갖는 배열이 된다고 볼 수 있다.
        const str = i + "" // -> "숫자(i)"
        //onsole.group(i);

        let say = "";   // 출력할 문자열(숫자인지 박수소리인지..)

        let clap = 0;   // 이번 턴에 박수를 몇번 치는지 카운트하는 변수

        // 숫자를 문자열로 변환하여 각 글자수만큼 반복
        for (let j of str) {
            //console.log(j);

            // 각 글자가 3,6,9중의 하나라면?
            if (j == "3" || j == "6" || j == "9") {
                say += "짝";
                clap++;
            }
        }
        console.groupEnd();

        if (clap == 0) {
            console.log(i);
        } else {
            console.log("%s (%d) --> %d번", say, i, clap);
            count += clap;
        }
    }
    console.log(); // 빈줄
    console.log("박수를 총 %d번 쳤습니다.", count);
}

myGame(35);