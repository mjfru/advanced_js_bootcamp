/*
! Debouncing
* Essentially adding a pause before some function is executed.
* Debouncing is used to make sure a function is called only after a certain amount of time has passed after it was last called.
? A common use-case for this is when dealing with events. (Think live searching)
*/

// HTML
// <input type"search" id="search" />

//? Before anything is changed, essentially every keystroke is making an 'API' call.
//? With debouncing, we can add a little delay to create a deliberate pause before firing off our code.
function queryAPI() {
  console.log("Searching our totally real API");
  console.log("Making an API request");
}

const searchInput = document.querySelector("#search");

let debounceTimeout;

searchInput.addEventListener("input", () => {
  // queryAPI();
  clearTimeout(debounceTimeout);
  debounceTimeout = setTimeout(() => {
    queryAPI();
  }, 800);
});

//? Let's simplify something like the above to give us a debounced version of a function.
function debounce(callback, delay) {
  let timeoutId;
  return (...arguments) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      callback(...arguments);
    }, delay);
  }
}

/*
! Throttling
* Another technique to control how often a function is executed, often in tandem with some event.
* This makes sure a function is called, at most, one time within some duration.
? Throttling is include in many libraries (for features such as infinite scroll) and it's more important to understand when to use it rather than be able to write throttling functions line-by-line.
* Useful with rapidly-moving events, mouse movements, scrolling, etc.
*/