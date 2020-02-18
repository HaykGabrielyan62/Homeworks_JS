let myArray = [8,0,1,'hey',12,5,true,'2',null,7,3];
let myNewArray = [];
for (i = 0; i<=myArray.length; i++) {
  if (typeof myArray[i] === 'number' && (myArray[i])%2===0) {
    myNewArray.push(myArray[i]);
  } else if (typeof myArray[i] === 'number' && (myArray[i])%2!=0) {
    myNewArray.unshift(myArray[i]);
  }
}
    console.log(myNewArray);