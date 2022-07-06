function solution(k, n, m) {
    let money = k * n - m;
    if (money > 0) {
        console.log("동수가 부모님께 받아야 하는 돈은 %d원입니다.", money);
    } else {
        console.log("동수가 부모님께 받아야 하는 돈은 %d원입니다.", 0);
    }
}

solution(30, 4, 100);
solution(250, 2, 140);
solution(20, 6, 120);
solution(20, 10, 320);



