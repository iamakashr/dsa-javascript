// Write a function to search for an element in an array.
// If the element is present, return its index; otherwise, return -1.

const searchArray = [4, 5, 10, 0, 3, 2];

function searchElement(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }

  return -1;
}

console.log("Search Result:", searchElement(searchArray, 32));

// Write a function to count the number of negative numbers in an array.

const negativeArray = [-4, 5, -10, 0, -9, 8, -3, 2, -7];

function countNegativeNumbers(arr) {
  let negativeCount = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      negativeCount++;
    }
  }

  return negativeCount;
}

console.log("Negative Count:", countNegativeNumbers(negativeArray));
