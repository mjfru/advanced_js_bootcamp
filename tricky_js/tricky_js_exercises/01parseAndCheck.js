/*
! parseAndCheck Exercise
Create a function parseAndCheck that takes an array of values.

The function should return a new array with all values parsed to a number using parseFloat.

If the parsing results in a NaN, throw an error with the message "Invalid Number"
*/

const parseAndCheck = (array) => {
  let newArray = []
  for (let item of array) {
    if (isNaN(item)) {
      throw new Error("Invalid Number")
    } else {
      let newItem = parseFloat(item);
      newArray.push(newItem)
    }
  }
  return newArray;
}

parseAndCheck([3, 6, 22])