function spinWords(str) {
  let newWords = str.split(" ").map((word) => {
    return word.length >= 5 ? word.split("").reverse().join("") : word;
  });
  return newWords.join(" ");
}

console.log(spinWords("this is cool"));
