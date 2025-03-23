//singleton - by using constructor

//objects literals

// const mySym = Symbol("key1");
// const JsUser = {
//     "name":"Sandesh Jamkatel",
//     age:20,
//     "mySym":"mySym1",
//     location:"Hetauda",
//     email:"Sandesh@gmail.com",
//     isLoggedIn:false,
//     lastLoginDays:["Monday","Saturday"],
//     mygreeting:function(){
//         console.log(`Hello ${this.name}`);
//     }
// }
// console.log(JsUser["name"]); 
// console.log(JsUser["mySym"]); 
// console.log(typeof JsUser["mySym"]); 

// JsUser.email ="jamkatel@gmail.com";
// console.log(JsUser.email);
// Object.freeze(JsUser.email);
// JsUser.email ="Prasuna@gmail.com";
// console.log(JsUser.email);
// console.log(JsUser.mygreeting());


// const tinderUser =new Object();
// tinderUser.id = 
// console.log(tinderUser);

// const regularUser = {
//   email:"jamkatelsandesh5@gmail.com",
//   fullname:{
//     userFullname:{
//       firstname:"Sandesh",
//       lastname:"jamaktel"
//     }
//   }
// }
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.firstname);

// const obj1 = {
//   1:"a",2:"b",3:"c"
// }
// const obj2 = {
//   4:"d",5:"d"
// }
// const obj4 = {
//   6:"d",7:"d"
// }
// const obj3 = Object.assign({},obj1,obj2,obj4);
// console.log(obj3);

// const obj5 = {...obj1,...obj2,...obj4};
// console.log(obj5);

const users = [
  {
    id:1,
    email:"h@gmail.com"
  },
  {
    id:2,
    email:"Sj@gmail.com"
  }
]
// console.log(Object.keys(users));

const course = {
  cousrename:"js in hindi",
  price:"999",
  courseInstrcutor:"hitesh"
}
console.log(course.cousrename);
const {courseInstrcutor:instrcutor} = course;
console.log(instrcutor);

// {
//   "name":"sandesh",
//   "cousrename:""Js in hindi",
//   "price":"free"
// }

// [
//   {},{},{}
// ]
// {
//   "results": [
//     {
//       "gender": "female",
//       "name": {
//         "title": "Miss",
//         "first": "Jennie",
//         "last": "Nichols"
//       },
//       "location": {
//         "street": {
//           "number": 8929,
//           "name": "Valwood Pkwy",
//         },
//         "city": "Billings",
//         "state": "Michigan",
//         "country": "United States",
//         "postcode": "63104",
//         "coordinates": {
//           "latitude": "-69.8246",
//           "longitude": "134.8719"
//         },
//         "timezone": {
//           "offset": "+9:30",
//           "description": "Adelaide, Darwin"
//         }
//       },
//       "email": "jennie.nichols@example.com",
//       "login": {
//         "uuid": "7a0eed16-9430-4d68-901f-c0d4c1c3bf00",
//         "username": "yellowpeacock117",
//         "password": "addison",
//         "salt": "sld1yGtd",
//         "md5": "ab54ac4c0be9480ae8fa5e9e2a5196a3",
//         "sha1": "edcf2ce613cbdea349133c52dc2f3b83168dc51b",
//         "sha256": "48df5229235ada28389b91e60a935e4f9b73eb4bdb855ef9258a1751f10bdc5d"
//       },
//       "dob": {
//         "date": "1992-03-08T15:13:16.688Z",
//         "age": 30
//       },
//       "registered": {
//         "date": "2007-07-09T05:51:59.390Z",
//         "age": 14
//       },
//       "phone": "(272) 790-0888",
//       "cell": "(489) 330-2385",
//       "id": {
//         "name": "SSN",
//         "value": "405-88-3636"
//       },
//       "picture": {
//         "large": "https://randomuser.me/api/portraits/men/75.jpg",
//         "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
//         "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
//       },
//       "nat": "US"
//     }
//   ],
//   "info": {
//     "seed": "56d27f4a53bd5441",
//     "results": 1,
//     "page": 1,
//     "version": "1.4"
//   }
// }