let myArray = [1,4,-43,12];
let maxNumber = 0;
let minNumber = +Infinity;

for (i =0; i < myArray.length; i++) {
  if (myArray[i] > maxNumber) {
   maxNumber = myArray[i];
 }
   if (myArray[i] < minNumber) {
   minNumber = myArray[i];
 }
}
  if (myArray.includes(maxNumber-minNumber)) {
    console.log('true')
  } else {
    console.log('false')
  }
  
 
