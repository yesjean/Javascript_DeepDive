// Array.prototype.sort
// 배열의 요소를 정렬
// 원본 배열을 변경하고 정렬된 배열을 반환

const fruits = ['Banana', 'Orange', 'Apple'];

// 오름차순(ascending) 정렬
fruits.sort();

// sort 메서드는 원본 배열을 직접 변경한다.
console.log(fruits); // ['Apple', 'Banana', 'Orange']



// 한글도 가능
const fruits2 = ['바나나', '오렌지', '사과'];

// 오름차순(ascending) 정렬
fruits2.sort();

// sort 메서드는 원본 배열을 직접 변경한다.
console.log(fruits2); // ['바나나', '사과', '오렌지']



// 기본은 오름차순, 내림차순할려면 reverse사용
const fruits3 = ['Banana', 'Orange', 'Apple'];

// 오름차순(ascending) 정렬
fruits3.sort();

// sort 메서드는 원본 배열을 직접 변경한다.
console.log(fruits3); // ['Apple', 'Banana', 'Orange']

// 내림차순(descending) 정렬
fruits3.reverse();

// reverse 메서드도 원본 배열을 직접 변경한다.
console.log(fruits3); // ['Orange', 'Banana', 'Apple']



// 문자열은 괜찮지만 숫자는 정렬할때 주의가 필요
// 유니코드 코드 포인트의 순서를 따름. 
// 숫자를 일시적으로 문자열로 변환한 후 유니코드 코드 포인트의 순서를 기준으로 정렬함.
const points = [40, 100, 1, 5, 2, 25, 10];

points.sort();

// 숫자 요소들로 이루어진 배열은 의도한 대로 정렬되지 않는다.
console.log(points); // [1, 10, 100, 2, 25, 40, 5]



// 따라서 숫자요소를 정렬할 때는 sort메서드에 정렬 순서를 정의하는 비교함수를 인수로 전달해야함. 
// 비교함수의 반환값이 0보다 작으면 비교함수의 첫번째 인수를 우선하여 정렬
// 0보다 크면 두번째 인수를 우선하여 정렬
const points2 = [40, 100, 1, 5, 2, 25, 10];

// 숫자 배열의 오름차순 정렬. 비교 함수의 반환값이 0보다 작으면 a를 우선하여 정렬한다.
points2.sort((a, b) => a - b);
console.log(points2); // [1, 2, 5, 10, 25, 40, 100]

// 숫자 배열에서 최소/최대값 취득
console.log(points2[0], points2[points2.length]); // 1

// 숫자 배열의 내림차순 정렬. 비교 함수의 반환값이 0보다 작으면 b를 우선하여 정렬한다.
points2.sort((a, b) => b - a);
console.log(points2); // [100, 40, 25, 10, 5, 2, 1]

// 숫자 배열에서 최대값 취득
console.log(points2[0]); // 100




// 객체를 요소로 갖는 배열을 정렬
const todos = [
    { id: 4, content: 'JavaScript' },
    { id: 1, content: 'HTML' },
    { id: 2, content: 'CSS' }
  ];
  
  // 비교 함수. 매개변수 key는 프로퍼티 키다.
  function compare(key) {
    // 프로퍼티 값이 문자열인 경우 - 산술 연산으로 비교하면 NaN이 나오므로 비교 연산을 사용한다.
    // 비교 함수는 양수/음수/0을 반환하면 되므로 - 산술 연산 대신 비교 연산을 사용할 수 있다.
    return (a, b) => (a[key] > b[key] ? 1 : (a[key] < b[key] ? -1 : 0));
  }
  
  // id를 기준으로 오름차순 정렬
  todos.sort(compare('id'));
  console.log(todos);
  /*
  [
    { id: 1, content: 'HTML' },
    { id: 2, content: 'CSS' },
    { id: 4, content: 'JavaScript' }
  ]
  */
  
  // content를 기준으로 오름차순 정렬
  todos.sort(compare('content'));
  console.log(todos);
  /*
  [
    { id: 2, content: 'CSS' },
    { id: 1, content: 'HTML' },
    { id: 4, content: 'JavaScript' }
  ]
  */