let unitsUsed = 120;
let totalBill = null;
for (i = 1; i <= unitsUsed; i++) {
  if (i >= 1 && i <= 50) {
    totalBill += 10;
  } else if (i >= 51 && i <= 100) {
    totalBill += 15;
  } else if (i >= 101) {
    totalBill += 20;
  }
}
console.log(`Units Used: ${unitsUsed} \nTotal Bill: ${totalBill}`);
