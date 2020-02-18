let myString = 'If at _ you don’t _, try, try _.'
let myArray = ['first', 'succeed', 'again'];

for (let i = 0; i < myString.length; i++){
for (let j = 0; j < myArray.length; j++){
myString = myString.replace('_',myArray[j]);
  }
}
console.log(myString);