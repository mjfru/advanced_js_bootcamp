/*
! Async & Await Basics
* These are language keywords for working with promises.

* You can declare ANY function to be async but they always return promises.
It looks synchronous but doesn't block JavaScript from running.

* Inside of an async function, we can then use await.
! Await pauses the execution.
! You can await ANY promise, even other async functions.
? Await waits for a promise to resolve and evaluates to its resolved value, then resuming execution.
Think of the await keyword like a pause button.

* Both of these keywords need to be used ~~together~~.
*/

async function funcName() {
  const result = await fetch('https://yoururlhere.com');
  console.log(result);
}
//! Without 'async', it would just return a pending promise, not the data we expect.

/*
! Error Handling with Async
* We use try/catch to handle errors with modern async JavaScript.
? To do this, you wrap your code that might not work / give errors in a try {} block and chain on catch {} to handle that error.
Try can wrap around multiple blocks of code too, caught by a single line as well.
*/

async function fetchFakeWebsite() {
  try {
    const res1 = await fetch(`http://nope.nope`); 
    // Results in an obvious error.
    console.log(res1);
  } catch(error) {
    console.log('Something went wrong', error);  
  }
}

/*
! Comparing .then/.catch and async/await
* Under the hood, they do the same thing.
Async/Await are the modern improvement; code is written more naturally.
? However, there are a few cases where it's easy to deal with promises directly.

TODO: Situation #1 - Need to make several AJAX calls and do things as they return.
(Send off a bunch of requests and collect their responses.)
*/

let results = [];

fetch("1")
  .then(function f1(r1) {
    doThing(r1);
  });
fetch("2")
  .then(function f1(r2) {
    doThing(r2);
  });
fetch("2")
  .then(function f1(r3) {
    doThing(r3);
  });
// Rest runs while this is happening.

/*
TODO: Situation #2 - Need to make AJAX calls one-at-a-time, in order:
*/
//? Promise Version:
const results2 = [];
fetch("/1")
  .then(function f1 (r1) {
    results.push(r1);
    return fetch("/2");
  })
  .then(function f2 (r2) {
    results.push(r2);
    return fetch("/3");
  })
  .then(function f3 (r3) {
    results.push(r3);
  //! And here is the final list of results
  });

//? Async/Await Version:
const r1 = await fetch("/1");
const r2 = await fetch("/2");
const r3 = await fetch("/3");

let results2Async = [r1, r2, r3];
console.log(results);