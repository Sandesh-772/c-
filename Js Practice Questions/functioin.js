//functions in js
  function myName(){
    console.log("My name is Sandesh jamkatel");
  }
  myName();
  myName();

  //add 2 numbers
  // function addTwoNumbers(firstnum,secondnum){
  //   console.log("Sum: "+(firstnum+secondnum));
  // }
  function addTwoNumbers(firstnum,secondnum){
    return firstnum+secondnum;
  }
  addTwoNumbers(4,null);
  const results = addTwoNumbers(4,33);
  console.log(results);


//function more on

function calculateCartPrice(val1,val2,...num1){
  return num1;
}
console.log(calculateCartPrice(3,55,1));

const user = {
  username:"hitesh",
  price:199
}
function handleOject(anyObject){
  console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
handleOject(user);

const myNewArray = [33,444,11,293];
function returnSecondValue(getArray){
  return getArray[2];
}
console.log(returnSecondValue(myNewArray));