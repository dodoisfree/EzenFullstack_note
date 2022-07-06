var price = [38000, 20000, 17900, 17900];   // 단가 배열
var qty = [6, 4, 3, 5]; // 주문수량 배열
var count = 0;  // 수량을 저장할 변수 선언 --> 덧셈(합,카운트 등) 계산에서는 0으로 초기화

for (let i=0; i<price.length; i++) {
    // i번째에 대한 총 금액을 구한다.
    const sum = price[i] * qty[i];

    //원하는 조건이 충족될 때 카운트 1증가
    if (sum >= 80000) {
        count++;
    }
}
console.log("무료배송 항목: %d건", count);