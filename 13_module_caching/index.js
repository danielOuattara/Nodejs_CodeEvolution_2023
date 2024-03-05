const superHero = require("./super-hero");

console.log(superHero);
console.log(superHero.name); // Batman
console.log(superHero.getName()); // Batman

//---

superHero.setName("Superman"); // Superman
console.log(superHero.name); // superman
console.log(superHero.getName());

//---

const newSuperHero = require("./super-hero");
console.log(newSuperHero.getName()); // Superman

// a new instance of module IS NOT loaded,
// instead the first old cached module (line 1 ) is used again
