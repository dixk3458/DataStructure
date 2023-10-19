const array = [1, 1, 5, 124, 400, 599, 1004, 2876, 8712];

function binarySearch(array, findValue) {
  let leftIndex = 0;
  let rightIndex = array.length - 1;

  let midIndex = Math.floor((leftIndex + rightIndex) / 2);

  while (leftIndex < rightIndex) {
    if (array[midIndex] === findValue) {
      return midIndex;
    }

    if (array[midIndex] < findValue) {
      leftIndex = midIndex + 1;
    } else {
      right = midIndex - 1;
    }

    midIndex = Math.floor((leftIndex + rightIndex) / 2);
  }

  return -1;
}

console.log(binarySearch(array, 2876));
