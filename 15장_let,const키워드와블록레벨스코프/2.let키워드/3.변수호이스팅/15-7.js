//var로 선언한 변수와 달리 let으로 선언한 변수는 변수 호이스팅이 발생하지 않는것 처럼 동작한다.

console.log(foo);   //ReferenceError: foo is not defined
let foo;

