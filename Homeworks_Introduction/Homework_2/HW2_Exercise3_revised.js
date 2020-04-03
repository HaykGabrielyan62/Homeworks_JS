let myNumber = '358968712';
let lastDigit = myNumber%10;
let firstDigit = Math.floor(myNumber / (Math.pow(10,myNumber.length-1)));
let middlePiece = Math.floor((myNumber - firstDigit*(Math.pow(10,myNumber.length-1)))/10);
let reversedString = lastDigit.toString() + middlePiece.toString() + firstDigit.toString();            

console.log(reversedString); 