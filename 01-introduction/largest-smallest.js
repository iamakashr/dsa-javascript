// Write a function to return the largest number in an array.

const largestArray = [14, 5, 10, 0, 29, 8, 23, 2, 77];

function findLargest(arr) {
  let largest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }

  return largest;
}

console.log("Largest:", findLargest(largestArray));

// Write a function to return the smallest number in an array.

const smallestArray = [14, 5, 10, 29, 8, 23, 2, 77];

function findSmallest(arr) {
  let smallest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }

  return smallest;
}

console.log("Smallest:", findSmallest(smallestArray));


