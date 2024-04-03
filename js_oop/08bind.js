/*
! Bind
* You can "perma-bind" a function to a context and is fairly common.
* It is a method on functions that returns a bound copy of the function!
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
console.log(lisaSing());

/*
! Binding Arguments to a Function:
* You can also bind arguments to function, effectively baking them into the function.
*/

function applySalesTax(taxRate, price) {
  return price + price * taxRate;
}
console.log(applySalesTax(0.005, 100));

// "null" here means it doesn't matter what 'this' is; the tax rate stays static and the only thing that changes is the price.
const applyCASalesTax = applySalesTax.bind(null, 0.0725);
// This is a copy of applySalesTax with 0.0725 permanently bound to it.
console.log(applyCASalesTax(50));

function multiply(a, b) {
  return a * b;
}

// '2' is baked-in as 'a' here; essentially returning 2 * b every time.
const double = multiply.bind(null, 2);
const triple = multiply.bind(null, 3);
// Even passing in arguments to this won't change the result.
const alwaysNine = multiply.bind(null, 3, 3);

/*
! Where do you encounter this? Why does it matter?
* When you do not directly call functions and instead JS calls them, a keyword 'this' is created for you.
  - Event Listeners
  - Timers
  - Callback Functions (map, filter, etc.)
* We can use bind when we want greater control over what exactly 'this' refers to.
*/

const btn = document.querySelector("#clickMe");
btn.addEventListener("click", conan.sing);
// Using this example from our last note page, we  could not see 'Conan' here, it would be blank because 'this' refers to the button element.

//? To fix this, we can use .bind() to explicitly tell JS what we want 'this' to be.
btn.addEventListener("click", conan.sing.bind(conan));

/*
! Bind with Timers
*/

class Counter {
  constructor(startingNum = 0, incrementAmount = 1) {
    this.count = startingNum;
    this.incrementAmount = incrementAmount;
  }
  start() {
    setInterval(
      function () {
        console.log(this); //! Value of 'this' is the window!
        //? One approach to fix this is to use .bind() and give it a set value for 'this'.
        console.log(this.count);
        this.count += this.incrementAmount;
      }.bind(this),
      1000
    ); //! This 'this' is now refering and bound to counter.
  }
}

const counter = new Counter();
counter.start();

/*
! Arrow Functions & 'This'
* Arrow functions DO NOT make their own 'this'.
*/

class Cat {
  constructor(firstName) {
    this.firstName = firstName;
  }

  superGreet() {
    console.log(`#1: I am ${this.firstName}.`); // Works!

    setTimeout(function () {
      console.log(`#2: I am ${this.firstName}.`); // Uh-oh...undefined (referring to the window...)
    }, 500);

    //! This works because we don't get a new value for the keyword 'this'; it still refers to the Cat instance.
    setTimeout(() => {
      console.log(`#3: I am ${this.firstName}.`);
    }, 1000);
  }
}

let kitty = new Cat("Kitty");
kitty.superGreet();

/*
! Key Takeaways from 'this' Section
  1. Don't lose your 'this'; always know what the value will be or.
  2. 'This' is a reserved word whose value is determined only at the point of function execution.
  3. If you don't call a function yourself, you need to ensure JS knows what context 'this' should be.
*/
