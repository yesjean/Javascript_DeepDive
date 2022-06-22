
// Array.isArray 는 Array 생성자 함수의 정적메서드임.

// 전달된 인수가 배열인지 여부를 true, false로 반환


// true 배열임
Array.isArray([]);
Array.isArray([1, 2]);
Array.isArray(new Array());

// false 배열아님
Array.isArray();
Array.isArray({});
Array.isArray(null);
Array.isArray(undefined);
Array.isArray(1);
Array.isArray('Array');
Array.isArray(true);
Array.isArray(false);
Array.isArray({ 0: 1, length: 1 })