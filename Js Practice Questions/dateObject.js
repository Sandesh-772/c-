//date object
const myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toUTCString());

let myCreadtedDate =  new Date(2023,0,23,5,3,1);
// console.log(myCreadtedDate.toLocaleString());


let myTimeStamp = Date.now();
// console.log(myTimeStamp);
console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
let new_year = newDate.getFullYear();
let new_day = newDate.getDay();
let month = newDate.getMonth();

console.log(`Today date is: ${new_year}:${new_day}:${month}`);
console.log(newDate.toLocaleString('default',{
  weekday:"long"
}))