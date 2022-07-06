const name = "노드";
const property = {id:'nodejs', type:'javascript'};
const say = function() {
	console.log("Hello World");
};

const home = {
	postcode: '12345',
	address: '서울시 강남구 역삼동',
	getAddress: function() {
		console.log(this.postcode + ' ' + this.address);
	}
};

// 여러 개의 기능을 내보낼 경우 default를 적용하지 않음.
// --> 내보내고자 하는 기능을 `{}`로 묶는다.
export {name, property, say, home};