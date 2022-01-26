const point = 72;

// 순차적으로 조건을 판별하면서 가장 처음 만나는 '참'인 조건의 블록을 수행하고 빠져나간다.
if (point > 90) {
    console.log("A 학점");
} else if (point > 80) { 
    console.log("B 학점");
} else if (point > 70) { 
    console.log("C 학점");
} else if (point > 60) { 
    console.log("D 학점");
} else if (point > 50) { 
    console.log("F 학점");
}