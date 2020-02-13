let figureName = prompt("Please enter figure name");
let height = 6;
let base = 7;
let surfaceArea = ((height*base)/2);
if (figureName != 'Triangle') { console.log('please enter valid figure name')
} else if (height > 0 && base >0) {
console.log(surfaceArea);
} else {console.log('Please enter positive numbers')}


