function sumAll(num){
  if(num < 10) {
    return num;
  } else if (num >= 10){
    return sumAll(num%10 + sumAll(Math.floor(num/10)))
  }
}

console.log(sumAll(9999999999999999))