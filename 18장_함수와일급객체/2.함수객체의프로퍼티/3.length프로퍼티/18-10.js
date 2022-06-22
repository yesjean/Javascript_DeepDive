//length 프로퍼티 : 함수를 정의할 때 선언한 매개변수의 개수를 가리킨다
//arguments 객체의 length 프로퍼티는 인자의 개수를 가리킴.
//함수 객체의 length 프로퍼티는 매개 변수의 개수를 가리킴.

function foo() {}
console.log(foo.length); // 0

function bar(x) {
  return x;
}
console.log(bar.length); // 1

function baz(x, y) {
  return x * y;
}
console.log(baz.length); // 2