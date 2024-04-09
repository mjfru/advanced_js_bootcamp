/*
! Asynchronous JavaScript
In the next few note pages, the following topics/goals will be covered:
  - Examining callbacks in context of asynchronicity
  - Understanding the role of promises
  - Understanding the role of async / await
  - Seeing common patterns and how to solve them with async / await

! Callbacks
* A callback is a function passed to another function for it to call.
? Many functional programming patterns use these and are userful for seperating processing patterns from business logic.

? Used in event-driven programming too by registering a function to be called when an event happens.

? Common in asynchronous code, such as setTimeout() and setInterval()
*/

// let paidInvoices = invoices.filter(inv => inv.owed <= 0);
// ${"myForm"}.on("submit", sendDataToServer);


const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
nums.filter(function (num) {
  return num % 2 === 0;
});

function sayHi() {
  console.log("Hi!!");
}

setTimeout(sayHi, 3000);

/*
? Why can't we run code like this?

-- Pause for a second
stopHere(1000); 
-- Now this code runs:
-- Get via AJAX
var response = ajaxLibrary.get('/page');
-- And voila, our response!
! Because JS is single-threaded, only one bit of code can run at once!
? If JS stopped there, it couldn't do other things like responding to events in the browser (clicks, etc.) and/or repaint the DOM changes in the browser.
* By having a callback function for "once-async-thing-is-done", JS can finish running your code as quickly as possible; allowing it to get to other tasks ASAP.
* The problem is that sequential callbacks can lead to hard-to-understand code...'callback hell'.

! Promises
* Promises provide an alternative way to think about asynchronicity and is a -one-time guarantee of future value-.
? Fetch returns a promise AUTOMATICALLY to us, an object, for an eventual situation (data from an API, an error, etc.).
* A promise has three different states and can be in one at a time:
  1. Pending - It doesn't yet have a value
  2. Resolved - It has successfully obtained a value
  3. Rejected - It failed to obtain a value for some reason

! .then & .catch
* In order to gain access to the data, the value that promises are resolved or rejected with, we chain on .then() and .catch().
? The callback to .then() will run if the promise is RESOLVED and grants us access to the promise's resolved value.
? .catch() runs if the promise is REJECTED and typically has access to some reason behind the rejection.

! Promise Chaining
* When calling .then() on a promise, we can return a NEW promise in the callback.
  - You can chain asychronous operations together with .then() calls.
* You only need ONE .catch() at the end and you don't have to catch every promise.
*/