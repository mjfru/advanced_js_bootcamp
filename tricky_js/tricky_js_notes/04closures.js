/*
! JavaScript Closures
* A function inside of a function that has access to the outer functions variables.
 * Or, the ability for inner functions to remember variables defined in outer functions, long after the outer function has returned.
 * They allow us to create a kind of 'private' variable, unclogging our globally-scoped variables and give us the ability to force people to use functions to access values.
*/

function outerFunction() {
  let outerVariable = "I am from outer";
  function innerFunction() {
    console.log("I am the inner function.");
    console.log(`Outer variable is... '${outerVariable}'`);
  }
  return innerFunction;
}

const myClosure = outerFunction();
myClosure();

function idGenerator() {
  let count = 1;
  return function generate() {
    return count++;
  }
}

const nextId = idGenerator();
nextId();

function createCounter() {
  let count = 0;
  return {
    increment: function() {
      return count++
    },
    decrement: function() {
      return count--
    },
    getCount: function() {
      return count;
    }
  }
}

const counter = createCounter();
console.log(counter.increment());

/*
! Factory Functions
* Functions that return other functions; a good example of closures!
*/

function createExponentFunction(exp) {
  return function(val) {
    return val ** exp;
  }
}

const square = createExponentFunction(2);
const cube = createExponentFunction(3);
console.log(square(2));
console.log(cube(2));


function uniqueIdGenerator(prefix) {
  let id = 0;
  return function () {
    id += 1;
    return `${prefix}${id}`;
  };
}

const getBookId = uniqueIdGenerator("book");
const getUserId = uniqueIdGenerator("user_");
console.log(getBookId());
console.log(getUserId());

/*
! Event Listeners & Closures
*/

// HTML: <button>Click Me!</button>

//? Rather than the usual way of making a global variable and interacting with it in this function, let's make an immediately-invoked function and use closures.
document.querySelector('button').addEventListener('click', (function() {
  let count = 0;
  return function() {
    count += 1;
    console.log(`You clicked me ${count} times.`);
  };
}));

//? Let's say we had multiple buttons and we pass in an id as an argument.
function createCounterButton(id) {
  const btn = document.getElementById(id);
  let count = 0;
  btn.addEventListener('click', function () {
    count += 1;
    btn.innerText = `Clicked ${count} times.`;
  });
}

createCounterButton("btn1");

/*
! Closures with Loops
*/

setTimeout(function() {
  console.log("Time's up!")
}, 2000)

for(let i = 1; i < 6; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000 * i);
}