const SuperHero = require("./super-hero-2");

console.log(SuperHero);

const batman = new SuperHero("Batman");
console.log("batman = ", batman);
console.log(batman.name); // Batman
console.log(batman.getName()); // Batman
//---
const mario = new SuperHero("Mario");
console.log("mario = ", mario);
console.log(mario.name); // Batman
console.log(mario.getName()); // Batman
//---

const newSuperHero = require("./super-hero");
const new_batman = new SuperHero("Batman");
console.log("new_batman = ", new_batman);
console.log(new_batman.name); // Batman
console.log(new_batman.getName()); // Batman
//---
const new_mario = new SuperHero("Mario");
console.log("new_mario = ", new_mario);
console.log(new_mario.name); // Batman
console.log(new_mario.getName()); // Batman
