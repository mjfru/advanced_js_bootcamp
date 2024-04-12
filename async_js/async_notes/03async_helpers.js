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

/*
! Promise.allSettled()
* Promise.allSettled() also returns a new promise after taking in an array of them.
* However, the promise resolves after all of the given promises have either fulfilled or rejected, with an array of objects that each describes the outcome of each promise.
? So, you'll get an array of promises that can have the status of either fulfilled or rejected; from there, you can continue to use them.
*/

const fulfilled = results.filter(r => r.status === 'fulfilled');

/*
! Promise.race()
* Many calls, first one wins! Promise.race() accepts an array of promises and returns a -new- promise...once again!
* This new project will resolve or reject as soon as one promise in the array resolves or rejects!
*/

/*
! Building Our Own Promises
* You can use Promise with the new keyword to make your own promises.
The syntax takes some getting used to, however.
* Promise accepts a single function (fn) as an argument.
  - fn accepts two functions as arguments, resolve and reject.
  - Pass resolve a value for the promise to resolve to that value
  - Pass reject a value for the promise to reject to that value
*/

// setTimeout(function() {
//   console.log('Hi!')
// }, 2000)

//? Make me a new Promise. In the promise, we're going to set a timeout for the duration of our choosing.
//? After that duration, we'll call resolve, fullfilling the promise.
function wait(duration) {
  const p = new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve('this is the resolved value!');
    }, duration)
  });
  return p;
}

async function demo() {
  console.log('hi');
  await wait(2000);
  console.log('there');
}

demo()

function randomRejectResolve() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const rand = Math.random();
      if(rand < 0.5) {
        resolve("Pickles");
      } else {
        reject("Error!")
      }
    }, 2000);
  });
};

randomRejectResolve()
  .then(val => console.log("Inside then ", val))
  .catch(e => console.log("Inside catch", e));