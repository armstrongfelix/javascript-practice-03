let sum = null;

for (i = 1; i <= 50; i++) {
  if (i % 2 == 0) {
    sum += i;
  }
}

console.log(`The sum of even numbers from 1 to 50 is ${sum}.`);
