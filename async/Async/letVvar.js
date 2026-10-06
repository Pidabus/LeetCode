let myNumber = 1;
function addOne(num) {
    num++;
}

addOne(myNumber);

console.log(myNumber);

var globalNum = 1;
addOne(globalNum);
console.log(globalNum);

function plusOne() {
    globalNum++;
    myNumber++;
}
plusOne();

console.log(myNumber);
console.log(globalNum);