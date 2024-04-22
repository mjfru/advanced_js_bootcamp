/*
! Special Add Exercise
Write a function called specialAdd. If you give this function a number, it
returns a new function to you.
If you give this function no arguments, it returns the total of all the numbers you've passed to it so far.
*/

function specialAdd(total) {
  if (total === undefined) {
    return 0;
  } else {
    return function addNext(num) {
      if (num === undefined) {
        return total;
      } else {
        total += num;
        return addNext;
        }
      }
    }
  }

let add = specialAdd();
console.log(add);