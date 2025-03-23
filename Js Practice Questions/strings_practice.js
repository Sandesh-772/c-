// String methods in js
//1️⃣ Declare a string variable called message with the value "Hello, JavaScript!".
let str = "Hello, JavsScript";
console.log(str);
//2️⃣ Find the length of the string "Programming".
let str1 = "Programming";
console.log("String length: "+str1.length);
//3️⃣ Convert the string "hello world" to uppercase.
let str2 = "hello world";
console.log(str2.toUpperCase());
//4️⃣ Convert "JAVASCRIPT" to lowercase.
let str3 = "JAVASCRIPT";
console.log(str3.toLowerCase());
//5️⃣ Extract "JavaScript" from the string "I love JavaScript" using a string method.
let str4 = "I love JavaScript";
console.log(str4.substring(7))
//6️⃣ Replace "bad" with "good" in the string "This is a bad idea"
let str5  = "This is a bad idea";
console.log(str5.replace("bad","good"));
//7️⃣ Concatenate the strings "Hello" and "World" with a space in between.
let str6 = "Hello ";
let str7 = "World";
console.log(str6.concat(str7));
//8️⃣ Check if the string "Coding is fun" contains the word "fun".
let str8 = "Codins is fun";
console.log(str8.includes("fun"));
//9️⃣ Split the string "apple,banana,grape" into an array.
let str9 = "apple banana grapes";
console.log(str9.split(' '));
//🔟 Remove extra spaces from the string " JavaScript " and print the trimmed result.
let str10 = " JavaScript ";
console.log(str10.trim());
//1️⃣1️⃣ Extract the first 5 characters of "Welcome to JavaScript" using slice() or substring().
let str11 = "Welcome to JavaScript";
console.log(str11.slice(0,5));
//1️⃣2️⃣ Find the position (index) of "code" in "Let's code in JavaScript!".
let str12 = "Let's code in JavaScript!";
console.log(str12.indexOf('code'));
//1️⃣3️⃣ Use a template literal to create the string: "My name is [yourName] and I love JavaScript!".
let str13 = "Sandesh Jamkatel";
console.log(`My name is ${str13} and I love  JavaScript`);

//1️⃣4️⃣ Reverse the string "JavaScript" using a method.
let str14 = "JavaScript";
console.log(str14.split("").reverse().join(""));
//1️⃣5️⃣ Count the number of vowels (a, e, i, o, u) in the string "Hello, JavaScript!".
let str15 = "Hello, JavaScrript";
let count = (str15.match(/[aeiou]/gi)|| []).length;

let gameName = 