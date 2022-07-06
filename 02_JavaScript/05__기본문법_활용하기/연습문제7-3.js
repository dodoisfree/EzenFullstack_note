//const number = 1;     // 3, 5, 7, 9
const number = 2;       // 2, 4, 6, 8

for (let i=4-number; i<10; i+=2) {
    for (let j=1; j<10; j++) {
        console.log("%d x %d = %d", i, j, i*j);
    }
}