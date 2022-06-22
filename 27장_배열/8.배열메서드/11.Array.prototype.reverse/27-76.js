// Array.prototype.reverse
// 원본 배열의 순서를 뒤집음
// 원본 배열이 변경됨
// 반환값은 변경된 배열이다.

const arr = [1, 2, 3];
const result = arr.reverse();

// reverse 메서드는 원본 배열을 직접 변경한다.
console.log(arr); // [3, 2, 1]
// 반환값은 변경된 배열이다.
console.log(result); // [3, 2, 1]