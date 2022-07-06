// 이중 반복문 구구단

for (let i=2; i<10; i++) {  // 2~9

    console.group("%d단", i);

    for (let j=1; j<10; j++) {  // 1~9
        console.log("%d x %d = %d", i, j, i*j);
    }

    console.groupEnd();
}