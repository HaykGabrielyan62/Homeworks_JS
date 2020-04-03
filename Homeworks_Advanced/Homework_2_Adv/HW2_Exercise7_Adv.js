function findEvens(arr) {
let newArr = [];
for(let i = 0; i<arr.length; i++){
  if((arr[i])%2!=0 ){
     newArr.push(arr[i]*arr.length)
  } 
}
 console.log(newArr);
}
findEvens([2,1,9,7,4,3,])