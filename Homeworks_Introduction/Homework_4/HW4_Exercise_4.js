let myArray = [1,4,-43,12,];
let maxNumber = 0;
let SecondMaxNumber = 0;
for (i =0; i < myArray.length; i++) {
  if (myArray[i] > maxNumber) {
   maxNumber = myArray[i];
 }
}
myArray.splice(myArray.indexOf(maxNumber),1,-Infinity);
let myNewArray = myArray;
for (i =0; i < myNewArray.length; i++) {
  if (myArray[i] > SecondMaxNumber) {
   SecondMaxNumber = myArray[i];
 }
}
console.log(myNewArray.indexOf(SecondMaxNumber));



