/*
## Exercise 6: Repeat a Word

Declare a variable `word = "Hello"` and `times = 5`. Use a `for` loop to print the word that many times, each on its own line. Do not use `.repeat()`.
*/

let word = "hello";
let words = "";
let times = 5;
for (let i = 1; i <= times; i++) {
  words += `${word} `;
  console.log(words);
}
