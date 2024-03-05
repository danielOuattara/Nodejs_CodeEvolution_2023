/* --> pattern 1 & 2: default export */
// import add from "./maths.mjs";
// console.log("sum_1 = ", add(5, 7));

/* --> pattern 3: default export */
// import math from "./maths.mjs";
// console.log("sum_1 = ", math.add(5, 7));
// console.log("diff_1 = ", math.subtract(5, 7));

/* --> pattern 4 & 5: named export */
import * as math from "./maths.mjs";
console.log("sum_1 = ", math.add(5, 7));
console.log("diff_1 = ", math.subtract(5, 7));

// /* --> pattern 4 & 5*/
import { add, subtract } from "./maths.mjs";
console.log("sum_1 = ", add(5, 7));
console.log("diff_1 = ", subtract(5, 7));

// OR

// import math from "./maths.mjs";
// console.log("sum_1 = ", math.add(5, 7));
// console.log("diff_1 = ", math.subtract(5, 7));
