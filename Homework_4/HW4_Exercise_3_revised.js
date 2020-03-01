let arrayToMeasure = [1,2,3,5,9,6,8,2,12];
function secondMax(theArray){
for(let j = 1; j<=theArray.length; j++) {
for (let i = 1; i<=theArray.length; i++){
  if(theArray[i-1]<=theArray[i])
  {
let temp = theArray[i-1];
theArray[i-1] = theArray[i];
theArray[i] = temp;
  }
}
}
   return theArray;
  }
let finalArray = secondMax(arrayToMeasure);
console.log(finalArray[1]);









