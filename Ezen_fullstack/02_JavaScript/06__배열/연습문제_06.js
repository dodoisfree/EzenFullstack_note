var price = [38000, 20000, 17900, 17900];
var qty = [6, 4, 3, 5];
var num = 0;

for (let i=0; i<price.length; i++) {
    for (let j=0; j<qty.length; j++) {
        if (price[i]*qty[j] > 80000) {
            num = 3;
        }
    }
}

console.log("무료배송 항목: %d건", num);
// 모르겠소요