function quickSort(array) {
  // 배열의 길이가 1보다 작으면 정렬을 할수가 없다.
  // 바로 return 해주자.
  if (array.length <= 1) return array;

  // 정렬 알고리즘

  const pivot = array[0]; // 배열의 첫 번째 요소부터

  // 중심축으로부터 작은것 큰것을 저장할 배열
  const left = [];
  const right = [];

  for (let i = 1; i < array.length; i++) {
    if (array[i] <= pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }

  // 재귀함수를 이용해 배열의 길이가 1일때까지 반복해주자.
  const returnLeft = quickSort(left);
  const returnRight = quickSort(right);

  return [...returnLeft, pivot, ...returnRight];
}

console.log(quickSort([3, 5, 1, 2, 6, 1, 9]));
