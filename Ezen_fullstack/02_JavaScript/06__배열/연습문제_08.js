let arr = [5, 3, 2, 8, 9];
console.log('before --> ' + arr);

// for (let i = 0; i < parseInt(arr.length / 2); i++)

// 역순 배치공식
// 1) 배열길이 /2 만큼만 반복
// 2) i번쨰와 길이-i-1 번째를 맞교환
for (let i = 0; i < arr.length / 2; i++) {
    const tmp = arr[i];
    arr[i] = arr[arr.length - i - 1];
    arr[arr.length - i - 1] = tmp;
}

console.log('after --> ' + arr);