/*
! Numbers
* JavaScript represents numbers as floating point, like 1.234.
? Sometimes, this leads to wildly imprecise results!
In some cases, if you're often working with very small numbers...JS might not even be the best language to use!

*/

console.log(0.1 + 0.2); // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3) // false

/*
! Big Numbers
* BigInt() is used to work with very large numbers.
* Adding 'n' to the end of a number also indicates that it's a BigInt
? While BigInts can do mathematical operations, they can only do them with other BigInts.
*/

//? The largest number that can be displayed in JS
console.log(Number.MAX_VALUE);

//? This is the largest integer that we can -safely- do math with.
console.log(Number.MAX_SAFE_INTEGER);

BigInt("43546634534521324546")
const bigOne = 3929191058271842018194892n
console.log(typeof bigOne); // bigint

let largeNumber = BigInt(Number.MAX_SAFE_INTEGER);
// console.log(largeNumber + 2); error!
console.log(largeNumber + 2n);

/*
! Not a Number* (NaN)
* JavaScript's NaN value can be tricky and usually comes from:
  - Logical math errors, like 0 / 0
  - Imaginary numbers, like Math.sqrt(-1)
  - Conversion errors like: Number("nope")
* All NaN values are considered unique, so NaN === NaN is false!
? If you need to check for NaN, there are two different ways:
  - isNaN(n)
  This returns true if n is NaN or is a value that cannot be coerced into a number.

  - Number.isNaN(n)
  This returns true only if n is NaN -- everything else returns false!
*/

NaN === NaN // false
NaN == NaN // false

isNaN(0 / 0) // true
isNaN("nope"); // true

Number.isNaN(0 / 0); // true
Number.isNaN('nope'); // false, because it's a string

/* 
! ++x & x++
* Both are used to add one to a variable but there is a difference between these two!
? Using x++ is often useful as a return statement - return this value to caller, but bump it up for next time.
* Remember, there are decrement operators (--) that act like this as well.
*/

let x = 5;
let y = ++x; // add 1 to x, then evaluate. y and x are both 6.
console.log(y, x);

let a = 5;
let b = a++ // evaluate a and set b to that, then add 1 to a.
console.log(b, a)

class Counter {
  constructor() {
    this.current = 1;
  }
  next() {
    return this.current++;
  }
}

/*
! Semicolons in JavaScript
* You can write JavaScript with or without semicolons.
* If you omit them, they will be inserted by JS in a process known as ASI, automatic semicolon insertion.
? The recommendation is, use the style of your company/project and if it's new code, use semicolons.
*/