//렉시컬 스코프 : 렉시컬 환경의 "외부 렉시컬 환경에 대한 참조"에 저장할 참조값, 
//          즉 상위 스코프에 대한 참조는 함수 정의가 평가되는 시점에 함수가 정의된 환경(위치)에 의해 결정된다.

const x = 1;

function foo() {
  const x = 10;
  bar();
}

function bar() {
  console.log(x);
}

foo(); // ?
bar(); // ?