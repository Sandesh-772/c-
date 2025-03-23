//list out the 5 cities in an arrays
const cities = ["Kathmandu","Pokhara","Lumbini","Hetauda","Biratnagar"];
// console.log(cities[3]);
cities[0] = "Hatiya"
console.log(cities);

//create and array and perform push,pop,shift and unshift
const numbers = [2,4,21,33,111];
// numbers.push(333);
// console.log(numbers);
// numbers.pop();
// console.log(numbers);
// numbers.shift();
// console.log(numbers);
// numbers.unshift(33);
// console.log(numbers);


const colors = ["Red", "Blue", "Green", "Yellow"];
// console.log(colors.at(3));
// console.log(colors.join("-"));
console.log(colors.sort());

const myNum = [2,51,55,13,52];
//sort() in asceding order
console.log(myNum.sort(function(a,b){
  return b-a;
}));
//toSorted() method is also same like sort but it doesn't alter the orginal array
//reverse() method reverse the elment in arrat
console.log(myNum.reverse()); 
//toReversed() method is also same like reverser() but it doesn't alter the orginal array
console.log(myNum.toReversed());
