//strict  mode가 적용된 일반 함수 내부의 this는 undefined가 바인딩된다.


function foo() {
    'use strict';
  
    console.log("foo's this: ", this);  // undefined
    function bar() {
      console.log("bar's this: ", this); // undefined
    }
    bar();
  }
  foo();