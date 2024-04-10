/*
! Async Helper Methods

! Promise.all();
* Promise.all accepts an array of promises and returns a new promise.
* New promise will resolve when every promise in the array resolves and will be rejected if any promise in the array is rejected.
*/

// Array of Promises
const lotsOfFetchCalls = [
  fetch(`${BASE_URL}/1`),
  fetch(`${BASE_URL}/2`),
  fetch(`${BASE_URL}/3`),
  fetch(`${BASE_URL}/4`),
  fetch(`${BASE_URL}/5`),
  fetch(`${BASE_URL}/6`)
];

// A new SINGLE promise that you can wait or use .then() on.
Promise.all(lotsOfFetchCalls).then(results => {
  // If ALL the promises in the array resolve:
  console.log("Promise.all is done and resolved.");
  console.log(results);
}).catch(error => {
  console.log("One of the promises was rejected.")
  console.log(error);
})