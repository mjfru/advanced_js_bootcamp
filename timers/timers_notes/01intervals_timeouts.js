/*
! Built-in Browser APIs - Timers

! setTimeout
* Executes a function after waiting a specified number of milliseconds.
*/

const myTimeout = setTimeout(() => {
  console.log('Executed after 2 seconds.')
}, 2000);

setTimeout(function () {
  console.log('Times up!');
  alert('I am an alert!');
}, 4000)

function showNotification(message, duration) {
  const notification = document.createElement('DIV');
  notification.innerText = message;
  notification.className = 'notification';
  document.body.appendChild(notification);

  setTimeout(function() {
    notification.remove();
  }, duration)
}

/*
! setInterval
* Executres a function repeatedly with a fixed time delay between each call.
*/

const myInterval = setInterval(() => {
  console.log('This will repeat every 2 seconds')
}, 2000)
//
setInterval(function() {
  console.log("It's been two seconds!")
}, 2000);

//? Countdown Function
function startCountdown(duration) {
  let secondsRemaining = duration;
  const h1 = document.getElementById('timer');
  setInterval(function() {
    h1.innerText = secondsRemaining;
    console.log(secondsRemaining);
    secondsRemaining--;
  }, 1000);
}

startCountdown(10);

/*
! clearInterval
* Clears an interval set with setInterval, stopping the function from executing repeatedly.
*/

clearInterval(myInterval);
//
const id = setInterval(() => console.log('blah'), 1000);
clearInterval(id); // Stops the execution

//? For the above countdown, we could stop it like this:
//? Put the setInterval function in a variable
const intervalId = setInterval(function () {
  h1.innerText = secondsRemaining;
  secondsRemaining -= 1;
  if (secondsRemaining < 0) {
    clearInterval(intervalId);
    h1.innerText = 'Time is up!'
  }
})

/*
! clearTimeout
* Clears a timeout set with setTimeout, preventing the function from executing.
? Less common than clearInterval but comes into play when we deal with debouncing.
? Remember, setTimeout and setInterval give us IDs we can use if we store them in a variable.
*/

clearTimeout(myTimeout);

// HTML: <button id="cancel">Cancel Redirection</button>
const cancelButton = document.querySelector('#cancel');

const timeOutId = setTimeout(() => {
  window.location.href = "https://www.google.com";
}, 5000)

cancelButton.addEventListener('click', () => {
  clearTimeout(timeOutId);
  console.log('Redirection cancelled!');
})