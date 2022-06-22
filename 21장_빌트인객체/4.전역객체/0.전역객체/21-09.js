/*
전역 객체 : 코드가 실행되기 이전 단계에 자바스크립트 엔진에 의해 어떤 객체보다도 먼저 생성돼는 특수한 객체이며 어떤 객체에도 속하지 않은 최상위 객체임.

전역 객체의 특징
1. 개발자가 의도적으로 생성할 수 없다. 생성할 수 있는 생성자 함수 제공 X
2. 전역 객체의 프로퍼티를 참조할 때 window를 생략할 수 있다. 
3. Object, String, Number, Boolean, Function, Array, RegExp, Date, Math, Promise 같은 표준 빌트인 객체를 프로퍼티로 가지고 있음. 
4. 자바스크립트 실행환경에 따라 추가적으로 프로퍼티와 메서드를 가짐. 
5. var 키워드로 선언한 전역 변수와 선언하지 않은 변수에 값을 할당한 암묵적 전역, 그리고 전역 함수는 전역 객체의 프로퍼티가 된다.
6. let, const 키워드로 선언한 전역 변수는 전역 객체의 프로퍼티가 아니다. 
7. 브라우저 환경의 모든 자바스크립트 코드는 하나의 전역 객체 window를 공유한다. 
    여러개의 script 태그로 코드를 분리해도 하나의 전역 객체 window를 공유함. 
*/


// 문자열 'F'를 16진수로 해석하여 10진수로 변환하여 반환한다.
window.parseInt('F', 16); // -> 15
// window.parseInt는 parseInt로 호출할 수 있다.
parseInt('F', 16); // -> 15

window.parseInt === parseInt; // -> true




// var 키워드로 선언한 전역 변수
var foo = 1;
console.log(window.foo); // 1

// 선언하지 않은 변수에 값을 암묵적 전역. bar는 전역 변수가 아니라 전역 객체의 프로퍼티다.
bar = 2; // window.bar = 2
console.log(window.bar); // 2

// 전역 함수
function baz() { return 3; }
console.log(window.baz()); // 3



// let 키워드로 선언한 전역 변수
let foo2 = 123;
console.log(window.foo2); // undefined