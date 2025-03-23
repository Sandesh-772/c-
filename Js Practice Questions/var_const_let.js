
//var - it is a global or function scope
function apple(){
  var a = 44;
  console.log(a);
}
apple();
a = 45;
console.log(a);

//let - it is a blocked scoped
function banana(){
  let name = "Sandesh";
  console.log(name);
}
// console.log(name);

//const - it is used for variables that should not be redeclare
const PI = 3.1415;
console.log("Value of PI: "+PI);

// We cannot reassign const variables
//  ❌PI = 3.1455;
// console.log("Value of PI: "+PI);

// Hoisting behaviour of var, let and const

console.log(c);
var c=34;

//different  data types in js

// Numbers
let num1 = 45;
console.log(typeof num1); //type is used to check the type of variables

// String 
let userName = "Sandesh Jamkatel";
console.log(typeof userName);

//boolean
let isLoggedIn =false
console.log(typeof isLoggedIn);

//null
let temp = null;
console.log(typeof temp);

//bigint
let  elonMuskBalance = 433_3333_332222_33_443_33n;
console.log(typeof elonMuskBalance);

//symbol - to represent value differently
let mySymbol = Symbol("run");
let anotherSymbol = Symbol("run");
console.log(mySymbol === anotherSymbol);

//object
let myObj = {
  name:"Sandesh Jamkatel",
  age: 20,
  getDetails:function(){
    console.log("I love "+this.name);
  }
}
console.log(myObj.getDetails());

//type coersion - it is a automatic conversion of data types
// let str1 = "hello";
let num2 = 20
console.log("Hello "+num2);

let str2 = +"20";
console.log(str2+20);

console.log(20 == "20");