/* 
// Write a function to search elemnts in an array if the elemt is present then return its index if not then return -1

/* let arr = [4, 5, 10, 0, 3, 2];

function searchElement(arr, x) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == x) {
      return i;
    }
  }
  return -1;
}
console.log(searchElement(arr, 32)); */

/* // Write a function that return number of negativ numbers in an array

let arr = [-4, 5, -10, 0,-9, 8, -3, 2, -7];

function countNegNum(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count++;
    }
  }
  return count;
}

console.log(countNegNum(arr));
 */

/* // write a function to return the largest number in an array

let arr = [14, 5, 10, 0, 29, 8, 23, 2, 77];

function findLargest(arr) {
  let lgNum = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > lgNum) {
      lgNum = arr[i];
    }
  }
  return lgNum;
}

console.log(findLargest(arr)); */


/* // write a function to return the smallest number in an array

let arr = [14, 5, 10, 29, 8, 23, 2, 77];

function findSmallest(arr) {
  let smallest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return smallest;
}

console.log(findSmallest(arr)); */
