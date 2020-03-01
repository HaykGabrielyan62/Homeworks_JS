//1

function fibonaci (n) {
let fibArray = [0,1];
for(i=2; i<=n+2; i++) {
  if ((fibArray[i-1] + fibArray[i-2]) < n) {
fibArray[i] = fibArray[i-1] + fibArray[i-2];  }
}
  return fibArray;
}
console.log(fibonaci(12)); 




//2
function fibonaci (n) {
let fibArray = [0,1];
for(i=2; true; i++){
let nextToPush = fibArray[i-1] + fibArray[i-2];
if (n<=nextToPush) {
return fibArray;
    } else {
fibArray.push(nextToPush);}
  }
}
console.log(fibonaci(12)); 











