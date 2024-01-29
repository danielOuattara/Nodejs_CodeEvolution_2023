// const math = require("./functions");
// //---
// const sum1 = math.add(3, 5);
// console.log("sum1 = ", sum1);
// //---
// const sum2 = math.subtract(2, 5);
// console.log("sum2 = ", sum2);
// //---
// const sum3 = math.multiply(2, 5);
// console.log("sum3 = ", sum3);
// //---
// const sum4 = math.divide(2, 5);
// console.log("sum4 = ", sum4);

//----------------------------------------

const math = require("./functions");

const { add, subtract, multiply, divide } = math;
const sum1 = add(3, 5);
console.log("sum1 = ", sum1);

const sum2 = subtract(2, 5);
console.log("sum2 = ", sum2);

const sum3 = multiply(2, 5);
console.log("sum3 = ", sum3);

const sum4 = divide(2, 5);
console.log("sum4 = ", sum4);
