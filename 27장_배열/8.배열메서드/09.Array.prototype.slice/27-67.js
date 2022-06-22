// Array.prototype.slice 
// 인수로 전달된 범위의 요소들을 복사하여 배열로 반환함.
// 원본배열 변경되지 않음

// slice(복사시작인덱스, 복사종료인덱스)

const arr = [1, 2, 3];

// arr[0]부터 arr[1] 이전(arr[1] 미포함)까지 복사하여 반환한다.
arr.slice(0, 1); // -> [1]

// arr[1]부터 arr[2] 이전(arr[2] 미포함)까지 복사하여 반환한다.
arr.slice(1, 2); // -> [2]

// 원본은 변경되지 않는다.
console.log(arr); // [1, 2, 3]



// 두번째 인수를 생략하면 전부 복사됨
const arr2 = [1, 2, 3];

// arr2[1]부터 이후의 모든 요소를 복사하여 반환한다.
arr2.slice(1); // -> [2, 3]



// 첫번째 인수가 음수인경우 배열의 끝에서 부터 복사함.
const arr3 = [1, 2, 3];

// 배열의 끝에서부터 요소를 한 개 복사하여 반환한다.
arr3.slice(-1); // -> [3]

// 배열의 끝에서부터 요소를 두 개 복사하여 반환한다.
arr3.slice(-2); // -> [2, 3]



// 인수를 모두 생략하면 원본의 복사본이 생성됨
const arr4 = [1, 2, 3];

// 인수를 모두 생략하면 원본 배열의 복사본을 생성하여 반환한다.
const copy = arr4.slice();
console.log(copy); // [1, 2, 3]
console.log(copy === arr4); // false




// 이미 생성된 복사본은 얕은 복사를 통해 생성된다.
const todos = [
    { id: 1, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 3, content: 'Javascript', completed: false }
  ];
  
  // 얕은 복사(shallow copy)
  const _todos = todos.slice();
  // const _todos = [...todos];
  
  // _todos와 todos는 참조값이 다른 별개의 객체다.
  console.log(_todos === todos); // false
  
  // 배열 요소의 참조값이 같다. 즉, 얕은 복사되었다.
  console.log(_todos[0] === todos[0]); // true