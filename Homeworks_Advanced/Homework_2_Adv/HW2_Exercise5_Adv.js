function findMissingNumbers(arr){
let OriginalLength = arr[arr.length-1]-arr[0]+1;
let actualLength = arr.length;
let missingNumbers = OriginalLength-actualLength;
console.log(missingNumbers);
}
findMissingNumbers([6,7,9,10,11])

