// Array.prototype.shift 
// 원본 배열에서 첫 번째 요소를 제거하고 제거한 요소를 반환함.
// 원본 배열이 빈 배열이면 undefined 반환.
// 원본 배열 변경됨

const arr = [1, 2];

// 원본 배열에서 첫 번째 요소를 제거하고 제거한 요소를 반환한다.
let result = arr.shift();
console.log(result); // 1

// shift 메서드는 원본 배열을 직접 변경한다.
console.log(arr); // [2]