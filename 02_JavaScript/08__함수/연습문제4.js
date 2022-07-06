function printStar(max, current = 1) {

    // max는
    if (max < current) {
        return;
    } else {
        let star = "";

        for (let j = 0; j < current; j++) {
            star += "*";
        }
        console.log(star);
        printStar(max, current + 1);
    }
}
printStar(5);