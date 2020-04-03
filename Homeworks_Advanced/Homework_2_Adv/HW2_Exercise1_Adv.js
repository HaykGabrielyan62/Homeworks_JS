function findBigger(arr, num){
let newArr = [];
for (let i = 0; i<=arr.length; i++){
if(arr[i]> num){
newArr.push(arr[i])
}
}
console.log(newArr);
} 
findBigger([10, 25, 16, -5, 30, 15, 24], 16)
