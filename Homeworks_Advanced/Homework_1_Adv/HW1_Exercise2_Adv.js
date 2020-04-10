function freqOfElements(Arr){
let newArr = [];
let L1=Arr.length;
for(let i=0; i<L1; i++){
if(newArr.includes(Arr[i])===false){
  newArr.push(Arr[i]);
  }
}
for(let i=0; i<newArr.length; i++){
  let count = 0;
  for(let j =0; j < L1; j++){
    if(newArr[i] === Arr[j]){
      count ++;
    }
  }
   console.log(`${newArr[i]} : ${count/L1}`);
}
}
let theArr = [1,1,2,2,3];
freqOfElements(theArr);