/*
! Functional Programming Intro - Pt. 2
! Immutability
* Ensuring once a piece of data is created, it cannot be changed.
? Extra precautions have to be taken to prevent variables from mutating, such as the rest operator and the freeze method.
*/

const person = { name: 'Teddy', age: 2 };
Object.freeze(person);
// Freezing prevents this object from being manipulated.

const nums = [1, 2, 3, 4];

function push(arr, val) {
  // ! This would mutate the original array, so we won't do this in functional programming.
  // arr.push(val)
  //* This makes a copy but doesn't change the original.
  return [...arr, val];
}

function removeLastItem(arr) {
  //? Impure:
  // arr.pop();

  //? Pure:
  return arr.slice(0, -1);
}

/*
! Recursion
* The concept of recursion is where a function calls ITSELF to solve a problem.
*/
// Factorial
// 3 * 2 * 1
//? NOT a recursive approach
function factorial(n) {
  let result = 1;
  for (let i = n; i > 1; i--) {
    result *= i;
  }
  return result;
}

//? Factorial:
function recursiveFactorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * recursiveFactorial(n - 1);
} 

recursiveFactorial(4);
  // return 4 * factorial(3)
    // return 3 * factorial(2)
      // return 2 * factorial(1)
        // return 1;

/*
! Partial Application
* The process of executing a function with some or all of its arguments.
* The partially applied function then gets returned for later use.
? We've seen this idea before with the bind function.
*/
function greeting(greeting, name) {
  console.log(`${greeting}, ${name}!!`);
}

const aussieGreet = greeting.bind(null, "G'day"); 
// Returns a new function with the greeting 'baked-in'.
// 'I don't care what the first argument is but I want to bind that second argument.'

greeting('hey there', 'tim');
aussieGreet('Jim');

//? Building a partial function
function multiply(a, b) {
  return a * b;
}

function partial(func, ...fixedArgs) {
  return function(...remainingArgs) {
    return func(...fixedArgs, ...remainingArgs);
  }
}

//? Instead of doing this
// const double = multiply.bind(null, 2);
// const triple = multiply.bind(null, 3);
//? Fixed arguments are '2'
//? Func is 'multiply'
const double = partial(multiply, 2);
const triple = partial(multiply, 3);

//? Why this is helpful
//* We might only know certain values when functions are invoked or we want to pre-bind values

function calculateTax(rate, amount) {
  const total = rate * amount;
  const rounded = total.toFixed(2);
  return Number(rounded);
}

const calculateCASalesTax = partial(calculateTax, .07);
const calculateNJSalesTax = partial(calculateTax, .06);