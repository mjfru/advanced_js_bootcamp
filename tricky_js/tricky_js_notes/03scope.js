/*
! Scope & Closure in JavaScript
* In the past, var was the only way to declare variables.
* These days, we declare variables with let and const, which are block-scoped.
*/

var color = 'red'; // available everywhere
function blah() {
  console.log(color); // red
  var animal = "Cuttlefish"
  console.log(animal); // Cuttlefish
}

if(true) {
  console.log(color); // red
  var food = "Chicken Parm";
}

console.log(food); // Chicken Parm, it's not scoped!
// console.log(animal); // Error, scoped to the function

for(var i = 0; i < 10; i++) {
  console.log(i);
}

console.log(i) // Still have access, even after the loop. It's scoped globally.

/*
! The Scope Chain
* JS looks for variables in this order: Local -> Outer functions -> Global
*/

let age = 10; // Age in the global scope
function outer() {
  let age = "ageless" // Age in the outer function
  if(true) {
    let age = 99;
    console.log(age); // Age in the local scope
  }
}

//? Consider this in relation to static scope:

let favAnimal = "Barn Owl";

function printAnimal() {
  console.log(favAnimal); 
}

printAnimal();

function alsoPrintAnimal() {
  let favAnimal = "Burrowing Owl";
  printAnimal();
}

alsoPrintAnimal(); // Barn Owl

/*
! Hoisting
* The behavior of JavaScript of moving our variable declarations to the top of their enclosing scope.
? The variable is legal but equal to undefined until definition.
*/

console.log(food); // undefined
var food = "pizza";

/*
In this example, JS moves
var food = undefined;
to the top, listens and responds to console.log() and sets
food = "pizza"
after that.
*/

function random(){
  console.log(color); // No error, but it's undefined at this point!
  var color = "blue"; 
}

/*
! IIFEs - Immediately Invoked Function Expresses
* Still a part of JS today but were much more popular years ago.
We have some function that is basically wrapped in () and immediately runs.
? Why would we want this? 
? Privacy, anything declared in that function cannot be found or invoked again.
? Avoiding global scope pollution, especially when var was used to declare variables; the window object will not be changed / affected after invoking.
*/

(function () {
  console.log("hello from an iife!");
})();
//? This is immediately invoked.