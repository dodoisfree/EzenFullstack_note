// 풀이 1

let i = 9;

while (i > -1) {
    if (i % 2 == 1) {
        console.log(i);
    }
    i--;
}

// 풀이 2

let j = 9;

while (j > -1) {
    console.log(j);
    j -= 2; // if문대신 -1에서 2씩 홀수 증가
}