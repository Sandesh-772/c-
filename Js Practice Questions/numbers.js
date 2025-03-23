// Numbers in Js
let x = 3.1415;
let y = 4;
console.log("x: "+x);
console.log("y: "+y);

let val = 123e4;
console.log(val);

let num1 = 34;
let num2 = 44;
console.log("Sum: "+(num1+num2));

let num3 = "44";
let num4 = "3";
console.log("Sum: "+(num3+num4));
console.log(3+"3"+4);
console.log("3"+4+44);
console.log(4+11+"4");

//javascript try to convert all string to numeric if arithmetic
let n1 = "33";
let n2  = "2";
console.log((n1/"10"));

let a = Number.MAX_SAFE_INTEGER;
let b = Number.MIN_SAFE_INTEGER;
console.log(a);
console.log(b);
console.log(Number.isInteger(10));
console.log(Number.isInteger(10.44));

let firstNum = 4543;
firstNum = firstNum.toString();
let secondNum  = 33;
console.log(firstNum+secondNum);

//toFixed is used to fixed the precision
let myNum = 33.299111;
console.log(myNum.toFixed(2));
console.log(myNum.toPrecision(6));

//Number.Epsilon
console.log(Number.EPSILON);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);