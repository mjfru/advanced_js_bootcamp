/*
! Range Generator Exercise
Implement a generator function rangeGenerator that takes two arguments start and end and yields numbers in the range[start, end].

If start is greater than end, the generator should yield numbers in a reverse order.
*/

function* rangeGenerator(start, end) {
  if (end >= start) {
    while (start <= end) {
      yield start;
      start++;
    }
  } else {
    while (start >= end) {
      yield start;
      start--;
    }
  }
}

console.log(rangeGenerator(1, 5));