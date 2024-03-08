//! JS Objects Review - Plain Old JS Objects (POJO)s

//* There are two ways to create a JavaScript object, a key-value data store:
let object1 = {};

let object2 = new Object();

const pet = { species: "Dog", name: "Gracie", age: 9 };

//* Both of the examples below can be used to retrieve information from the key-value pairs in our objects:
console.log(pet.species);
console.log(pet["name"]);

//! Properties that don't exist evaluate to undefined, it doesn't throw an error.
object1.taco; // undefined

//* All keys get 'stringified':
ol[1] = "hello";
ol["1"] = "goodbye";

// So, what is ol[1]? -- ol["1"]! Because the [1] became stringified, so the second statement simply overwrote it.
// ol[1] is "goodbye".

//* A property where the key is 'sayHi' and the value is a function:
object1.sayHi = function() { return "Hi!" };
object1.sayHi(); // Hi!

pet.bark = function() {
  return "Wooof!";
};
pet.bark();


//! Mixing Data & Functionality
// Imagine some useful functions dealing with triangles:

// Get the area of a right triangle:
function getTriangleArea(a, b) {
  return (a * b) / 2;
}

// Get the hypotenuse of a right triangle:
function getTriangleHypotenuse(a, b) {
  return Math.sqrt(a ** 2 + b ** 2);
}
console.log(getTriangleArea(3, 4));
console.log(getTriangleHypotenuse(5, 12));

//* Now, let's reinterpret and stick these in a POJO:
let myTri = {
  a: 3,
  b: 4,
  getArea: function() {
    return (this.a * this.b) / 2;
  },
  getHypotenuse: function() {
    return Math.sqrt(this.a ** 2 + this.b ** 2);
  }
};
//? Remember, 'this' in this context references 'this object'.
// If we need to change anything in the myTri object, we can do something like: myTri.a = 5

//* While the above is nice and compact, it's not exactly very repeatable and would be a pain if we had lots of triangles to work with!