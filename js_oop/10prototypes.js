/*
! Prototypes
* Prototypes are objects where shared functionality can live; JS looks to the prototype to find methods that might not exist directly on instances they're called on.

! Part 1.
*/

class Dog {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }
  bark() {
    return `${this.name} says woof!`;
  }
  sleep() {
    return `${this.name} is sleeping zzzz.`;
  }
}

const elton = new Dog("Elton", "Aussie");
// If you look at this, all that this instance contains will be name and bark...what happened to the methods?

//? If we use an old-school constructor function and denote the methods with this.bark(), we'll see it in an instance, on every individual dog.

//* When we make an instance from a class constructor, the methods each instance have work but each dog object didn't have its own seperate copy of those methods.
//* With the old way, each instance has its own copy of each method, taking up so much room.
//? So if we have to use the old way, how do we NOT redefine bark and sleep for each instance?

/*
! Part 2.
Consider the following:
Objects, arrays, etc., all have access to functions (methods) that we can call on them.
So, where do they come from?
! Prototypes are the basic mechanism that provide these features and are objects themselves of properties and methods.
? This is where things like .toString() are defined!
*/

const myObj = {
  color: "purple",
  score: 99,
  greet() {
    console.log("Hiiiii!");
  },
};

const nums = [1, 2, 3];
nums.__proto__;

/*
! Part 3.
? Let's revisit our problem: if we are using a constructor function, how do we not redefine methods every time we create an instance?
* Set the prototype!
! Remember: the 'new' keyword creates a link to the object's prototype!
*/

function Cat(name, breed) {
  this.name = name;
  this.breed = breed;
  // this.meow = function () {
  //   return `${this.name} meows...loudly.`;
  // },
  // this.sleep = function () {
  //     return `${this.name} takes a snooze.`;
  // };
}

Cat.prototype.meow = function () {
  return `${this.name} meows...loudly.`;
};

Cat.prototype.sleep = function () {
  return `${this.name} takes a snooze.`;
};

const snickers = new Cat("Snickers", "Tabby");
const winona = new Cat("Winona", "Mixed");
console.log(snickers.sleep());

console.log(winona.meow === snickers.meow); // true

/*
! The Prototype Chain
* If JS doesn't find something defined in its own object, it'll then look in the prototype as a backup.

*/

const grandParent = {
  greet() {
    return "Hi there.";
  },
};

const parent = {
  color: "purple",
  sing() {
    return "La la la";
  },
  __proto__: grandParent,
};

const child = {
  num: 2,
  __proto__: parent, // Pretty rare to do this but it DOES work.
};

console.log(child.sing()); // Works!
console.log(child.greet()); // Also works due to chaining
child.__proto__.__proto__.__proto__;
// Above is actually valid, it goes all the way into the grandparent's actual prototype object.
//* This should look suspiciously similar to extending classes!

/*
! prototype vs. __prototype__
* prototype allows you to SET as the prototype for instances of a class; used exclusively for adding methods to the prototype.
* __proto__ is an internal property of an object and it points to its prototype object.
Used to show its existence but never added to ourself.

! Useful Prototype Methods
* .create()
* .getPrototypeOf()
* .setPrototypeOf()
* .isPrototypeOf()
*/
const person = {
  sing() {
    return "Fa la la";
  },
  isHuman: true,
};

Object.create(person); // Makes an empty object but the prototype is now 'person'.

const tom = Object.create(person);
console.log(tom.sing()); // Fa la la

Object.getPrototypeOf(tom);
Object.setPrototypeOf(tom, {isHuman: false});

