/*
! Advanced Topic - Currying
* A curried function can be called with any number of arguments.
* If you call it with fewer arguments than it takes, it returns a 'smaller' partial, which you can then call with remaining arguments.
*/

// Takes three arguments
// f(a,b,c);

// Curried into three functions chained together
// f(a)(b)(c);

// Non-curried
function add(a, b, c) {
  return a + b + c;
}

// Curried:
function addCurry(a) {
  return function(b) {
    return function (c) {
      return a + b + c;
    }
  }
}
console.log(addCurry(1)(2)(3)) // 6

/*
! A 'fancier' Curried Function
We can take a function, create a curried version that can be called with any number of arguments.
*/

function add3(a, b, c) {
  return a + b + c;
}

// const curry(add3); // Get back a curried version of 'add3'
function curry(fn) {
  return function curried(...args) {
    if(args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function(...args2) {
        return curried.apply(this, args.concat(args2));
      }
    }
  }
}

const curriedAdd = curry(add3);

add3(1, 2, 3);  // Works! -- 6
add3(1);        // returns a function that takes 'b' and 'c'
add3(1, 2);     // returns a function that takes 'c'
add3(1)(2)(3);  // Also works -- 6