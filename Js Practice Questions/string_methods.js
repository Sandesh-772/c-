// Strings methods in js
// the length property returns the length of the string
// 

//use of templates
// const kingName = "Amarendra Bahubali";
// console.log( `Kya mrityu us maha summer janani hai jiska bardan sristi karti,
//   kya ambar ki nagari se wo rakhwala aya jiske pawo jhume dharti ${kingName}`);


  //strings methods

  //toCase
  // console.log(myString.toUpperCase());
  // console.log(myString.toLowerCase());
  // console.log(myString.toLocaleLowerCase());
  // console.log(myString.toLocaleUpperCase());

  //charAt() returns the string at specified pos
  // console.log(myString.charAt(3));
  //charCodeAt() retuns the code of the character at specified index
  // console.log(myString.charCodeAt(4));
  //at() support negative index as well
  // console.log(myString.at(-2));

  //extracting part of the string 3 methods are used
  //slice substring() substr()
  //slice includes start but not end index
  let mySentences = "This is what i want";
  // console.log(mySentences.slice(-8));

  //substring() - similar to slice but include both start and end index
  // console.log(mySentences.substring(2,10));
  
  //javascript concat method
  let firstWord = "Hello ";
  let secondWord = "Sandesh";
  // console.log(firstWord.concat(secondWord));

  //all string methods string a new string not modified the old for example
  let mySen = "You are fired";
  let change = mySen.toUpperCase();
  // console.log(change);
  // console.log(mySen);

  //trim methods in string
  let text1 = "    hi i love to play cricket  ";
  // console.log(text1.trim());

  //padstart() padend()
  let text2 = "9";
  // console.log(text2.padStart(10," "));
  // console.log(text2.padEnd(10,"-"));

  //repeat() to repeat strings multiple times
  // console.log(text1.repeat(3));

  //replace() to replace the string
  let text3 = "I hate maths";
  // console.log(text3.replace("hate","love"));

  //replaceAll()
  let text4 = "Hey Girls, Do you find Class Well, If any Girls have any problem ask me ,Ok Girls";
  // console.log(text4.replaceAll("Girls","Boys"));

  //split is used to use string as an array
  let text5 = "apple banana grapes mango etc";
  // console.log(text5.split(" ")); 

  //indexOf
  let text6 = "Please locate where 'locate' occurs!";
  console.log(text6.indexOf('locate'));
  //lastindexOf
  console.log(text6.lastIndexOf('locate'));
  //search method
  console.log(text6.search("where"));