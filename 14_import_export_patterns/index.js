/* --> pattern 1 & 2 */

// const add = require("./functions");
// console.log("sum_1 = ", add(5, 7));

/* --> pattern 3 & 4 & 5 */

const { add, subtract } = require("./functions");
console.log("sum_1 = ", add(5, 7));
console.log("diff_1 = ", subtract(5, 7));

// OR

const math = require("./functions");
console.log("sum_1 = ", math.add(5, 7));
console.log("diff_1 = ", math.subtract(5, 7));
