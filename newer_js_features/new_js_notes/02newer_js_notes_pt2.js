/*
! Features in Newer JavaScript Pt. 2

! Logical Assignment Operators
* Logical assignments are a combination of logical operators (&&, ||, ??) and assignment expressions.
*/

const todo = { priority: "", task: "Finish Editing Course" };

todo.priority ||= "Medium"
//? Is the same as the 'old' way:
// todo.priority || (todo.priority = "Medium")

//* If the left is truthy, the whole thing stops evaluating.
//* If it is falsy, the priority will be set to 'Medium'.
console.log(todo.priority);

/*
! && Assignment Operator
* The value to the right of the &&= will only be assigned if the value on the left is truthy.
*/
let num = 10;
num &&= 50; // num = 50
console.log(num);

let newNum = null;
newNum &&= 50;
console.log(newNum) // null

let loggedInUser = { username: "Taco" }
//? Old way:
if (loggedInUser) {
  loggedInUser = { ...loggedInUser, colorPreference: "purple" };
}

//? If there is a logged-in user, we're going to assign it to the existing loggedInUser plus the color preference.
//? New way:
loggedInUser &&= { ...loggedInUser, colorPreference: "purple" };

/*
! ?? Nullish Coalescing Operator
* If the left side is null or undefined, update it to the right side of '??='.
*/

let score;
score ??= 0;

function doSomeSetup(options = {}) {
  options.timeout ??= 3000; // Default timeout of 3 seconds
  options.retries ??= 5; // Default of 5 retriews
  console.log(options);
}

/*
! Promise.any
* Now for something completely different!
* Promise.any takes an iterable of Promise objects and returns a promise that is fulfilled by the FIRST given promise to be fulfilled or rejected if all of the given promises are rejected.
*/

const base_url = "https://pokeapi.co/api/v2/pokemon";

Promise.any([
  fetch(`http://nope.nope`),
  fetch(`${base_url}/2`),
  fetch(`${base_url}/3`),
  fetch(`${base_url}/4`),
  fetch(`${base_url}/5`),
  fetch(`${base_url}/6`),
])
  .then(firstToFinish => console.log('This is the first resolved value.', firstToFinish))
  .catch(error => {
    console.log('Some promise(s) was/were rejected.', error)
  })

