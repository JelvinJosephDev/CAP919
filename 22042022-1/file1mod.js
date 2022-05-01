var arguments = process.argv
function add(a,b)
{
return parseInt(a) + parseInt(b)
}
var sum = add(arguments[2],arguments[3])

function minus(a,b)
{
return parseInt(a) - parseInt(b)
}
var sub = minus(arguments[2],arguments[3])

function multi(a,b)
{
return parseInt(a) * parseInt(b)
}
var mul = multi(arguments[2],arguments[3])

function division(a,b)
{
return parseInt(a) / parseInt(b)
}
var div = division(arguments[2],arguments[3])

console.log("Addition of a and b is equal to ", sum)
console.log("Substraction of a and b is equal to ", sub)
console.log("Multiplication of a and b is equal to ", mul)
console.log("Division of a and b is equal to ", div)