let myNumber = 12331;
let myString = myNumber.toString()
let sum = 0;
let prod = 1;
if (myNumber==0){console.log('Cannot calculate')} else {
for (i = 0; i<myString.length; i++) {
  sum += Number(myString[i]);
  prod *= Number(myString[i]);
}
}

  if (prod%sum == 0) {
  console.log(`Quotient is ${prod/sum}`)
} else if (prod%sum !== 0) {
  console.log(`Reminder is ${prod%sum}`)
}

