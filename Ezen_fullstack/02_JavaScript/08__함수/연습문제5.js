function printRevStar(max, current = 1) {

    // max는
    if (max < current) {
        return;
    } else {
        let star = "";

        for (let j = 0; j <max-current+1; j++) {
            star += "*";
        }
        console.log(star);
        printRevStar(max, current + 1);
    }
}
printRevStar(5);