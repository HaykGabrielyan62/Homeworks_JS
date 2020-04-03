let myArray = [1, '10','a', 'hi', 2, 3, 5];
let numberCount =0;
let stringCount =0;
for (i =0; i<=myArray.length; i++) {
  if (typeof myArray[i] === 'number'&&  Number.isInteger(myArray[i]))
  {
    numberCount++; 
  } 
  else if (typeof myArray[i] === 'string') 
  {
    stringCount++;
  }
}
console.log(`Numbers: ${numberCount}, Strings: ${stringCount}` );
