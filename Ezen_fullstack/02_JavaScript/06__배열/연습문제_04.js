var price = [38000, 20000, 17900, 17900];
var qty = [6, 4, 3, 5];
var money = 0;

for (let i=0; i<price.length; i++) {
        money += (price[i]*qty[i]);
}

console.log("전체 결제 금액: %d 원", money);