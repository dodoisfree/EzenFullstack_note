// 역순 별찍기

for (let i=0; i<7; i++) {   // 바깥의 반복문이 '행'을 담당 --> 7개의 행이 생성된다.

    let str = '';

    for (let j=0; j<7-i; j++) { // 안쪽의 반복문이 "열"을 담당
        str += "*";
    }

    console.log(str);
}