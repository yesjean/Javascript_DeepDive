//동적타이핑

/*
정적 타입 언어 -> 변수 선언 시적에 변수의 타입이 결정되고 변수의 타입 변경 불가
동적 타입 언어 -> 값을 할당하는 시점에 변수의 타입이 동적으로 결정되고 변수의 타입 변경 가능 

==> 자바스크립트의 변수는 선언이 아닌 할당에 의해 타입이 결정된다. 
*/

var foo;
console.log(typeof foo);  // undefined

foo = 3;
console.log(typeof foo);  // number

foo = 'Hello';
console.log(typeof foo);  // string

foo = true;
console.log(typeof foo);  // boolean

foo = null;
console.log(typeof foo);  // object

foo = Symbol(); // 심벌
console.log(typeof foo);  // symbol

foo = {}; // 객체
console.log(typeof foo);  // object

foo = []; // 배열
console.log(typeof foo);  // object

foo = function () {}; // 함수
console.log(typeof foo);  // function