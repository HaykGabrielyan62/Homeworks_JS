function findLongString(theString){
let myArray = theString.split(/ |-|,/); //not sure if it is correct to use this kind of split.
let newArray = [];
let maxLength = 0;
for (i =0; i < myArray.length; i++) {
  newArray[i] = myArray[i].length;
   if (newArray[i] >= maxLength) {
   maxLength = newArray[i];
 }
}
console.log(maxLength);
}
let myStr = 'A revolution without dancing is a revolution not worth having.'
findLongString(myStr)