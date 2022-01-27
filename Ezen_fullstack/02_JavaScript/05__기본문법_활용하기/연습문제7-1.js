// const number = 2;  // 2, 4, 6, 8
const number = 2;  // 3, 5, 7, 9

for (let i=2; i < 10; i++) {

    if (number == 1) {
        if (i % 2 != 0) {
            for (let j=1; j<10; j++) {
                console.log("%d x %d = %d", i, j, i*j);
            }
        }
    } else {
        if (i % 2 == 0) {
            for (let j=1; j<10; j++) {
                console.log("%d x %d = %d", i, j, i*j);
            }
        }
    }
}