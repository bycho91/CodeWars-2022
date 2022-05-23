function setBase(x) {
  return function (y) {
    return x + y;
  };
}

const addFive = setBase(5);

const addTen = setBase(10);

console.log(addFive(3));

console.log(addTen(5));
