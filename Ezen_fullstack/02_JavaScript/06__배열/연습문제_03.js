var time = [7, 5, 5, 5, 5, 10, 7];
var money = 0;

for (let i = 0; i < time.length; i++) {
    if (time[i] < 5) {
        time[i] = time[i] * 4500;
    } else {
        time[i] = time[i] * 4850;
    }
    money += time[i];
}
console.log("1주일간의 전체 급여: " + money + "원");

// 모르겠어서 강제로 값을 맞췄습니다.