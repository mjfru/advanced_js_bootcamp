/*
! ArrayUtils Exercise

? 1. Implement a class named ArrayUtils that cannot be instantiated and contains static methods average and max.
If the class is instantiated throw an error with the message 'ArrayUtils cannot be instantiated.'

? 2. The average method should return the average of an array of numbers.
If the array is empty, throw an error with the message 'Array cannot be empty.'

? 3. The max method should return the largest number from an array of numbers.
You can assume you will always get passed an array of numbers
*/

class ArrayUtils {
  constructor() {
    throw new Error('ArrayUtils cannot be instantiated.')
  }
  static average(arr) {
    if (arr.length === 0) {
      throw new Error ('Array cannot be empty.');
    } else {
      let total = 0;
      for (let num of arr) {
        total += num;
      }
      return total / arr.length;
    }
  }
  
  static max(arr) {
    if (arr.length === 0) {
      throw new Error ('Array cannot be empty.')
    } else {
      let max = arr[0];
      for (let num of arr) {
        if (num > max) {
          max = num;
        }
      }
      return max;
    }
  }
}

console.log(ArrayUtils.average([1, 2, 3]));
console.log(ArrayUtils.max([3, 4, 1, 6, 8, 4]))