const totalBill = 15000;
const numberOfPeople = 4;
const tipPercent = 10;

const tipAmount = (totalBill * tipPercent) / 100;
const totalBillWithtip = totalBill + tipAmount;
const amountPerPerson = totalBillWithtip / numberOfPeople;

console.log(
  `Tip Amount ${tipAmount} \nTotal With Tip ${totalBillWithtip} \nEach Person pays ${amountPerPerson}`,
);
