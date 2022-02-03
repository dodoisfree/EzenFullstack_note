var time = [7, 5, 5, 5, 5, 10, 7];
var money = 0;

for (let i = 0; i < time.length; i++) {
    if (i < 4) {
        money += time[i] * 4500;
    } else {
        money += time[i] * 5200;
    }
}
console.log("1주일간의 전체 급여: " + money + "원");