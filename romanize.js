function romanize(num) {
  let romanized = "";
  let numeralsDict = {
    1000: "M",
    500: "D",
    100: "C",
    50: "L",
    10: "X",
    5: "V",
    1: "I",
  };

  Object.keys(numeralsDict).forEach((key) => {
    while (num >= key) {
      romanized += numeralsDict[key];
      num -= key;
    }
  });

  return romanized;
}
