function removeVowels(str) {
  let vowels = /a|e|i|o|u/gi;

  let newWords = str.split(" ").map((word) => word.replace(vowels, ""));

  return newWords.join(" ");
}

console.log(removeVowels("I am a troll trying to ruin your life!"));
