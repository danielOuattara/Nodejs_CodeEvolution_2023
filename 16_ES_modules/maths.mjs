/* --> pattern 1: default export */
// const add = (a, b) => a + b;
// export default add;

/* --> pattern 2: default export */
// export default (a, b) => a - b;

/* --> pattern 3: default export */
// const add = (a, b) => a + b;
// const subtract = (a, b) => a - b;
// export default { add, subtract };

/* --> pattern 4: named export */
// const add = (a, b) => a + b;
// const subtract = (a, b) => a - b;
// export { add, subtract };

/* --> pattern 5: named export */
export function add(a, b) {
  return a + b;
}
export function subtract(a, b) {
  return a - b;
}
