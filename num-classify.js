/*
Declare a variable `num = 55`. Write conditions to print:

- `"Low"` if the number is between 1 and 33 (inclusive)
- `"Medium"` if the number is between 34 and 66 (inclusive)
- `"High"` if the number is between 67 and 100 (inclusive)
- `"Out of range"` if the number is below 1 or above 100

Test with: `10`, `50`, `85`, `0`, and `100`.
*/
let num = 150;
if (num >= 1 && num <= 33) {
  console.log("Low");
} else if (num >= 34 && num <= 66) {
  console.log("Medium");
} else if (num >= 67 && num <= 100) {
  console.log("High");
} else {
  console.log("Out of range");
}
