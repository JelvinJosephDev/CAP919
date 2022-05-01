// 12000005 - Jelvin Joseph - D1903 - SET B
var ca1q2bmod = require('./ca1q2bmod.js')
a = 20
b = 30
c = 40
add = ca1q2bmod.add(a, b)
substract = ca1q2bmod.substract(b, a)
multiply = ca1q2bmod.multiply(c, b)
divide = ca1q2bmod.divide(c, a)

console.log("The sum of", a , "and", b , "is", add)
console.log("The difference of", b , "and", a , "is", substract)
console.log("The product of", c , "and", b , "is", multiply)
console.log("The quotient of", c , "and", a , "is", divide)