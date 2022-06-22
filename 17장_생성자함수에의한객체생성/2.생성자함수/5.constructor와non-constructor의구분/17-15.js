//callable : 내부 메서드인 [[Call]]을 갖는 함수 객체
//constructor : 내부 메서드 [[Construct]]를 갖는 객체
//non-constructor : 내부 메서드 [[Construct]]를 갖지 않는 객체 

//호출할 수 없는 객체는 함수 객체가 아니다.
//함수 객체는 반드시 callable이어야 한다. 따라서 모든 함수 객체는 내부 메서드 [[Call]]을 가지고 있으므로 호출 가능.

//하지만 모든 함수 객체가 [[Construct]]를 가지는건 아님. 함수 객체는 constructor 일수도 있고, non-constructor일수도 있다. 

//자바스크립트 엔진음 함수 정의를 평가하여 함수 객체를 생성할 때 함수 정의 방식에 따라 함수를 구분함.
//constructor : 함수 선언문, 함수 표현식, 클래스(클래스도 함수임.)
//non-constructor : 메서드(ES6 메서드 축약 표현), 화살표 함수



// 일반 함수 정의: 함수 선언문, 함수 표현식
function foo() {}
const bar = function () {};
// 프로퍼티 x의 값으로 할당된 것은 일반 함수로 정의된 함수다. 이는 메서드로 인정하지 않는다.
const baz = {
  x: function () {}
};

// 일반 함수로 정의된 함수만이 constructor이다.
new foo();   // -> foo {}
new bar();   // -> bar {}
new baz.x(); // -> x {}

// 화살표 함수 정의
const arrow = () => {};

new arrow(); // TypeError: arrow is not a constructor

// 메서드 정의: ES6의 메서드 축약 표현만을 메서드로 인정한다.
const obj = {
  x() {}
};

new obj.x(); // TypeError: obj.x is not a constructor