// 1) and --> 전체가 참인 경우만 결과가 참.
console.group("1) and");
    console.log(true && true);  //true
    console.log(true && false);  //false
    console.log(false && true);  //false
    console.log(false && false);  //false
console.groupEnd();

// 2) and 연산 여러 개 사용
console.group("2) and연산 여러 개 사용");
    console.log(true && true && true);  // true
    console.log(true && true && false);  // false
    console.log(false && false && true);  // false
    console.log(false && true && true);  // false
console.groupEnd();

// 3) or --> 하나라도 참이 포함되어 있다면 결과는 참
console.group("3) or");
    console.log(true || true);  // true
    console.log(true || false);  // true
    console.log(false || true);  // true
    console.log(false || false);  // false
console.groupEnd();

// 4) or 연산 여러 개 사용
console.group("4) or 연산 여러 개 사용");
    console.log(true || true || true);  // true
    console.log(true || true || false);  // true
    console.log(false || false || true);  // true
    console.log(true || true || false);  // true
console.groupEnd();

// 5) 복합사용, and가 or 보다 항상 우선한다.
console.group("5) 복합사용");
    console.log(true && true || true);  // t || t -> t
    console.log(true && true || false);  // t || f -> t
    console.log(false && false || true);  // f || t -> t
    console.log(false && true || true);  // f || t -> t

    console.log(true || true && true);  // t || t -> t
    console.log(true || true && false);  // t || f -> t
    console.log(false || false && true);  // f || f -> f
    console.log(false || true && true);  // f || t -> t
console.groupEnd();

// 6) not
console.group("6) not");
    let success = true;
    let fail = !success;    // not true이므로 false
    console.log(fail);

    let k = 1;
    console.log(!k);        // 숫자1은 true에 대응되므로 not true -> false

    let l = 0;
    console.log(!l);        // 숫자0은 false에 대응되므로 not false -> true

    let str1 = "Hello";     // 내용이 있는 문장은 true. not true -> false
    console.log(!str1);

    let str2 = "";          // 내용이 없는 문장은 false. not false -> true
    console.log(!str2);
console.groupEnd();
