function repeatPadding (arr, rep, pad) {
let start =arr.slice(0,pad);
let end = arr.slice(arr.length-pad,arr.length);
let startRep = [], endRep = [];
for (i=0;i<rep;i++) {
  for( j=0; j<pad;j++){
    startRep.push(start[j]);
    endRep.push(end[j]);
  }
}
for (i=0;i<(rep*pad);i++) {
arr.unshift(startRep[startRep.length-i-1]);
arr.push(endRep[i]);}
  return arr;
}
console.log(repeatPadding([1,2,6,5,3,2], 2,2));