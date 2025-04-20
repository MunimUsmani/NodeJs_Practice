console.log("server file is running");

//nodemon will track files see what is changing it'll save accept changes and run the server again

// function add(a,b){
//     return a+b;
// }
// let add = (a,b) =>{return a+b};
let add = (a,b) => a+b;

let result = add(120,5);
console.log(result);

//fs library is used to create read and write files
const fs = require("fs");
const os = require("os"); //os library is used to get the system information

let user = os.userInfo(); //userInfo() method returns the user information
console.log(user.username);

fs.appendFile("greet.txt",`Hello ${user.username} \n`,() => {
    console.log("file created successfully");
});

const notes = require("./notes.js"); //importing notes.js file
console.log("notes file is running");

let age = notes.age; //importing age variable from notes.js file
console.log(age);

let addNumbers = notes.addNumbers(10,20); //importing addNumbers function from notes.js file
console.log(addNumbers); //calling addNumbers function from notes.js file

//lodash library is used to work with arrays and objects
const _ = require("lodash"); //importing lodash library

let data = ["person", "person", 1,2,1,2, "name", "age"]
let uniqueData = _.uniq(data); //uniq() method returns the unique values from the array
console.log(uniqueData); //calling uniq() method from lodash library