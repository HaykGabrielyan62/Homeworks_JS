function minimizeArray(arr){
let newArr = [];
for(let i = 0; i< arr.length; i++){
  let sum = 0;
for(let j = 0; j< arr[i].length; j++ ){
sum += arr[i][j];
}
newArr.push(sum)
}
console.log(newArr)
}
minimizeArray([[3, 4, 5], [4, 5, 4], [8, 8, -1],[4, 5, 4]])