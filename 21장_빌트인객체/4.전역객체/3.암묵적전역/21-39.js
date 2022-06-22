//변수가 아니라 단지 프로퍼티인 y는 delete 연산자로 삭제할 수 있다. 
//전역변수는 프로퍼티이지만 delete 연산자로 삭제할 수 없다.


var x = 10; // 전역 변수

function foo () {
  // 선언하지 않은 식별자에 값을 할당
  y = 20; // window.y = 20;
  console.log(x + y);
}

foo(); // 30

console.log(window.x); // 10
console.log(window.y); // 20

delete x; // 전역 변수는 삭제되지 않는다.
delete y; // 프로퍼티는 삭제된다.

console.log(window.x); // 10
console.log(window.y); // undefined