let sum = 0;
for (let i = 1; i <= 20; i++) {
    // if (i % 2 == 0 || i % 3 == 0)
    if (i % (2 * 3) == 0) {
        sum += i;
        console.log(i);
    }
}
console.log(sum);