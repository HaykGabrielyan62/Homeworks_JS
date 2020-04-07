function flattenArr(arr, newArr = []){
if(arr.length === 0){
   return newArr;
} 
else if(arr.length>0){
      if(typeof arr[0] === 'number'){
      newArr.push(arr[0]);
      arr.shift();
      return flattenArr(arr, newArr);
      } else if(typeof arr[0] === 'object'){
                flattenArr(arr[0], newArr);
                arr.shift();
                return flattenArr(arr, newArr);
      }
  } 
}
console.log(flattenArr([1,[2],3,[[1,5,[7],[8,9],6]],4,5]))