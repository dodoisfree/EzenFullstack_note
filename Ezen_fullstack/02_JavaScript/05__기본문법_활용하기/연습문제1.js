// 풀이 1

for (let i=9; i >= -1; i--) { // -1 이라고 해야 0까지 라는 의미
    if(i % 2 == 1){
        console.log(i);
    }
} 

// 풀이 2
for (let i=9; i > -1; i-=2) {
    console.log(i);
}