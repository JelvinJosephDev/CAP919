// const yargs = require("yargs")
// console.log(process.argv)
// console.log(yargs.argv)
// var readline = require('readline-sync');
// var name = readline.question("What is your name?");
// console.log("Hi " + name + ", nice to meet you.");
function add(a, b) 
{   
    return parseInt(a)+parseInt(b) 
}
var sum = add(arguments[2], arguments[5])
console.log("Addition of a, b is ", sum)