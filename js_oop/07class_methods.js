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
*/