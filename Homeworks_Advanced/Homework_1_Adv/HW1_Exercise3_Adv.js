function numbersStrings(Arr){
let numberCount =0;
let stringCount =0;
for (i =0; i<=Arr.length; i++) {
  if (typeof Arr[i] === 'number')
  {
    numberCount++; 
  } 
  else if (typeof Arr[i] === 'string') 
  {
    stringCount++;
  }
}
console.log(`Numbers: ${numberCount} \nStrings: ${stringCount}` );
}
let myArray = [1, '10','a', 'hi', 2, 3, 5];
numbersStrings(myArray);