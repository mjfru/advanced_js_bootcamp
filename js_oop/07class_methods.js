/*
! The Keyword 'this' and Class Methods

! Call
* Sometimes, you'll need to say 'call this function on THIS object.; that's what call() is for!
"Call this function on this thing."
! It lets us establish our own object that we want JavaScript to call a function on.
*/

class Cat {
  constructor(firstName) {
    this.firstName = firstName;
  }
  dance(style = "tango") {
    return `Meow! I am ${this.firstName} and I like to ${style}!`;
  }
}

let fluffy = new Cat("fluffy");
console.log(fluffy.dance());
let fDance = fluffy.dance; // fDance would result in an error here
// Call on fluffy, passing "tango" as an argument.
fDance.call(fluffy, "tango"); // Call this function on the 'fluffy' object

let snickers = new Cat("snickers");
let sDance = snickers.dance;
console.log(sDance.call(fluffy, "salsa")); // Meow! I am fluffy...
/*
If we use our person object from the prior note page...
matt.sing(); would give us what we expect.
matt.sing.call('kelsey') would give us 'Kelsey sings La la la.', even if Kelsey's object doesn't have a sing method in it. 

! Apply
* Very similar to call, but the main difference is how it handles arguments.
Below, if we want to borrow Ringo's greet method and use it on George, we could use call, as you'd expect, OR we can use apply.
? However, the second argument when using apply() needs to be an array or an array-like object!
*/

const ringo = {
  firstName: "Ringo",
  greet: function (greeting) {
    console.log(`${this.firstName} says ${greeting}!`);
  },
};

const george = {
  firstName: "George",
  lastName: "Harrison",
};

ringo.greet.apply(george, ["hi"]); // George says hi!

const nums = [1, 5, 2, 99, 3, 5];
Math.max(...nums); // This can work thanks to modern JS OR
Math.max.apply(null, nums); // This will work since it's an array already!

/*
! Bind
* You can "perma-bind" a function to a context and is fairly common.
*/

const conan = {
  name: "Conan",
  city: "Los Angeles",
  sing: function () {
    return `${this.name} sings La la la.`;
  },
};

const lisa = {
  name: "Lisa",
  city: "San Francisco",
};

conan.sing.call(lisa);
// If you need to do this over-and-over, you can use bind() instead.

conan.sing.bind(lisa); // returns a function as is but the value is bound to Lisa.
const lisaSing = conan.sing.bind(lisa);
console.log(lisaSing())