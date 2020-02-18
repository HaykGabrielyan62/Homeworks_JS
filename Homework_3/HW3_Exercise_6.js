let myArray = [3, 7, 12, 5, 20, 0,10,5 ] 
let newArray = [];
for (i =0; i < myArray.length; i++) {
   newArray[i] = myArray[i] * myArray[i+1];
 }
newArray.pop();
console.log(newArray);


