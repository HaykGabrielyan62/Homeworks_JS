let a = 1;
let b = 2;
let c = 1;
let x1 = (-b + (Math.sqrt(Math.pow(b,2)-(4*a*c))))/(2*a);
let x2 =  (-b - (Math.sqrt(Math.pow(b,2)-(4*a*c))))/(2*a);

if (a == 0 || b == 0 || c == 0){
  console.log('Enter valid constant')
} 
else if (!x1) {
  console.log('Solution does not exists')}
else if ( x1 !== x2 ){
  console.log(x1, x2)
} else if (x1 === x2) {
  console.log(x1)
} 