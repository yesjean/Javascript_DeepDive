// Array.prototype.includes
// ES7에서 도입. 배열내에 특정 요소가 포함되어 있는지 확인하여 true, false 반환
// 첫번째 인수로 검색할 대상 지정

const arr = [1, 2, 3];

// 배열에 요소 2가 포함되어 있는지 확인한다.
arr.includes(2); // -> true

// 배열에 요소 100이 포함되어 있는지 확인한다.
arr.includes(100); // -> false



// 두번째 인수로 검색을 시작할 인덱스 지정가능
// 생략할 경우 기본값 0이 설정됨.
// 음수를 전달하면 length 프로퍼티 값과 음수 인덱스를 합산하여(length + index) 검색시작 인덱스 설정함.
const arr2 = [1, 2, 3];

// 배열에 요소 1이 포함되어 있는지 인덱스 1부터 확인한다.
arr2.includes(1, 1); // -> false

// 배열에 요소 3이 포함되어 있는지 인덱스 2(arr2.length - 1)부터 확인한다.
arr2.includes(3, -1); // -> true



// indexOf를 사용해도 배열내에 특정요소가 있는지 확인가능.
// 하지만 반환값이 -1인지 확인해봐야하고 배열에 NaN이 있는지 확인할 수 없는 문제가 있다.
[NaN].indexOf(NaN) !== -1; // -> false
[NaN].includes(NaN);       // -> true