/*
! Guessing Game Exercise
Write a function called `guessingGame` which returns a function that allows you to guess a random whole number between 0 and 99. 

Every time you create a new game, it should select a *new* random number, and keep it secret from the player.

Once the game has started, you can guess the number.
The game should tell you whether your guess is too high, too low, or correct.

After a correct guess, the game ends.
*/

function guessingGame() {
  const randomNumber = Math.floor(Math.random() * 100);
  console.log(randomNumber);
  let guesses = 0;
  let isOver = false;
  
  return function playerGuess(userGuess) {
      if (isOver) return 'The game is over, you already won!';
      guesses++;
      if (userGuess === randomNumber) {
        isOver = true;
        const guess = guesses === 1 ? "guess" : "guesses"
        return `You win! You found ${randomNumber} in ${guesses} ${guess}.`
      } 
      if (userGuess > randomNumber) {
        return `${userGuess} is too high!`
      } 
      if (userGuess < randomNumber) {
        return `${userGuess} is too low!`
      }
  }
}


const game = guessingGame();
game(60);