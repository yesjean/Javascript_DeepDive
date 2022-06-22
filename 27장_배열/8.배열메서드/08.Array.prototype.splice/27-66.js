// filter를 사용하여 특정 요소 삭제
// 특정요소가 중복된 경우 모두 제거됨

const arr = [1, 2, 3, 1, 2];

// 배열 array에서 모든 item 요소를 제거한다.
function removeAll(array, item) {
  return array.filter(v => v !== item);
}

console.log(removeAll(arr, 2)); // [1, 3, 1]