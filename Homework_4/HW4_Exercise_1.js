let fibArray = [0,1];
let n = 7;
for(i = 2; i <=n+1; i++)
{
  if (fibArray[i-1]<=n) {
fibArray[i]= fibArray[i-1] + fibArray[i-2];
 }
}
fibArray.pop();
console.log(fibArray);

