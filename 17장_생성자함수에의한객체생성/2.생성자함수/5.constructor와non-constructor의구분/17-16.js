//non-constructor인 함수 객체는 내부 메서드 [[Construct]]를 갖지 않음 .
//따라서 non-constructor인 함수 객체를 생성자 함수로서 호출하면 에러가 발생함. 

//주의 : 정의하지 않은 일반함수(callable이면서 constructor)에 new연산자를 붙여 호출하면 생성자 함수처럼 동작할 수 있음. 


function foo() {}

// 일반 함수로서 호출
// [[Call]]이 호출된다. 모든 함수 객체는 [[Call]]이 구현되어 있다.
foo();

// 생성자 함수로서 호출
// [[Construct]]가 호출된다. 이때 [[Construct]]를 갖지 않는다면 에러가 발생한다.
new foo();