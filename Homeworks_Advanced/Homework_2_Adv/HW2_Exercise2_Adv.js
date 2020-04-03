function findEvens(num1, num2) {
let arr = [];
for(let i = num1; i<=num2; i++){
  let numberOfEvens = 0;
  let strNum = i.toString();
for(let j = 0; j<strNum.length; j++){
  if((strNum[j])%2===0 ){ numberOfEvens++;
  } 
}
if(numberOfEvens === strNum.length) {
  arr.push(i)
}
}
 console.log(arr.toString());
}
findEvens(10, 30)