/* --> pattern 1 */
// const add = (a, b) => a + b;
// module.exports = add;

/* --> pattern 2 */
// module.exports = (a, b) => a - b;

/* --> pattern 3 */
// const add = (a, b) => a + b;
// const subtract = (a, b) => a - b;
// module.exports = { add, subtract };

/* --> pattern 4 */
// module.exports.add = (a, b) => a + b;
// module.exports.subtract = (a, b) => a - b;

/* --> pattern 5 */
exports.add = (a, b) => a + b;
exports.subtract = (a, b) => a - b;

console.log(exports);
console.log(module);
