let val1 = 255;
let val2 = 255.0;
console.log(val1 === val2);
let val3 = "354";
let val4 = "hellow"
console.log(typeof Number(val3));
console.log(Number(val4));

let firstNum = 32.0002;
let str1 = firstNum.toString();
console.log(firstNum+str1);

const balance = new Number(10032);
console.log(balance);
console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 24.44;
console.log(otherNumber.toPrecision(2));

const hundreds = 10_000_00;
console.log(hundreds.toLocaleString('en-IN'));

console.log(Math.abs(-5));
console.log(Math.ceil(4.29));
console.log(Math.floor(4.999));
console.log(Math.sqrt(25));
console.log(Math.pow(2,3));
console.log(Math.min(4,11,55,11,1,53));
console.log(Math.max(4,11,55,11,1,53));
console.log((Math.random()*10)+1);
console.log(Math.random()*10+1);

const min = 30
const max = 40
console.log(Math.floor(Math.random(min-max)*10)+min);