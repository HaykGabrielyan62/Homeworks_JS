let recSize = 6;
for (j = 1; j <= recSize; j++) {
  let recPattern ='';
  for (i = 1; i <= recSize; i++) {
   if(i===1 || j ===1 || i===recSize || j===recSize) {
     recPattern+=' *'
   } else {recPattern+= '  '}
  }
  console.log(recPattern);
}