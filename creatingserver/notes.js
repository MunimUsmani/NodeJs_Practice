console.log("server file is running");


let age = 20;
let addNumbers = (a,b) => a+b; //function to add two numbers
module.exports = {
    age, //exporting age variable
    addNumbers, //exporting addNumbers function
}