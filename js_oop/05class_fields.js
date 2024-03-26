/*
! Class Fields (Public & Private)
* Private instance class fields provide a way to maintain encapsulation and not allow external access.
* A public class field is the default behavior for declaring class properties.
* Private fields are newer (2021 or so) and as stated before, allow us to protect them from outside access; a '#' preceding the field indicates that it is private to JavaScript.

? The '#' symbol can also be used to declare private methods in a class.
*/

class MyClass {
  // Public field
  publicField = "Public Field";

  // Private Field
  #privateField = "Private Field";

  getPrivateField() {
    return this.#privateField;
  }

  #privateMethod() {
    console.log("Private Method Called!");
  }

  publicMethod() {
    this.#privateMethod();
  }
}

const instance = new MyClass();
console.log(instance.publicField); // 'Public Field'
console.log(instance.getPrivateField()); // 'Private Field'
// console.log(instance.#privateField()); // Error
// instance.#privateMethod(); // Error
instance.publicMethod(); // Private Method Called!

//? Public Field Example:
class Cat {
  static numOfCats = 0;
  numLegs = 4; // These properties could be in the constructor below BUT the benefit here is that you get a cleaner constructor and new instances, you don't need to use 'this', and they are easy to update.
  //? Acts as quick documentation for the class
  hasTail = true;
  name; // Can leave these blank for documentation purposes and then pass them in the contructor
  breed; //? These can be set to a 'standard' but if also used in the constructor, they'll be overwritten anyway

  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
    Cat.numOfCats += 1;
  }
}
const snickers = new Cat("Snickers", "Tabby");
console.log(snickers.breed);

//? Private Field Example:
class Circle {
  #radius;
  constructor(radius) {
    this.#radius = radius;
  }
}

const c = new Circle(3);
// console.log(c.#radius) //! Error! Private field '#radius' must be declared in an enclosing class

/*
! Static Initialization Blocks
* Extremely new within the past year or two, the idea is to have something that runs just once when the class is loaded.
*/

class StaticExample {
  static connection;
  static { // This will run when the class is first loaded (only 1 time!)
    this.connection = {};
  }
  static loadProductionConnection() {
  }
  static loadDevelopmentConnection() {
  }
}

const newClass = new StaticExample();
