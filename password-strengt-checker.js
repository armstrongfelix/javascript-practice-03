/*
## Exercise 17: Password Strength Checker

Declare a variable `password = "hello"`. Use `.length` and conditions to print:

- `"Weak"` if the password has fewer than 6 characters
- `"Moderate"` if it has 6 to 9 characters
- `"Strong"` if it has 10 or more characters
*/

let password = "hello";
if (password.length < 6) {
  console.log("Weak");
} else if (password.length >= 6 && password.length <= 9) {
  console.log("Moderate");
} else if (password.length >= 10) {
  console.log("Strong");
} else {
  console.log(`Too weak, not accepted`);
}
