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
console.log(lisaSing())

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