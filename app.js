function romanize(num) {
  let romanized = "";
  let numeralsDict = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M",
  };

  Object.keys(numeralsDict)
    .reverse()
    .forEach((key) => {
      while (num >= key) {
        romanized += numeralsDict[key];
        num = num - key;
      }
    });

  return romanized;
}

console.log(romanize(1990));
