let myString = '459687';
let L = myString.length;
let maxDigit = '';
let minDigit = '';
for (let i = 0; i< L; i++){
  const maxDigit = Math.max(myString[i]);
  return maxDigit;
}
for (let j = 0; j< L; j++){
  const minDigit = Math.min(myString[j]);
  return minDigit;
}
console.log (maxDigit - minDigit);