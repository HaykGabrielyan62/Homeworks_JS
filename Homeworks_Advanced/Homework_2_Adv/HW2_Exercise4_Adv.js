function findMaxProd(arr) {
let prod = 0;
for(let i = 1; i<arr.length; i++) {
if( arr[i-1] * arr[i] >= prod) {
  prod = arr[i-1] * arr[i]
}
}
return prod;
}
console.log(findMaxProd([9,4,4,10,12,28,20,60]));