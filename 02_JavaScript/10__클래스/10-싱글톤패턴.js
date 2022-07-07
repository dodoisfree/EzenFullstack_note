class Calc {
  static current = null;

  static getInstance() {
    if (Calc.current === null) {
      Calc.current = new Calc();
    }

    return Calc.current;
  }

  plus(x, y) {
    return x+y;
  }
  
  minus(x, y) {
    return x-y;
  }

  times(x, y) {
    return x*y;
  }

  div(x, y) {
    return x/y;
  }
}

c1 = Calc.getInstance();
console.log(c1.plus(10, 20));

c2 = Calc.getInstance();
console.log(c2.minus(10, 20));

console.log(Calc.getInstance().times(10, 20));
console.log(Calc.getInstance().div(10, 20));