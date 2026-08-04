// write a function to return the Secondlargest number in an array

let arr = [14, 5, 10, 99, 99, 8, 23, 2, 77];

function secondLargest(arr) {
  if (arr.length < 2) {
    return null;
  }

  let firstLargest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== firstLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}

console.log(secondLargest(arr));


