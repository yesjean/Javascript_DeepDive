// Array.prototype.forEach
// for문을 대체할 수 있는 고차함수.
// 반복문을 추상화한 고차함수로서 내부에서 반복문을 통해 자신을 호출한 배열을 순회하면서 수행해야할
// 처리를 콜백 함수로 전달받아 반복 호출함.

const numbers = [1, 2, 3];
let pows = [];

// forEach 메서드는 numbers 배열의 모든 요소를 순회하면서 콜백 함수를 반복 호출한다.
numbers.forEach(item => pows.push(item ** 2));
console.log(pows); // [1, 4, 9]


// forEach는 콜백함수를 호출할 때 메서드를 호출한 요소값과 인덱스, forEach를 호출한 배열을 순차적으로 전달받을 수 있다.
// forEach 메서드는 콜백 함수를 호출하면서 3개(요소값, 인덱스, this)의 인수를 전달한다.
[1, 2, 3].forEach((item, index, arr) => {
    console.log(`요소값: ${item}, 인덱스: ${index}, this: ${JSON.stringify(arr)}`);
  });
  /*
  요소값: 1, 인덱스: 0, this: [1,2,3]
  요소값: 2, 인덱스: 1, this: [1,2,3]
  요소값: 3, 인덱스: 2, this: [1,2,3]
  */


// 원본 배열을 변경하지 않지만 콜백함수를 통해 변경가능
const numbers2 = [1, 2, 3];

// forEach 메서드는 원본 배열을 변경하지 않지만 콜백 함수를 통해 원본 배열을 변경할 수는 있다.
// 콜백 함수의 세 번째 매개변수 arr은 원본 배열 numbers2를 가리킨다.
// 따라서 콜백 함수의 세 번째 매개변수 arr을 직접 변경하면 원본 배열 numbers2가 변경된다.
numbers2.forEach((item, index, arr) => { arr[index] = item ** 2; });
console.log(numbers2); // [1, 4, 9]



// 반환값은 언제나 undefined
const result = [1, 2, 3].forEach(console.log);
console.log(result); // undefined