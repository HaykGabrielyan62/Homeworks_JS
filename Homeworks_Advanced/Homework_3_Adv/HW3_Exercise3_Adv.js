function fibSequence (num){
if(num === 0){
  return [];
  } 
else if(num === 1){return [1];} 
else if (num === 2) {return [1,1]} 
else if(num>2)
  {
      let prevFib = fibSequence(num-1);
      prevFib.push(prevFib[prevFib.length-1] + prevFib[prevFib.length-2]);
      return prevFib;
  }
}
console.log(fibSequence(10))