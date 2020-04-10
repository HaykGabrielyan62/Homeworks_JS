function findMissingNumbers(arr) {
  let min = +Infinity
  let max = -Infinity
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]
    }
    if (arr[i] < min) {
      min = arr[i]
    }
  }
  return max - min - arr.length + 1
}
console.log(findMissingNumbers([1, 5, 6, 10]))
