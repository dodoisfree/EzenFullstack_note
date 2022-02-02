var price = [38000, 20000, 17900, 17900];
var qty = [6, 4, 3, 5];
var TopPrice = price[0]* qty[0];

for (let i=0; i<price.length; i++) {
    for (let j=0; j<qty.length; j++) {
        if (TopPrice < price[i] * qty[j] ) {
            TopPrice = price[i] * qty[j];
        }
    }
}

console.log("가장 높은 상품금액: %d원", TopPrice);