const EventEmitter = require("node:events");

// console.log("EventEmitter = ", EventEmitter); // a class

const emitter = new EventEmitter();
// console.log("emitter = ", emitter);

//---------------------------------------------------

emitter.on("order-pizza", () => console.log("Listening order-pizza"));
emitter.emit("order-pizza");

//---------------------------------------------------

emitter.on("order-wings", () => {
  console.log("Listening order-wings");
  console.log("order with specifications");
});

//--

emitter.on("order-wings", (type, size) => {
  console.log("Listening order-wings");
  console.log("type = ", type);
  console.log("size = ", size);
});
emitter.emit("order-wings", "spicy", "large");
