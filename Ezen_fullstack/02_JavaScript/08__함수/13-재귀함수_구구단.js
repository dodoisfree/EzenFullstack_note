function gugu(level, depth=1){
    if (depth > 9) {
        return;
    } else {
        console.log(level + " x " + depth + " = " + (level*depth));
        gugu(level, depth+1);
    }
}

gugu(5);