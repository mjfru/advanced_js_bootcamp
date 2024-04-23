/*
! Functional Programming (FP)
* A new programming paradigm, a new way to think and structure our code.
* FP emphasizes all computation as the evaluation of a series of functions.
" The process of building software by composing pure functions, avoiding shared state, mutable data, and side-effects."
* FP is often declarative rather than imperative, and application state flows through pure functions.
? You've seen things like: map, filter, some/every, find/findIndex, reduce that are key methods in FP.
* FP avoids: looping, mutation/shared state, variable declarations, and more.
*/

// Imperative Programming (Using statements and code to manipulate the program's 'state'.)
let sum = 0;
for(let i = 1; i <= 5; i++) {
  sum += 1;
}

// Functional Programming
[1,2,3,4,5].reduce((acc, val) => acc + val, 0);

const nums = [1,2,3,4,5,6,7,8,9];

// Imperative
const evens = [];
for(let num of nums) {
  if (num % 2 === 0) {
    evens.push(num);
  }
}

// Functional
nums.filter(n => n % 2 === 0);

/*
! First Class Functions
*/
//? This works the same on its own or stored in a variable, array, etc.
//* JS doesn't care, it treats them all the same.
const func = function greet(person) {
  console.log(`Hello there, ${person}.`)
} 

func('Gracie')

const funcs = [
  function greet (person) {
    console.log(`Hello there, ${person}.`);
  },
  function part (person) {
    console.log(`See you, ${person}.`)
  }
]

funcs[1]('Gracie');

//* We can provide functions as arguments too and we do this all the time!
function callWithBlue(func) {
  func('Blue');
}

/*
! Writing Pure Functions
* Allow us to write predictable and simple code.
* They always give the same return value for the same arguments, cannot depend on any mutable state, and are side-effect free.
? Side-effects may include I/O (writing to the console or log file), modifying a mutable object, reassigning a variable, etc.
*/

// Impure (We are mutating the value variable):
let value = 2;
function squareAndUpdate(num) {
  value = num * num;
  return value;
}

const color = ['red', 'orange']

function addToArray(arr, value) {
  return arr.push(value);
}

// Pure (No side-effects, no mutations):
function square(num) {
  return num * num
}

function pureAddToArray(arr, value) {
  return [...arr, value]; 
  // Returning a copy instead of mutating the original.
}

/*
! Higher Order Functions
* Refers to a function that receives another function as an argument, returns a function, or does both.
? Usually when people use this term, they're referring to a functio that returns another.
*/

function doTwice(func) {
  func();
  func();
}

doTwice(function () {
  console.log("Here it is!")
})

function multiplyBy(factor) {
  return function(number) {
    return number * factor
  }
}

multiplyBy(3); // Returns a function as is.

const triple = multiplyBy(3);
triple(10) // 30

const multByTen = multiplyBy(10);
multByTen(10); // 100