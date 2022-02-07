const result = {"A": 0, "B": 0, "AB":0, "O": 0};

blood = ['A', 'A', 'A', 'O', 'B', 'B', 'O', 'AB', 'AB', 'O'];

for (const b of blood) {
    result[b]++;
}
console.log(result);
