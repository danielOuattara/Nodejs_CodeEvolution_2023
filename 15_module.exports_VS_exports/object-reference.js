// const object1 = {
//   name: "Jon Doe",
// };

// const object2 = object1;
// object2.name = "Anna Smith";

// console.log("object1 = ", object1); // object1 =  { name: 'Anna Smith' }

//-------------------------------------------------------

const object1 = {
  name: "Jon Doe",
};

let object2 = object1;

object2 = {
  name: "Mike Tyson",
};

object2.name = "Anna Smith";

console.log("object1 = ", object1); // object1 =  { name: 'Jon Doe' }
