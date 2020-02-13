let myString = '589687';
let stringLength = myString.length;
if (stringLength === 1) {console.log(myString)} else {
let firstDigit = myString.slice(0,1);
let lastDigit = myString.slice(stringLength-1,stringLength);
let middlePiece = myString.slice(1,stringLength-1);
let reversedString = lastDigit.toString() + middlePiece.toString() + firstDigit.toString();
console.log(reversedString);
}
