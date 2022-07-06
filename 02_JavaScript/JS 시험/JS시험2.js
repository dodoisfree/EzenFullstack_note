function random(n1, n2) {
    return parseInt(Math.random() * (n2 - n1 + 1)) + n1;
}

let number = random(100, 200);
let sum = 0;

for (i = 1; i < number; i++) {
    if (i % 3 == 0) {
        sum += i;
    }
}
console.log(sum);