let myArray = [-14,200,-10];
let negVar =0;
if (myArray.includes(0)) {
    console.log('unsigned');} else {
for (let i = 0; i < myArray.length; i++){
  if (Math.sign(myArray[i]) === -1) {
     negVar++;}
} 
if (negVar%2 === 0) {
console.log('+')} else if (negVar%2 != 0) {
	console.log('-')}
    }

 
