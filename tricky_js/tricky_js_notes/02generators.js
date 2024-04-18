/*
! Tricky JS - Generators
* JavaScript can have generator functions -- functions that return a Generator that can be lazily looped over.
* They can pause their execution and then resume it, producing a series of values on demand.
? These are not so common, perhaps because of being new or people being used to doing things 'the old way'.
 */

// Produces an infinite loop of even numbers but yields (waits for instructions) at evey step
// Note the *
function* evens(n) {
  while (true) {
    yield n;
    n += 2;
  }
}
// Called by itself, it returns a generator object!

// Make a generator that returns even numbers from 2 on.
let allEvens = evens(2);

// Lazily get the first 10 even numbers
for (let i = 0; i < 10; i++) {
  // the next() tells the generator to stop yielding and produce the next result
  console.log(allEvens.next().value);
}

function* myCats() {
  yield 'Blue' // Always the first thing myCats() will return
  yield 'Kit'
  yield 'Mocha'
  yield 'Java' // Always the last, provided on the 4th call.
}

function* fibonacci() {
  let a = 0,
  b = 1;

  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

const fibGen = fibonacci();

/*
? When are Generators useful in JavaScript?
Let's say you have a large batch of some resource, images or something, and you're making an image gallery.
It doesn't make sense to display ALL the pictures at once, but rather 5-10 at a time.
When a user scrolls, they get more images loaded for them.
*/

const allImages = Array.from(
  { length: 1000 },
  (_, i) => `https://placeimg.com/640/480/any?image=${i}`
)

function*  getBatchOfImages(images, batchSize = 10) {
  let currentIndex = 0;
  while (currentIndex < images.length) {
    yield images.slice(currentIndex, currentIndex + batchSize);
    currentIndex += batchSize;
  }
}

const imageGeneration = getBatchOfImages(allImages);

/*
! Array.from()
* A really useful method that helps us generate new arrays from things that aren't initially an array.
? These are used often in DOM / Node lists.
* It can take a second argument, a mapping function, to do something with each value.
*/

console.log(Array.from('hello'))
console.log(Array.from([1, 2, 3])) // no change

const buttons = document.querySelectorAll("button");
// As is, this is a node list, not technically an array.
Array.from(buttons).filter(x => x);

Array.from("abcd", x => x.toUpperCase());