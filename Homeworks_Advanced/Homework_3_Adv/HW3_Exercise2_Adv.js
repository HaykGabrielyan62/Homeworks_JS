function minPos(arr,  min =+Infinity){
if(arr.length === 0){
  if(min === +Infinity){return -1}
  return min;
} else if(arr[0]<0){
  arr.shift()
return minPos(arr,min);
} else if(arr[0]<min){
min = arr[0];
arr.shift();
return Math.min(min,minPos(arr,min));
} else if (arr[0]>min){
  arr.shift();
  return minPos(arr,min);}
}
console.log(minPos([5,-2,3,-1,4,-5,6,9,1]))