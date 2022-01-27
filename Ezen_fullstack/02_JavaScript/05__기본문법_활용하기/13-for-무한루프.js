for (let i=0; true; i++) {
    if (i % 2 == 0) {
        continue;
    }

    if (i > 10) {
        break;
    }

    console.log("Hello World ::: %d", i);
}