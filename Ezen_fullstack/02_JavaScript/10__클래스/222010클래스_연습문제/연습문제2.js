class Account {

    constructor(owner, balance) {
        this._owner = owner;
        this._balance = balance;
    }

    get owner() {
        return this._owner;
    }
    set owner(value){
        this._owner = value;
    }
    get balance() {
        return this._balance;
    }
    set balance(value){
        this._balance = value;
    }

    dosposit(amount) {
        this._balance += amount;
    }

    withdraw(amount) {
        if (this.balance < amount) {
            // 인출 상한 금액은 잔액까지로 하며, 이 경우 이러한 상황을 출력
            console.log("잔액이 부족합니다.");
            return;
        }
        this.balance -= amount;
        return amount;
    }
}

const acc = new Account("Hello", 15000);
console.log("%s의 잔액은 %d원", acc.owner, acc.balance);

// 저축
// 잔액 20000원
acc.dosposit(5000);
console.log("%s의 잔액은 %d원", acc.owner, acc.balance);

// 잔액 5000원
acc.withdraw(15000);
console.log("%s의 잔액은 %d원", acc.owner, acc.balance);

// 잔액 10000원
acc.dosposit(5000);
console.log("%s의 잔액은 %d원", acc.owner, acc.balance);

// 잔액부족합니다.
// 잔액은 10000원
acc.withdraw(15000);
console.log("%s의 잔액은 %d원", acc.owner, acc.balance);