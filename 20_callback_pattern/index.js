function greet(name) {
  console.log(`Hello ${name}`);
}

function greetings(callback) {
  const name = "John Doe";
  callback(name);
}

greetings(greet);

/* 
- greet ==> callback function

- greetings ==> Higher Order Function

*/
