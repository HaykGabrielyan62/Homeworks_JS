const myArray = [1,2,3,4,];
const myArrayCopy = [1,2,3,4,];
let padAmount = 2;
let repeatAmount = 2;
let first = myArray.splice(0,padAmount);
let last = myArray.splice(myArray.length-padAmount,padAmount)
for (i=0; i<=repeatAmount-1;i++){
  myArrayCopy.push(last);
  myArrayCopy.unshift(first);
}
console.log(myArrayCopy);
