// Array.prototype.push
// 인수로 전달받은 모든 값을 원본 배열의 마지막 요소로 추가하고 변경된 length 프로퍼티 값을 반환함.
// 원본 배열 변경됨.

const arr = [1, 2];

// 인수로 전달받은 모든 값을 원본 배열 arr의 마지막 요소로 추가하고 변경된 length 값을 반환한다.
let result = arr.push(3, 4);
console.log(result); // 4

// push 메서드는 원본 배열을 직접 변경한다.
console.log(arr); // [1, 2, 3, 4]


// push는 성능면에서 좋지 않음. 
// 마지막으로 추가할 요소가 하나라면 length프로퍼티를 사용해 직접추가 가능. 
// push 보다 빠르다.

const arr2 = [1, 2];

// arr2.push(3)과 동일한 처리를 한다. 이 방법이 push 메서드보다 빠르다.
arr2[arr2.length] = 3;
console.log(arr2); // [1, 2, 3]



// push는 원본 배열을 변경하기 때문에 ES6의 스프레드 문법을 권장함. 
// 스프레드 문법을 사용하면 함수 호출 없이 표현식으로 마지막에 요소를 추가할 수 있고 부수효과도 없음. 
const arr3 = [1, 2];

// ES6 스프레드 문법
const newArr = [...arr3, 3];
console.log(newArr); // [1, 2, 3]