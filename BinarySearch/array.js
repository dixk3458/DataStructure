// 배열을 이용한 이진 탐색 트리
// 항상 정렬 되어있어야한다.

const array = [1, 1, 5, 124, 400, 599, 1004, 2876, 8712];

// 배열에서 해당 값을 찾아줘
function binarySearch(array, findValue) {
  // left,right,mid를 초기화 해준다.
  let left = 0;
  let right = array.length - 1;
  // 홀수값이 발생할수도있어.
  // Math.floor()를해주자.
  let mid = Math.floor((left + right) / 2);

  while (left <= right) {
    // 만약 순회중 mid가 findValue라면 바로 mid 위치 반환
    if (array[left] === findValue) {
      return left;
    }

    if (array[right] === findValue) {
      return right;
    }

    if (array[mid] === findValue) {
      return mid;
    }

    if (array[mid] < findValue) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
    mid = Math.floor((left + right) / 2);
  }
  // left 가 right보다 작을때까지 반복을 했는데, 못찾았으면
  // -1를 반환해준다.
  return -1;
}

console.log(binarySearch(array, 8712));
