function isOdd(num){
if(num<10 && num %2===0)
{
  return false;
} else if(num<10 && num %2!=0){
  return true;
}
else if(num>=10 && num%2 ===0) {
  return false;
} else if (num>=10 && num%2 !=0){
  isOdd(Math.floor(num/10))}
}

console.log(isOdd(1));
