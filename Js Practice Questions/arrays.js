//Arrays in js
// const myHeros = [33,10,5,22,42,221];

//Arrays methods
// myHeros.push("Hanuman");
// console.log(myHeros);
// myHeros.pop();
// console.log(myHeros);

// myHeros.unshift("Nonone");
// console.log(myHeros);

// myHeros.shift();
// console.log(myHeros);

// console.log(myHeros.includes("naagraj"));
// console.log(myHeros.indexOf('Shaktiman'));

// const newArr = myHeros.join();
// console.log(typeof newArr);
// console.log(typeof myHeros);

//slice or splice

// console.log("A ",myHeros);
// const myNewARR = myHeros.slice(0,4); //donot inlcude the last element of an array
// console.log(myNewARR); 
// console.log(myHeros);

//splice
// const myNewARR1 = myHeros.splice(0,4);
// console.log(myNewARR1); 
// console.log(myHeros);

//marvel herors
const marvel_heros = ["thor","Ironman","Spideman"];
const dc_heros = ["superman","flash","batman"];
console.log(marvel_heros.concat(dc_heros));
const all_new_heros = [...marvel_heros,...dc_heros];
console.log(all_new_heros);

const another_Array = [1,3,4,5,21,[4,55,11],55,[44,5[33,55]]];
const real_another_array = another_Array.flat(Infinity);
console.log(real_another_array);

console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));
console.log(Array.from({name:"Sandesh"})); //intersting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));