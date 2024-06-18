/*
! Performance API
* Allows the measurement of the performance of web pages and web apps.
? How long pages take to load, functions take to run, resources take to load, etc.

performance.mark() takes a name and represents a specific point in time.
Using another .mark() allows you to measure and compare using performance.measure(), taking in the name of what you want to compare.
*/

const performanceEntries = performance.getEntriesByName("resource");
performanceEntries.forEach(entry => {
  console.log(`Name: ${entry.name}, Duration ${entry.duration}`);
});


// Making an array of lots and lots of random numbers to eventually sort through...
// const largeArray = Array.from({ length: 10000 }, () => {
//   return Math.floor(Math.random() * 1000);
// });