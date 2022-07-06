function printStar(max) {
   for (let i = 0; i <= max; i++) {
      let str = "";

      for (let j = 0; j < max - i; j++) {
         str += "*";
      }
      console.log(str);
   }
}

printStar(5);