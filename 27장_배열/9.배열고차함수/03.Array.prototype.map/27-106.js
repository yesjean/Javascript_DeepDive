// Array.prototype.map
// 자신을 호출한 배열의 모든 요소를 순회하면서 인수로 전달받은 콜백함수를 반복호출함
// 콜백함수의 반환값들로 구성된 새로운 배열을 반환함
// 원본 배열 변경되지 않음

const numbers = [1, 4, 9];

// map 메서드는 numbers 배열의 모든 요소를 순회하면서 콜백 함수를 반복 호출한다.
// 그리고 콜백 함수의 반환값들로 구성된 새로운 배열을 반환한다.
const roots = numbers.map(item => Math.sqrt(item));

// 위 코드는 다음과 같다.
// const roots = numbers.map(Math.sqrt);

// map 메서드는 새로운 배열을 반환한다
console.log(roots);   // [ 1, 2, 3 ]
// map 메서드는 원본 배열을 변경하지 않는다
console.log(numbers); // [ 1, 4, 9 ]




// forEach는 언제나 undefined 반환, 단순히 반복문을 대체하기 위한 고차함수
// map은 새로운 배열을 반환함, 요소값을 다른 값으로 매핑한 새로운 배열을 생성하기 위한 고차함수

// map 메서드를 호출한 배열과 map 메서드가 생성한 배열은 1:1 매핑함. 똑같음. 
