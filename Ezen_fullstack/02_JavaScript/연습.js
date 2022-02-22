const arr = [1, 2, 3, 4, 5];
arr.push(20);
arr.unshift(15);
arr.pop();
arr.splice(0,5);
console.log(arr);


const nameInfo = {
    firstName: "이름",
    lastName: "성",
    information: function() {
        return `사람의 이름은 ${this.lastName}과 ${this.firstName}으로 이루어져있다.`;
    }
};
nameInfo.information();


const obj = {abc: 123}; console.log(obj.xyz);


let sampleValue6
console.log(typeof sampleValue6);


