let fName = prompt("Please enter figure name");
let height = 6;
let base = 7;
if (fName != 'Rectangle'&& fName != 'Triangle'){ console.log('Enter valid figure')
}
else if (fName === 'Rectangle')  {
 if (height > 0 && base >0) {console.log(base*height)}
  else if (height <= 0 || base <=0 ) 
  {console.log('Enter positive numbers')} }
else if (fName === 'Triangle')  {
 if (height > 0 && base >0) {console.log((base*height)/2)}
  else if (height <= 0 || base <=0 ) 
  {console.log('Enter positive numbers')} }
 else if (height <= 0 || base <=0 ) 
{console.log('Enter positive numbers')}





