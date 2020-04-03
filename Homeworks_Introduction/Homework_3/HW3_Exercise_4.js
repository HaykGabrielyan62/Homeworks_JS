let myArray = ['a','anymore', 'raven', 'me', 'communicate'] 
let newArray = [];
let maxArray = 0;
let minArray = +Infinity;

for (i =0; i < myArray.length; i++) {
  newArray[i] = myArray[i].length;
   if (newArray[i] > maxArray) {
   maxArray = newArray[i];
 }
   if (newArray[i] < minArray) {
   minArray = newArray[i];
 }
}
console.log(minArray+maxArray);
