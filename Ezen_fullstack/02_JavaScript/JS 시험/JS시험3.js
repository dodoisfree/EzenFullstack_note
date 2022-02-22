function solution(x) {
    let arr = String(x).split("");
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += Number(arr[i])
    }
    return (x % sum == 0) ? true : false;
}

console.log(solution(10));
console.log(solution(12));
console.log(solution(11));
console.log(solution(13));