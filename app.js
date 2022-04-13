function romanize(num) {
  let romanized = "";
  let numeralsDict = {
    1: "I",
    5: "V",
    10: "X",
    50: "L",
    100: "C",
    500: "D",
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

console.log(romanize(3333));
