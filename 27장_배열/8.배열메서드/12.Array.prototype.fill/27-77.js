// Array.prototype.fill
// ES6에서 도입됨. 인수로 전달받은 값을 배열의 처음부터 끝까지 채움.
// 원본 배열이 변경됨

const arr = [1, 2, 3];

// 인수로 전달 받은 값 0을 배열의 처음부터 끝까지 요소로 채운다.
arr.fill(0);

// fill 메서드는 원본 배열을 직접 변경한다.
console.log(arr); // [0, 0, 0]



// 두번째 요소로 채우기 시작할 인덱스 설정가능
const arr2 = [1, 2, 3];

// 인수로 전달받은 값 0을 배열의 인덱스 1부터 끝까지 요소로 채운다.
arr2.fill(0, 1);

// fill 메서드는 원본 배열을 직접 변경한다.
console.log(arr2); // [1, 0, 0]



// 세번째 인수로 요소 채우기를 멈출 인덱스 설정 가능
const arr3 = [1, 2, 3, 4, 5];

// 인수로 전달받은 값 0을 배열의 인덱스 1부터 3 이전(인덱스 3 미포함)까지 요소로 채운다.
arr3.fill(0, 1, 3);

// fill 메서드는 원본 배열을 직접 변경한다.
console.log(arr3); // [1, 0, 0, 4, 5]



// 배열을 생성하면서 특정 값으로 요소 채우기 가능
const arr4 = new Array(3);
console.log(arr4); // [empty × 3]

// 인수로 전달받은 값 1을 배열의 처음부터 끝까지 요소로 채운다.
const result = arr4.fill(1);

// fill 메서드는 원본 배열을 직접 변경한다.
console.log(arr4); // [1, 1, 1]

// fill 메서드는 변경된 원본 배열을 반환한다.
console.log(result); // [1, 1, 1]


// fill 메서드를 이용하면 모든 요소를 하나의 값으로 밖에 못채움
// Array.from을 이용하면 두번째 인수로 전달한 콜백함수를 통해 요소값을 만들면서 배열을 채울수 있음. 
// 인수로 전달받은 정수만큼 요소를 생성하고 0부터 1씩 증가하면서 요소를 채운다.
const sequences = (length = 0) => Array.from({ length }, (_, i) => i);
// const sequences = (length = 0) => Array.from(new Array(length), (_, i) => i);

console.log(sequences(3)); // [0, 1, 2]