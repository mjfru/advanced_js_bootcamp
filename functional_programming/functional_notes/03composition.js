/*
! Composition
* Function composition is a mechanism of combining multiple functions to build a more complicated one.
* The result of each function is passed to the next one.
? In math, this looks like f(g(x)).
* When composing functions together, it's often best to not use methods, but instead create indepedent functions with a minimal number of arguments.
*/

const add = (a, b) => a + b;
const multiply = (a, b) => a * b;
const square = (a) => a * a;

add(10, multiply(10, 20)); // 210
square(add(1,3)) // 16

const addAndSquare = (a, b) => square(add(a, b));
addAndSquare(2, 3); // 25

function lowerCaseString(str) {
  return str.toLowerCase();
}

function splitWords(str) {
  return str.split(" ");
}

function joinWithDash(array) {
  return array.join("-");
}

joinWithDash(
  splitWords(
    lowerCaseString(
      "My favorite Function")));
// 'my-favorite-function'

//! Writing a simple compose function
function compose(fn1, fn2) {
  return function(val) {
    return fn1(fn2(val))
  }
}

function repeatTwice(str) { return str.repeat(2); }
function upperCase(str) { return str.toUpperCase(); }

console.log(repeatTwice('lol'));

const repeatAndUpperCase = compose(repeatTwice, upperCase);

const squareV2 = (a) => a * a;
const double = (a) => a * 2;

const doubledAndThenSquared = compose(squareV2, double);
console.log(doubledAndThenSquared(5));

//? With a more complex compose, we could have something like this:
function compose(...functions) {
  return function(data) {
    return functions.reduceRight((val, func) => func(val), data);
  };
}

function lowerCaseString(str) {
  return str.toLowerCase();
}

function splitWords(str) {
  return str.split(" ");
}

function joinWithDash(array) {
  return array.join("-");
}

function replaceS(str) {
  return str.replaceAll('s', '$');
}
console.log(replaceS('sOs'));

const slugify = compose(joinWithDash, splitWords, lowerCaseString);
console.log(slugify("Fancy PRODUCT 12"))

const lowerAndReplaceS = compose(replaceS, lowerCaseString);
console.log(lowerAndReplaceS('sorry for sucking at javascript'));