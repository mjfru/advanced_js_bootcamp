/*
! The Keyword 'this'
* 'this' inside of a method gives us access to instance properties, like 'name'.
*/

const person = {
  name: "Conan",
  city: "Los Angeles",
  sing: function () {
    return "La la la";
  },
  advancedSing: function () {
    return `${this.name} sings 'la la la'.`; //! 'this' detected! Refers to the person object.
  },
};

const personSing = person.sing(); // La la la

const advancedPersonSing = person.advancedSing(); // undefined - 'this' doesn't have the right value anymore! What's going on...?

/*
As soon as we put this in a variable, it no longer acts like we expect!
? The Mystery of the Undefined Fluffy:
*/

class Cat {
  constructor(firstName) {
    this.firstName = firstName;
  }
  dance(style = "tango") {
    return `Meow! I am ${this.firstName} and I like to ${style}!`;
  }
}

let fluffy = new Cat("Fluffy");
console.log(fluffy.firstName); // "Fluffy"
console.log(fluffy.dance()); // No problem!

//? But...what is happening here??
// let fDance = fluffy.dance;
// fDance("salsa"); //! Error??

/*
! Global Objects & This
? In a sense, JS doesn't have functions! 
!-- Everything is called on something, like a method.
* When a function is called in the global scope, it's called on what's known as the global object.
In browser JavaScript, that's typically the 'window' (the browser window)
In NodeJS, there's an object that's called 'global' (where some Node utilties are)
*/

function greet() {
  console.log("Hiya!");
}
//! This is still called on something, even though it's in the global scale.

/*
! The Left of the Dot Rule
* The general rule is that 'this' will be refering to whatever is on the LEFT side of the period/dot .
*/

function whatIsThis() {
  console.log("The value of this is: ", this); // Right now, this will be the window object because technically, we're calling it on the window!
}

const obj = {
  whatIsThis: whatIsThis,
};

obj.whatIsThis(); // 'this' is the obj object.

/*
! This & Classes
* In instances where we have something like a static method, this will refer to the actual class, not an instance of the class.
* If we make a variable and set to contain calling a method of an instance, we STILL get an error, however.
? - The value of 'this' becomes undefined in this case because it's now in the global scope.
* When you call a function on nothing but a function comes from inside a class, the value of 'this' will be -undefined-, not the window.
! In either case, you'll see this referred to as 'losing the -this- context'.
There are ways to force the value of 'this' to be whatever we want, however!
*/

let fluffler = new Cat("fluffer");
console.log(fluffler.dance("tango")); // Find the dance method on fluffer; call the dance method of fluffler -- easy success!

let fluffDance = fluffy.dance;
fluffDance("tango"); // Uh-oh, undefined in this case!
