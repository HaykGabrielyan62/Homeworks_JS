let myArray = [-14,-15,0];
let negVar =0;
for (let i = 0; i < myArray.length; i++){
if (Math.sign(myArray[i]) === 0) {
    console.log('unsigned');}
  else if (Math.sign(myArray[i]) === -1) {
    { negVar++;}
  }
} 
if (negVar%2 === 0) {
console.log('+')} else if (negVar%2 != 0) {
	console.log('-')} 

 


