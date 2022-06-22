

var x = 'global';

function foo() {
  console.log(x); // ① undefined 
  var x = 'local';
  console.log(x);
}

foo();
console.log(x); // global

//함수 내부에서 선언된 지역변수 x는 ①의 시점에 이미 선언되었고 undefined로 초기화됨.
//따라서 전역변수 x를 참조하는것이 아니라 지역변수 x를 참조해 값을 출력한다. 
//단, 변수 할당문이 실행되기 이전까지는 undefined



