// Array.prototype.filter
// 자신을 호출한 배열의 모든 요소를 순회하면서 인수로 전달받은 콜백함수를 반복호출함
// 콜백함수의 반환값이 true인 요소로만 구성된 새로운 배열을 반환함.
// 원본 배열은 변경되지 않음

const numbers = [1, 2, 3, 4, 5];

// filter 메서드는 numbers 배열의 모든 요소를 순회하면서 콜백 함수를 반복 호출한다.
// 그리고 콜백 함수의 반환값이 true인 요소로만 구성된 새로운 배열을 반환한다.
// 다음의 경우 numbers 배열에서 홀수인 요소만을 필터링한다(1은 true로 평가된다).
const odds = numbers.filter(item => item % 2);
console.log(odds); // [1, 3, 5]


// filter는 필터링 조건을 만족하는 특정 요소만 추출하여 새로운 배열을 만들고 싶을 때 사용함. 