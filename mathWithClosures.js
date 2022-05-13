function mathematics() {
  let total = 0;

  function add(x) {
    total += x;
  }

  function subtract(x) {
    total -= x;
  }

  function multiply(x) {
    total *= x;
  }

  function divide(x) {
    total /= x;
  }

  function resetToZero() {
    total = 0;
  }

  function getTotal() {
    return total;
  }

  return {
    add,
    subtract,
    multiply,
    divide,
    resetToZero,
    getTotal,
  };
}

let m = mathematics();

m.add(5);
m.subtract(2);
m.multiply(3);
m.divide(3);
console.log(m.getTotal());
