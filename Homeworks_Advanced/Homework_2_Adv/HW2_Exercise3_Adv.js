function letsSort (arr){
let isSorted = true;
for (let i = 0; i<= arr.length; i++){
if(arr[i+1]<arr[i]){
console.log(i+1);
isSorted = false;
}
}
if(isSorted){
  console.log(-1)
}
}
letsSort([-9, -4, -4, 3, 12, 4, 5])
