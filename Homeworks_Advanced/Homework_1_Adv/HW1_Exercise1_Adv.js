function drawX (xSize){
for (j = 0; j <= xSize*2; j++) {
  let xPattern ='';
  for (i = 0; i <= xSize*2; i++) {
   if(i===j || j ===2*xSize-i) {
     xPattern +='*';
   } else {xPattern += ' '}
      }
  console.log(xPattern);
  }
}
console.log(drawX(5));