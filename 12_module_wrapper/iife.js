(function (message) {
  const superHero = "Batman";
  console.log(message, superHero);
})("Hello");

(function (message) {
  const superHero = "Superman";
  console.log(message, superHero);
})("Greeting");

(function (exports, require, module, __filename, __dirname, message) {
  const superHero = "Mario";
})("Greeting");

(function (exports, require, module, __filename, __dirname, message) {
  const superHero = "Mario";
  console.log(message, superHero);
  console.log("exports = ", exports);
  console.log("require = ", require);
  console.log("module = ", module);
  console.log("__filename = ", __filename);
  console.log("__dirname = ", __dirname);
  console.log("__message = ", message);
})("Greeting");
