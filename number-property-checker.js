const n = -3;
if (n % 2 === 0) {
  console.log(`${n} is an even number.`);
} else {
  console.log(`${n} is an odd number.`);
}

if (n > 0) {
  console.log(`${n} is a positive number.`);
} else if (n < 0) {
  console.log(`${n} is a negative number.`);
} else {
  console.log(`${n} is zero.`);
}

if (n % 4 === 0) {
  console.log(`${n} is Divisible by 4.`);
} else {
  console.log(`${n} is not Divisible by 4.`);
}

if (Math.sqrt(n) % 1 === 0) {
  console.log(`${n} is a perfect square.`);
} else {
  console.log(`${n} is not a perfect square.`);
}
