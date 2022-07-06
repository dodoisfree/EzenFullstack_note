/* 피보나치수열을 10번째 항목까지 출력하시오.

   0 1 1 2 3 5 8 13 21 34 55...
   f(0) = 0
   f(1) = 1
   f(2) = f(1) * f(0) = 1
   f(3) = f(2) * f(1) = 2
   f(4) = f(3) * f(2) = 3
   f(5) = f(4) * f(3) = 5
*/

function fibonacci(n) {
    if (n < 2) {
        return n;
    } else {
        return fibonacci(n-2) + fibonacci(n-1);
    }
}

const f = fibonacci(10);
console.log("10번째 피보나치수는 %d이다.",f);