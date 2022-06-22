//함수 생성 시점과 함수 호이스팅
//함수 선언문으로 정의한 함수는 함수 선언문 이전에 호출 가능
//함수 표현식으로 정의한 함수는 함수 표현식 이전에 호출 불가 
// ==> 함수의 생성 시점이 다르기 때문.

//함수 호이스팅 : 함수 선언문이 코드의 선두로 끌어 올려진 것처럼 동작하는 자바스크립트 고유의 특징 

// 함수 참조
console.dir(add); // ƒ add(x, y)
console.dir(sub); // undefined

// 함수 호출
console.log(add(2, 5)); // 7
console.log(sub(2, 5)); // TypeError: sub is not a function

// 함수 선언문 - 런타임 이전에 함수 객체가 먼저 생성됨.
function add(x, y) {
  return x + y;
}

// 함수 표현식
var sub = function (x, y) {
  return x - y;
};