//기본적으로 this에는 전역 객체가 바인딩 된다.
//this는 자기 참조 변수 이므로 객체를 생성하지 않는 일반 함수에서 this는 의미가 없다.

function foo() {
    console.log("foo's this: ", this);  // window
    function bar() {
      console.log("bar's this: ", this); // window
    }
    bar();
  }
  foo();