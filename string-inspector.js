let char = "Nigeria";
const wordLength = char.length;
const firstChar = char[0];
const lastChar = char[wordLength - 1];
const reversedWord = char.split("").reverse().join("");

console.log(
  `Character: ${char} \nLenght: ${wordLength} \nFirst Character: ${firstChar} \nLast Character: ${lastChar} \nReversed Word: ${reversedWord}`,
);
