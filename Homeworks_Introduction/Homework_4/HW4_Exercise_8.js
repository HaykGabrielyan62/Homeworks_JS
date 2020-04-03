let myArray = [];
let n =8;
for(i=1;i<2*n;i++){
if(i<=n) {
  myArray +=i;
  console.log(myArray);} else {
  myArray/=10
  console.log(Math.floor(myArray))}
}