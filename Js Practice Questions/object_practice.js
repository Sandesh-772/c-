//1. Create an object person with properties: name, age, and city. Then, print the name property.
const person = {
  name:"Sandesh Jamkatel",
  age:20,
  city:"Hetauda",
  //Create a function inside the person object that returns the person's full details as a string.
  fullDetails:function(){
    console.log("Name is: "+this.name+" and age is: "+this.age+ " and he lives in "+this.city);
  }
}
console.log(person.name);
console.log(person.fullDetails());

//2. Add a new property country to the person object and set it to 'Nepal'.
person.country = "Nepal";
console.log(person.country);

//3.Delete the age property from the person object.
delete person.age;
console.log(person);
//Check if the city property exists in the person object.
console.log(person.hasOwnProperty("city"));


//Create an object student with a nested object grades containing math, science, and english scores. Access the science score

const student = {
  name:"Prasuna Paudel",
  age:20,
  college:"Kathmandu College",
  grade:{
    math:60,
    science:89,
    english:66
  }
}
console.log(student.grade.science);

//Use a loop (for...in) to print all the properties of an object.
for(let std in student){
  console.log(student[std]);
}
//Convert an object into an array of keys and an array of values using Object.keys() and Object.values().
const object1 = {
  a:"somestring",
  b:42,
  c:false
};
Object.freeze(object1);
Object.seal(object1);
object1.a =43;
object1.b = 44;
object1.c = 2;

const copiedObj = Object.assign({},object1);
console.log(copiedObj);
console.log(Object.keys(object1),Object.values(object1));