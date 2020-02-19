let myNumber = 15896978;
let myString = myNumber.toString();
let maxNumber = 0;
let minNumber = +Infinity;
for (i =0; i < myString.length; i++) {
   if (myString[i] > maxNumber) {
   maxNumber = myString[i];
 }
   if (myString[i] < minNumber) {
   minNumber = myString[i];
 }
}
console.log(maxNumber-minNumber);
