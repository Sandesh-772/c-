// 1. Write a program to swap to variables without using third variables

let num1 = 43;
let num2 = 4;

console.log("Num1: "+num1);
console.log("Num2: "+num2);
//logic to swap
num2 = num1+num2;
num1 = num2-num1;
num2 = num2-num1;

console.log("Num1: "+num1);
console.log("Num2: "+num2);

//Convert a string "123" into a number without using parseInt().
let number = +"123";
console.log(number+22);

//What will be the output of console.log(typeof NaN)?
console.log(typeof NaN)
