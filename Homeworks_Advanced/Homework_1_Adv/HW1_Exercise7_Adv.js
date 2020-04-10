function negativeProduct(arr) {
  let result = 1
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == 'object') { //not sure if condition is correct
      let maxNeg = -Infinity
      for (let j = 0; j < arr[i].length; j++) {
        if (Math.sign(arr[i][j]) === -1 && arr[i][j] >= maxNeg) {
          maxNeg = arr[i][j]
        }
      }
      if (maxNeg === -Infinity) maxNeg = 1
      result *= maxNeg
    } else {return 'Invalid arguments'}
  };
  if (result === 1) {return 'No negative arguments'}
  return result;
  
}

let arr1 = [
  [2, 9, -3, 0],
  [-1, -2, 2],
  [-4, 11, 0],
]
console.log(negativeProduct(arr1))
