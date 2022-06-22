//name 프로퍼티 : 함수 이름.  ES6에서 정식 표준이됨.
//ES5 에서 -> 빈 문자열을 값으로 가짐
//ES6 에서 -> 함수 객체를 가리키는 식별자를 값으로 가짐


// 기명 함수 표현식
var namedFunc = function foo() {};
console.log(namedFunc.name); // foo

// 익명 함수 표현식
var anonymousFunc = function() {};
// ES5: name 프로퍼티는 빈 문자열을 값으로 갖는다.
// ES6: name 프로퍼티는 함수 객체를 가리키는 변수 이름을 값으로 갖는다.
console.log(anonymousFunc.name); // anonymousFunc

// 함수 선언문(Function declaration)
function bar() {}
console.log(bar.name); // bar



//함수 이름과 함수 객체를 가리키는 식별자는 의미가 다른다.
//함수를 호출할 때는 함수 이름이 아닌 함수 객체를 가리키는 식별자로 호출함. 
