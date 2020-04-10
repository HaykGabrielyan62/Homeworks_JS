function findOdds(arr) {
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
      newArr.push(arr[i])
    }
  }
   for (let j = 0; j < newArr.length; j++) {
      newArr[j]*=3;
  }
  return newArr;
}
console.log(findOdds([5, 4, 78, 0, -3, 7]))
